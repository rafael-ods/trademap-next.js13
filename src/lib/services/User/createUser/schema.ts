import { z as zod } from 'zod'
import { validateCPF, validatePhone } from 'validations-br'
// import { differenceInYears } from 'date-fns'
import getStateList from '../../state/getStateList'

const createUserSchema = zod
  .object({
    name: zod
      .string()
      .optional()
      .refine((v) => !!v, 'O campo nome é obrigatório.'),
    lastName: zod
      .string()
      .optional()
      .refine((v) => !!v, 'O campo sobrenome é obrigatório.'),
    document: zod
      .string()
      .optional()
      .refine((v) => !!v, 'O campo cpf é obrigatório.')
      .refine((v) => validateCPF(v || ''), 'CPF inválido.'),
    email: zod
      .string({ required_error: 'O campo e-mail é obrigatório.' })
      .email('Informe um e-mail válido!'),
    password: zod
      .string()
      .optional()
      .transform((v = '') => v)
      .refine((v) => !!v, 'O campo senha é obrigatório.')
      .refine((v) => {
        const pattern =
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\\$%\\^&\\*])(?=.{8,})/
        return pattern.test(v)
      }, 'Precisa conter no mínimo 8 caracteres, caixa-alta, caixa-baixa, número e um caractere especial'),
    passwordConfirmation: zod
      .string()
      .optional()
      .transform((v = '') => v)
      .refine((v) => !!v, 'O campo confirmar senha é obrigatório.'),
    phone: zod
      .string()
      .optional()
      .transform((v = '') => v.replace(/[^0-9]/g, ''))
      .refine((v) => !!v && v.length === 11, 'O campo celular é obrigatório.')
      .refine((v) => validatePhone(v || ''), 'Celular inválido.'),
    birthdate: zod
      .string()
      .optional()
      .refine(
        (v = '') => v.length === 10,
        'O campo data nascimento é obrigatório.',
      )
      .transform((v = '') => {
        const date = v.split('/')
        return `${date[2]}-${date[1]}-${date[0]}`
      }),
    // .refine((v = '') => {
    //   try {
    //     const years = differenceInYears(new Date(), new Date(v))
    //     return years >= 18
    //   } catch (error) {
    //     return false
    //   }
    // }, 'Você precisa ter 18 ou mais anos.'),
    zipCode: zod
      .string()
      .optional()
      .refine((v) => !!v, 'O campo cep é obrigatório.'),
    street: zod
      .string()
      .optional()
      .refine((v) => !!v, 'O campo endereço é obrigatório.'),
    number: zod
      .string()
      .optional()
      .transform((v) => v || '')
      .refine((v) => !!v, 'O campo número é obrigatório.'),
    complement: zod
      .string()
      .optional()
      .transform((v) => v || ''),
    neighborhood: zod
      .string()
      .optional()
      .refine((v) => !!v, 'O campo bairro é obrigatório.'),
    state: zod
      .string()
      .optional()
      .refine((v = '') => {
        const options = getStateList().map((item) => item.value)
        return options.includes(v)
      }, 'O campo estado é obrigatório.'),
    city: zod
      .string()
      .optional()
      .refine((v) => !!v, 'O campo cidade é obrigatório.'),
    regulationFlag: zod
      .boolean()
      .optional()
      .transform((v) => !!v)
      .refine((v) => !!v, 'O campo regulamento é obrigatório.'),
    keepInformationFlag: zod
      .boolean()
      .optional()
      .transform((v) => !!v)
      .refine((v) => !!v, 'O campo manter minhas informações é obrigatório.'),
    sendNewsFlag: zod
      .boolean()
      .optional()
      .transform((v) => !!v),
    utmSource: zod
      .string()
      .optional()
      .transform((v) => v || ''),
    utmMedium: zod
      .string()
      .optional()
      .transform((v) => v || ''),
    utmCampaign: zod
      .string()
      .optional()
      .transform((v) => v || ''),
    utmTerm: zod
      .string()
      .optional()
      .transform((v) => v || ''),
    utmContent: zod
      .string()
      .optional()
      .transform((v) => v || ''),
    xeerpaId: zod
      .string()
      .optional()
      .transform((v) => v || ''),
  })
  .refine((fields) => fields.password === fields.passwordConfirmation, {
    message: 'As senhas são diferentes.',
    path: ['passwordConfirmation'],
  })

export type CreateUserPayload = zod.infer<typeof createUserSchema>

export type CreateUserResponse = {
  _id: string
  id: string
  name: string
  lastName: string
  gender: string
  document: string
  email: string
  phone: string
  password: string
  birthdate: string
  xeerpaId: string | null
  xeerpaToken: string | null
  regulationFlag: boolean
  keepInformationFlag: boolean
  sendNewsFlag: boolean
  accountConfirmed: boolean
  accountConfirmedToken: string
  zipCode: string
  street: string
  number: string
  complement: string
  gaUserId: string[]
  utmSource: string
  utmMedium: string
  utmCampaign: string
  utmTerm: string
  utmContent: string
  neighborhood: string
  state: 'SP'
  city: 'Santos'
  activeFlag: true
  cdpFlag: false
  hasInvoice: false
  role: string
  createdAt: string
  updatedAt: string
  __v: number
}

export default createUserSchema
