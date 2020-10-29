const express = require('express')
const app = express()
const hbs = require('hbs')
require('./hbs/helpers')
const PORT = process.env.PORT || 3000
//Un middleware es un callback que se va a ejecutar siemrpe no importa que url pida el usuario
app.use(express.static(__dirname+'/public'))
//Express HBS engine
hbs.registerPartials(__dirname+'/views/partials')
app.set('view engine', 'hbs');
//Helper es una funcion que se dispara cuando el template lo requiere

app.get('/',  (req, res)=> {//Configuramos una solicitud get cuando el path sea un /
  //res.send('Hello World')
  res.render('home',{
      nombre:'Santiago',
      
  });
//   let salida = {
//     nombre:'Santiago',
//     edad:22,
//     url:req.url
// };
//res.send(salida)
})
app.get('/about',(req, res)=> {//Configuramos una solicitud get cuando el path sea un /
  //res.send('Hello World')
  res.render('about',{
      
  });
//   let salida = {
//     nombre:'Santiago',
//     edad:22,
//     url:req.url
// };
//res.send(salida)
})


 
app.listen(3000,()=>{
    console.log(`Escuchando peticiones en el puerto ${PORT}`)
})
//Comando en el package.json
//Heroku es un servicio en la nube que permite desplegar aplicaciones