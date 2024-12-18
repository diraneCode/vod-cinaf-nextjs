import CardAccount from '@/app/components/account/CardAccount'
import CardID from '@/app/components/account/CardID'
import CardInfo from '@/app/components/account/CardInfo'
import CardRenew from '@/app/components/account/CardRenew'
import CardSubscribe from '@/app/components/account/CardSubscribe'
import Sidebar from '@/app/components/account/Sidebar'
import Footer from '@/app/components/Footer'
import Navbar from '@/app/components/navbar'

export default function page() {
  return (
    <div className='w-full px-3 py-2 text-white flex flex-col space-y-20 relative'>
            <Sidebar />
        {/* <div className='w-10/12 flex self-center'> */}
            <div className='w-3/5 h-fit overflow-y-auto flex flex-col space-y-5 self-end'>
                <div className='self-center size-20 rounded-full bg-[#26A69A] flex items-center justify-center'>
                    <span className='text-3xl text-black font-bold'>ID</span>
                </div>
                <CardID />
                <CardSubscribe />
                <CardInfo />
                <CardAccount />
                <CardRenew />
                <button type='button' className='w-2/6 bg-[#18181C] p-3 rounded self-center text-xs'>
                    Support
                </button>
            </div>
        {/* </div> */}
        <Footer />
    </div>
  )
}