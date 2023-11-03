import * as dotenv from 'dotenv'
import * as core from "express-serve-static-core";
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
           res.status(200).send(articles);
        })
     })
     app.get("/links/get", (req, res)=>{
        getConnection().then(async (db)=>{
           const linksC = await db.collection("links").find({});
           const links = await linksC.toArray();
           res.status(200).send(links);
        })
     })
     app.get("/links-banner/get", (req, res)=>{
        getConnection().then(async (db)=>{
           const linksBannerC = await db.collection("linksBanner").find({});
           const linksBanner = await linksBannerC.toArray();
           res.status(200).send(linksBanner);
        })
     })
}

export default startServer;