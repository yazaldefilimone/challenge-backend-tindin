import { httpResponse } from "@/presentation/contracts/http"

export const ok = (body: any): httpResponse => {
  return {
    statusCode:200,
    body
  }
}

export const create = (body: any): httpResponse => {
  return {
    statusCode:201,
    body
  }
}

export const badRequest = (body: any): httpResponse => {
  return {
    statusCode:400,
    body
  }
}

export const serverError = (): httpResponse => {
  return {
    statusCode:500,
    body: 'internal server error'
  }
}
