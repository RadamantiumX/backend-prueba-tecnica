import { Router } from 'express';
import { MailController } from '../controller/mail.controller.js';

const router = Router();

const mailController = new MailController();

router.post('/message', mailController.newMessage)

export default router