const express = require("express");
const cors = require("cors");
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");

const app = express();

app.use(express.json());
app.use(cors());

app.post("/todo", async function(req, res) {
    const createPayload = req.body;
    const parsePayload = createTodo.safeParse(createPayload);
    if(!parsePayload.success) {
        res.status(401).json({
            msg: "correct inputs not passed"
        })
        return
    }
    await todo.create({
        title: createPayload.title,
        desc: createPayload.desc,
    })

    res.json({
        msg: "Todo created",
    })
})

app.get("/todos", async (req, res) => {
    const todos = await todo.find() 

    res.json({
        todos
    })
})

app.put("/todo", async (req, res) => {
    const updatePayload = req.body;
    const parsePayload = updateTodo.safeParse(updatePayload);
    if(!parsePayload.success) {
        res.status(401).json({
            msg: "correct inputs(id) not passed"
        })
        return
    }

    await todo.updateOne({
        _id: req.body.id
    },{ 
        completed: true
    })
})

app.listen(3000);