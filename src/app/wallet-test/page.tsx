import Navbar from '@/components/navbar'
import WalletTest from './wallet-test'

export default function Home() {
  return <>
    <Navbar current='WalletTest' />
    <main className='flex flex-col justify-center items-center pt-20'>
      <WalletTest />
    </main>
  </>
}