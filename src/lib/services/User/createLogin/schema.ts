import { z as zod } from 'zod'

export const createLoginSchema = zod.object({
  email: zod
    .string()
    .email('Informe um e-mail válido!')
    .optional()
    .refine((v) => !!v, 'O campo e-mail é obrigatório.'),
  password: zod
    .string()
    .optional()
    .refine((v) => !!v, 'O campo senha é obrigatório.'),
})

export type CreateLoginPayload = zod.infer<typeof createLoginSchema>
