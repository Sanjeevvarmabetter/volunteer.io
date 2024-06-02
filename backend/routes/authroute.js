import { Signup, Login } from '../controllers/authController.js';

import { userVerification } from '../Middlewares/AuthMiddleware.js';

const router = require('express').Router()


router.post('/signup', Signup)
router.post('/login', Login)
router.post('/',userVerification)

export default router;  