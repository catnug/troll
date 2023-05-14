declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: string
      API_KEY: string
      API_KEY_SECRET: string
      BEARER_TOKEN: string
      ACCESS_TOKEN: string
      ACCESS_TOKEN_SECRET: string
      CLIENT_ID: string
      CLIENT_SECRET: string
    }
  }
}

export {}
