import api from "./api";
export const getTodoLabelList = () =>{
    return api.get("/todoLabel");
};

export const addNewTodoLabel = (label) => {
    return api.post("/todoLabel",label);
};

export const deleteTodoLabel = (id) =>{
    return api.delete("/todoLabel/"+id);
}

export const updateTodoLabelColor = (id,color) =>
{
    return api.put("/todoLabel/"+id,{color})
}