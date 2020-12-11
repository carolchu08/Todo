import api from "./api";

export const getTodoList = () =>{
    return api.get("/todos");
};

export const addNewTodo = (text,todoLabels) => {
    return api.post("/todos",{text,todoLabels});
};

export const deleteTodo = (id) =>{
    return api.delete("/todos/"+id);
}

export const updateDoneStatus = (todo) =>
{
    return api.put("/todos/"+todo.id,todo)
}