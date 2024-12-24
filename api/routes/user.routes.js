import express from "express";
import {createUser,loginUser,logOutCurrentUser,getAllUsers,getCurrentUserProfile,updateCurrentUserProfile,deleteUserById,getUserById,updateUserById} from "../controller/user.controller";
import { authenticate,authorizeAdmin } from "../middleware/authMiddleware";


const router = express.Router();

router.route('/').post(createUser).get(authenticate,authorizeAdmin,getAllUsers);
router.post('/auth',loginUser)
router.post('/logout',logOutCurrentUser)

router.route('/profile').get(authenticate,getCurrentUserProfile),put(authenticate,updateCurrentUserProfile)
router.route('/:id').delete(authenticate,authorizeAdmin,deleteUserById).get(authenticate,authorizeAdmin,getUserById).put(authenticate,authorizeAdmin,updateUserById)

export default router;