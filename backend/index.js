import express from 'express';
import cors from 'cors';
import ComicsRoute from './api/ComicsRoute.js';
import dotenv from 'dotenv';
import mongodb from 'mongodb';
import ComicsDAO from './dao/ComicsDAO.js';

class Index {
  static app = express();
  static router = express.Router();

  static main() {
    dotenv.config();
    Index.setUpServer();
    Index.setUpDatabase();
  }

  static setUpServer() {
    console.log("set up server");
    Index.app.use(cors());
    console.log("set up server2");
    Index.app.use(express.json());
    console.log("set up server3");
    Index.app.use('/api/v1/comics', ComicsRoute.configRoutes(Index.router));
    console.log("set up server4");
    //Index.app.use('*', (res) => {
    //  res.status(404).json({ error: 'not found' });
    //});
  }

  static async setUpDatabase() {
    const client = new mongodb.MongoClient(process.env.BIANKAQUEST_DB_URI);
    const port = process.env.PORT || 8000;
    try {
      //connect to cluster
      await client.connect();
      await ComicsDAO.injectDB(client);
      Index.app.listen(port, () => {
        console.log(`server is running on port:${port}`);
      });
    } catch (e) {
      console.error(e);
      process.exit(1);
    }
  }
}

Index.main();