const db = require("./sqlite3db.js");
const fs = require('fs');

function generateLatexCode( callback ){
    db.getAllUsers( rows => {
        let tex = "\\documentclass{article}\n"+
        "\\begin{document}\n"+
        
        "\\begin{center}\n"+
            "\\begin{tabular}{ | l | c | r | }\n"+
              "\\hline\n"+
              "id & Vorname & Nachname \\\\ \\hline\n";

        rows.forEach( row => {
            tex = tex + row.id + "&" + row.vorname + "&" + row.nachname + "\\\\ \\hline\n";
        });

        tex = tex + "\\end{tabular}\n"+
        "\\end{center}\n"+
      
      "\\end{document} ";
      callback(tex);
    });
}

function writeTexFile(data, callback){
    
fs.writeFile('users.tex', data, err => {
  if (err) {
    console.error(err);
  }
  callback('users.tex');
});
}

function genPdfFromTexFile(texFileName, callback){
   
  var child =  require('child_process').exec('pdflatex.exe ' + texFileName, (error, stdout, stderr) => {
  if (error) {
    console.error(`error: ${error.message}`);
    return;
  }

  if (stderr) {
    console.error(`stderr: ${stderr}`);
    return;
  }

  console.log(`stdout:\n${stdout}`);
});

    child.on('exit', () => { callback('users.pdf'); } );

}

function writeUsersInPdf( callback ){
    generateLatexCode( data => {
        writeTexFile(data, texFileName => {
            genPdfFromTexFile(texFileName, callback );
        });
    });
}

module.exports = {
    generateLatexCode: generateLatexCode,
    writeTexFile: writeTexFile,
    genPdfFromTexFile: genPdfFromTexFile,
    writeUsersInPdf : writeUsersInPdf
};