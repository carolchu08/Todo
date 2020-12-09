import api from "./api";

export const getTodoList = () =>{
    return api.get("/todos");
};

export const addNewTodo = (text,category) => {
    return api.post("/todos",{text,category});
};

export const deleteTodo = (id) =>{
    return api.delete("/todos/"+id);
}

export const updateDoneStatus = (id,done) =>
{
    return api.put("/todos/"+id,{done})
}