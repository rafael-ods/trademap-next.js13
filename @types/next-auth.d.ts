import 'next-auth'

declare module 'next-auth' {
  export type User = Omit<DefaultUser, 'image'> & {
    _id: string
    id: string
    name: string
    lastName: string
    gender: string
    document: string
    email: string
    phone: string
    birthdate: string
    xeerpaId: string
    xeerpaToken: string
    regulationFlag: boolean
    keepInformationFlag: boolean
    sendNewsFlag: boolean
    accountConfirmed: boolean
    accountConfirmedToken: string
    zipCode: string
    street: string
    number: string
    gaUserId: string[]
    utmSource: string
    utmMedium: string
    utmCampaign: string
    utmTerm: string
    utmContent: string
    neighborhood: string
    state: string
    city: string
    activeFlag: boolean
    cdpFlag: boolean
    hasInvoice: boolean
    role: string
    createdAt: string
    updatedAt: string
    __v: number
    accountConfirmedAt: string
    lastRetrySendCdpAt: string
    invoices: any[]
    token: string
    hasInvalidLuckNumber: boolean
  }
  export type Session = Omit<DefaultSession, 'user'> & {
    user?: User
    expires: ISODateString
  }
}
