import 'server-only'
import payload from 'payload'
import config from '@/payload.config'

let cachedPayload: typeof payload | null = null

export async function getPayload() {
  if (!cachedPayload) {
    await payload.init({
      config,
    })

    cachedPayload = payload
  }

  return cachedPayload
}