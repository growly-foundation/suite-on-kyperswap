import { ChatWidget, SuiteProvider, darkTheme } from '@getgrowly/suite'
import '@getgrowly/suite/styles.css'

import { useAccount } from 'hooks/useAccount'

// Agent Id and Organization Id can be retrieved on `app.getsuite.io` (Agents > Integration Guide).
const AGENT_ID = import.meta.env.VITE_SUITE_AGENT_ID
const API_KEY = import.meta.env.VITE_SUITE_API_KEY

export const SuiteProviderWrapper = ({ children }: { children: React.ReactNode }) => {
  const account = useAccount()

  return (
    <SuiteProvider
      context={{
        agentId: AGENT_ID as string,
        organizationApiKey: API_KEY,
        config: {
          brandName: 'KyberSwap',
          display: 'fullView',
          theme: darkTheme,
        },
        session: {
          walletAddress: account.address,
        },
      }}
    >
      {children}
      <ChatWidget />
    </SuiteProvider>
  )
}
