//Este archivo sirve para crear las configuraciones de la aplicacion

import express from "express";
import { create } from "express-handlebars";
import indexRoutes from './routes/index.routes';
import path from 'path';
import morgan from 'morgan';
// al instalar babel evitamos importar de la siguiente forma const express = require('express')

const app = express();

//
app.set('views', path.join(__dirname, 'views'));

const exphbs = create({
    extname: '.hbs',
    layoutsDir: path.join(app.get("views"), "layouts"),
    partialsDir: path.join(app.get("views"), "partials"),
    defaultLayout:'main'
  });

app.engine(".hbs", exphbs.engine); //indica que utilizaremos el motor de plantilla handlebars y utilizaremos la extension hbs en lugar de html
app.set('view engine', '.hbs')

//Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }))

//Routes
app.use(indexRoutes)

export default app;