export function Todos({todos}) {
    return <div>
        {todos.map(function(todo) {
            return <>
            <h1>{todo.title}</h1>    
            <h2>{todo.desc}</h2>
            <button>{todo.completed == true ? "completed" : "make as comeplete"}</button>
            </>
        })}
    </div>
}