import express from 'express';
import cors from 'cors';
import db from './database/db.js';
import blogRoutes from './routes/routes.js'

const app = express()

app.use( cors() )
app.use( express.json() )
app.use('/blogs', blogRoutes)


try {
    await db.authenticate()
    console.log("Conectado")
} catch (error) {
    console.log("No se conecto")
}


app.get('/',(req, res) =>{
    res.send('Holi :D')
})

app.listen(8000, ()=> {
    console.log('Holiiii')
})