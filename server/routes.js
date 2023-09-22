import express,{Router} from "express";
const router = express.Router();
import {addUser,getUsers,getUserById,editUser,deleteUser} from "./usercontroller.js";

router.post('/add',addUser);
router.get('/', getUsers);
router.get('/:id', getUserById);
router.put('/:id', editUser);
router.delete('/:id', deleteUser);

export default router 