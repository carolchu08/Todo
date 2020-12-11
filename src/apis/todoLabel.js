import api from "./api";
export const getTodoLabelList = () =>{
    return api.get("/todoLabel");
};

export const addNewTodoLabel = (label) => {
    return api.post("/todoLabel",label);
};

export const deleteTodoLabel = (labelID) =>{
    return api.delete("/todoLabel/"+labelID);
}

export const updateTodoLabelColor = (labelID,color) =>
{
    return api.put("/todoLabel/"+labelID,{color})
}