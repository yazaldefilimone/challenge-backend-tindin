import dotenv from "dotenv"

dotenv.config()

export const env = {
  port: process.env.PORT || 3003,
  mongohost: process.env.MONGOHOST || 'localhost',
  mongoport: process.env.MONGOPORT || 57016,
}
