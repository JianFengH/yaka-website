import Navbar from '@/components/Navbar'
import WalletTest from './WalletTest'

export default function Home() {
  return <>
    <Navbar current='WalletTest' />
    <main className='flex flex-col justify-center items-center pt-20'>
      <WalletTest />
    </main>
  </>
}