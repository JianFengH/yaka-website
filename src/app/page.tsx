import Navbar from '@/components/navbar'

export default function Home() {
  return (
    <div className='absolute left-0 top-0 w-full h-full flex flex-col justify-center items-center'>
      <div className='mainTitle after:content-[attr(data-text)] sm:text-6xl sm:after:text-6xl' data-text='Launchpad+Ve(3,3)DEX'>Launchpad+Ve(3,3)DEX</div>
      <div className='text-center text-base mt-12 sm:text-2xl'>
        Liquidity and Focus Center on SEI:
        <br />The Engine for Rapid Growth of the SEI Ecosystem
      </div>
    </div>
  )
}