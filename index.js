import express from 'express';
import bodyParser from 'body-parser';
import router from './src/router/message.router.js';
import { corsMiddleware } from './src/middlewares/cors.js';


    const app = express();
    const PORT = process.env.PORT || 3000;
    app.use(bodyParser.urlencoded({extended:true}))

    app.use(bodyParser.json())
    
    app.use(corsMiddleware);
    app.get("/", (req, res) => {
        res.status(200).send({ message: "Hello There" })
    })

    app.use('/mail', router)
    

   app.listen(PORT)
   console.log(`Server listening on http://localhost:${PORT}`)

export default app


