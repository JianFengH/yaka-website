'use client'

import { NextUIProvider } from '@nextui-org/react'
import { SeiWalletProvider } from '@sei-js/react'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <SeiWalletProvider
        chainConfiguration={{
          chainId: 'atlantic-2',
          restUrl: 'https://rest.atlantic-2.seinetwork.io',
          rpcUrl: 'https://rpc.atlantic-2.seinetwork.io'
        }}
        wallets={['compass', 'fin', 'keplr']}>
        {children}
      </SeiWalletProvider>
    </NextUIProvider>
  )
}