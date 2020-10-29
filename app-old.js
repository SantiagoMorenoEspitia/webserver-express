const http = require('http')//No necesita instalarse 

http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'application/json'});
    //res.write('Hola mundo')
    let salida = {
        nombre:'Santoago',
        edad:22,
        url:req.url
    }
    res.write(JSON.stringify(salida))
    res.end()
}).listen(8080);

console.log('Escuchando el puerto 8080')