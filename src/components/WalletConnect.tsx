'use client'

import { Button, Snippet } from "@nextui-org/react";
import { useSelectWallet, useWallet } from "@sei-js/react";

export default function WalletConnect() {
  const { connectedWallet, accounts } = useWallet();
  const { openModal } = useSelectWallet();

  if (!connectedWallet) return <>
    <Button color="primary" onClick={openModal}>Connect</Button>
  </>

  return <>
    <Snippet symbol="" >
      <h2 className="max-w-[100px] truncate">{accounts[0].address}</h2>
    </Snippet>
  </>
}