const express = require('express')
const { create } = require('express-handlebars');
require('dotenv').config();

const app = express()
const port = process.env.PORT;
app.use(express.static('public'));

const hbs = create({
    partialsDir:[
        "./views/partials"
    ]
});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');


app.get('/', (req, res)=>{
    res.render('home', {
        nombre: 'Antonio Guerrero',
        titulo: 'Programador Full Stack'
    });
})
app.get('/generic', (req, res)=>{
    res.render('home',{
        layout:'generic'
    });
})

app.get('/elements', (req, res)=>{
    res.render('home',{
        layout:'elements'
    });
})

app.listen(port, () =>{
    console.log(`Ejemplo de app en el puerto ${port}`)
  })