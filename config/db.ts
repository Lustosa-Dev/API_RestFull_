import mongoose from "mongoose";
import config  from "config";

import Logger from '../config/loggers'

async function connection (){
  const dbUri = config.get<string>("dbUri");

  try {

    await mongoose.connect(dbUri);
    Logger.info("conectado com sucesso!!")

  } catch(err){
    Logger.error("erro na conecção", err)
    process.exit(1)
  }
}

export default connection;