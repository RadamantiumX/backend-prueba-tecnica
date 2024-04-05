import z from 'zod';

const messageSchema = z.object({
    nombre: z.string({
        required_error: 'El nombre es requerido'
    }).max(20,{message:'El nombre no puede tener más de 20 caracteres'}),
    apellido: z.string({
        required_error: 'El apellido es requerido'
    }).max(20,{message:'El apellido no puede tener más de 20 caracteres'}),
    email: z.string({
        required_error: 'El mail es requerido'
    }).email({message:'El email tiene que ser valido'}),
    profesion: z.string({
        required_error: 'La profesión es requerida'
    }).max(20,{message:'La profesión no puede tener más de 20 caracteres'}),
    empresa: z.string({
        required_error: 'La empresa es requerida'
    }).max(20,{message:'La empresa no puede tener más de 20 caracteres'}),
    pais: z.string({
        required_error: 'El país es requerida'
    }).max(20,{message:'El país no puede tener más de 20 caracteres'}),
})

export function validateMessageSchema(input){
    return messageSchema.safeParse(input)
}
