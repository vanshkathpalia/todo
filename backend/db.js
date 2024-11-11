const mongoose = require("mongoose");
const { boolean } = require("zod");

// mongodb+srv://vanshkathpalia:Van@1shk@cluster0.vww27.mongodb.net/todo

mongoose.connect("mongodb+srv://vanshkumarkathpalia:vansh123@cluster0.7ldyv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

const todoSchema = mongoose.Schema({
    title: String,
    desc: String,
    completed: Boolean
})

const todo = mongoose.model("todos", todoSchema)

module.exports = {
    todo
}