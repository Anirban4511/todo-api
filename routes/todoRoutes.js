import express from "express";

import { protect } from "../middlewares/auth.js";

import {
    getTodos,
    createTodo,
    updateTodo,
    deleteTodo
} from '../controllers/todoController.js'

const router = express.Router()

router.get('/',protect,getTodos);
router.post('/',protect,createTodo)
router.put('/:id',protect,updateTodo)
router.delete('/:id',protect,deleteTodo)

export default router;