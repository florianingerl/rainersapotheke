const pdfutils = require("./my_modules/pdfutils.js");

pdfutils.writeUsersInPdf( pdfFileName => {
    console.log("The file " + pdfFileName + " has just been written!");
});

