const hbs = require('hbs')

hbs.registerHelper('getAnio',()=>{
    return new Date().getFullYear();
  })
  hbs.registerHelper('capitalizar',(texto)=>{
    let palabras = texto.split('');
    palabras.forEach((element,idx) => {
      element[idx] = element.charAt(0).toUpperCase() + element.slice(1).toLowerCase
  
    });
    return palabras.join('');
  })