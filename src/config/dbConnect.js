import mongoose from "mongoose";

mongoose.connect(
  "mongodb+srv://joao:joao@database1.6tdllxh.mongodb.net/alura-node"
);

let db = mongoose.connection;

export default db;
