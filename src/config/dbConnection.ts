import mongoose from "mongoose";

import { dbUrl } from "../utils/shared";
import logger from "../logger";

class Connection {
  private static mongooseOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  };

  static async dbConnect() {
    try {
      await mongoose.connect(dbUrl, Connection.mongooseOptions);
      logger.info("db connected successfully");
    } catch (error) {
      logger.error(`Error connecting to db ${error}`);
    }
  }
}

export default Connection;
