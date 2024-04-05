import { validateMessageSchema } from '../schema/validation.js'
import { StatusCodes } from 'http-status-codes'
import { prisma } from '../db/prisma.js'


export class MailController{
   
    async newMessage(req, res ){
        const { nombre, apellido, email, profesion, empresa, pais} = req.body
        const validate = validateMessageSchema(req.body)
        if(!validate.success){
            /*return next({
                status: StatusCodes.BAD_REQUEST,
                message: JSON.parse(validate.error.message)
            })*/
            res.status(400).json({ message: JSON.parse(validate.error.message) })
        }

        const message = await prisma.form.create({
            data: {
                nombre: nombre,
                apellido: apellido,
                email: email,
                profesion: profesion,
                empresa: empresa,
                pais: pais,
            }
        })
        res.status(StatusCodes.OK).json({ message:"mensaje enviado satisfactoriamente" })
    }
}