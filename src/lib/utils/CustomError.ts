type CustomErrorOptions = {
  statusCode: number
  message: string[] | string
  error: string
}

export default class CustomError extends Error {
  statusCode: number
  message: string
  error: string

  constructor(options?: CustomErrorOptions) {
    super()
    this.statusCode = options?.statusCode || 500
    this.error = options?.error || 'Internal server error'
    this.message = 'Erro ao realizar a requisição. Tente novamente!'
    if (options?.message) {
      if (Array.isArray(options?.message) && options?.message?.[0]) {
        this.message = options.message[0]
      }
      if (typeof options?.message === 'string' && options?.message) {
        this.message = options.message
      }
    }
  }

  getMessage() {
    return {
      statusCode: this.statusCode,
      message: this.message,
      error: this.error,
    }
  }
}
