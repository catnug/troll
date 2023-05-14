import { join } from 'path'
import { clientOAuth1, clientBearer } from './twitterClient'

async function tweet() {
  try {
    const result = await clientOAuth1.v2.tweet({
      text: 'awesome 🚀👋',
      // reply: {
      //   in_reply_to_tweet_id: '1657230533741379586',
      // },
      // quote_tweet_id: '1657224052245688320',
    })
    console.log(result)
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.log(err.message)
    }
  }
}

// tweet()
