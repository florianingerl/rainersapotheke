function product(x,y){
    return x*y;
}

console.log(product(5,3));

function productCallback(x,y,callback){
    let produkt =x*y;
    callback(produkt);
}

productCallback(5,3, 
    (result) => {
        console.log(result);
    }
    );