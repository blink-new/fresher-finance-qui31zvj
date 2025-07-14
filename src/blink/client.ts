import { createClient } from '@blinkdotnew/sdk'

export const blink = createClient({
  projectId: 'fresher-finance-qui31zvj',
  authRequired: true
})

export default blink