import * as dotenv from 'dotenv'
import * as core from "express-serve-static-core";
import {sampleData} from './data/datasource';
import articles from './data/articles'
import { getConnection } from './data/db';

require("dotenv").config();

dotenv.config()

const PORT = process.env.PORT || 3000

export const startServer = (app: core.Express) => {
    app.listen(PORT, async () => {
        console.log(`Listening on port ${PORT}...`)
     })

     app.get("/articles/get", (req, res)=>{
        getConnection().then(async (db)=>{
           const articlesC = await db.collection("articles").find({});
           const articles = await articlesC.toArray();
           console.log(articles)
           res.status(200).send(articles);
        })
     })
}

export default startServer;