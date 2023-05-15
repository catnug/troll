import { join } from 'path'
import { CronJob } from 'cron'
import express from 'express'
import { clientOAuth1, clientBearer } from './twitterClient'

const app = express()

app.listen(3000, () => {
  console.log('listening on port 3000...')
})

async function tweet() {
  try {
    const result = await clientOAuth1.v2.tweet({ text: 'awesome 🚀👋' })
    console.log(result)
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.log(err.message)
    }
  }
}

new CronJob(
  '* 20 * * *',
  function () {
    tweet()
  },
  null,
  true,
  'Europe/Istanbul',
)
