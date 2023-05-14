import 'dotenv/config'
import { TwitterApi } from 'twitter-api-v2'

const {
  API_KEY,
  API_KEY_SECRET,
  ACCESS_TOKEN,
  ACCESS_TOKEN_SECRET,
  BEARER_TOKEN,
} = process.env

const clientOAuth1Base = new TwitterApi({
  appKey: API_KEY,
  appSecret: API_KEY_SECRET,
  accessToken: ACCESS_TOKEN,
  accessSecret: ACCESS_TOKEN_SECRET,
})

const clientBearerBase = new TwitterApi(BEARER_TOKEN)

const clientOAuth1 = clientOAuth1Base.readWrite
const clientBearer = clientBearerBase.readOnly

export { clientOAuth1, clientBearer }
