import { Router } from 'express';
// import { MailController } from '../controller/mail.controller.js';

const router = Router();

// const mailController = new MailController();

// router.post('/message', mailController.newMessage)

router.post('/message', async (req, res) => {
    try {
        const message = await prisma.form.create({
            data: req.body
        })
       res.set({
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
        });
        res.json({ message: 'Message saved' })
    } catch (err) {
        res.status(400).json(err)
    }
})

export default router