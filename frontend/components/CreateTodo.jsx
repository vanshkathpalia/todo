import { useState } from "react"

export function CreateTodo() {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    return <>

        <input type="text" placeholder="title" onChange={function(e) {
           const value = e.target.value;
           setTitle(e.target.value);
        }}></input> <br />

        <input type="text" placeholder="desc" onChange={function(e) {
           const value = e.target.value;
           setDesc(e.target.value);
        }}></input> <br />

        <button onClick={function() {
            fetch("http://localhost:3000/todo", {
                method: "POST",
                body: JSON.stringify({
                    title: title,
                    desc: desc
                }),
                headers: {
                    "Content-Type": "application/json",
                },
            })
            .then(async function(res) {
                const json = await res.json()
                alert("todo created")
                console.log(json);
                
            })}}>Add to do</button>
    </>
}