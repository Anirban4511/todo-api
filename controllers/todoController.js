import { Todo } from "../models/Todo.js";

export const getTodos = async (req, res) => {
  const todos = await Todo.find({ user: req.user });
  res.json(todos);
};

export const createTodo = async (req, res) => {
  const todo = new Todo({ ...req.body, user: req.user });
  await todo.save();
  res.status(201).json(todo);
};

export const updateTodo=async(req,res)=>{
    const todo=await Todo.findOneAndUpdate(
        {
            _id:req.params.id, user : req.user
        },
        req.body,
        {
            new:true
        }
    )
    res.json(todo)
}

export const deleteTodo=async(req,res)=>{
    await Todo.findOneAndDelete({_id:req.params.id,user:req.user})
    res.json({msg:"Todo deleted"})
}