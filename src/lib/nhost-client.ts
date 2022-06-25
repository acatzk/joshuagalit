import { NhostClient } from '@nhost/nextjs'

export const nhost = new NhostClient({
  backendUrl: `${process.env.NEXT_PUBLIC_NHOST_BACKEND}`
})
