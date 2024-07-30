import * as Icon from 'react-icons/bi'

export default function CardSubscribe() {
  return (
    <section id='CardSubscribe' className='w-full flex rounded overflow-hidden'>
        <div className='w-1/3 bg-[#111114] p-5'>
            <div className='flex h-full flex-col justify-between'>
                <div className='space-y-4'>
                    <span>Details de l’abonnement</span>
                    <p className='text-xs text-gray-400'>
                        Accédez ici à toutes les informations concernant votre abonnement actuel.
                    </p>
                </div>
                <div className='flex items-center space-x-2'>
                    <div className="size-7 rounded-full border-2 border-[border: 4px solid #2C292A] flex items-center justify-center">
                        <div className="size-4 rounded-full bg-[#BE29CC]">
                            <Icon.BiCheck color='black' />
                        </div>
                    </div>
                    <span className="text-[0.5rem] text-[#F2F2F299]/60">RENOUVELLEMENT AUTO  ACTIF</span>
                </div>
            </div>
        </div>
        <div className='w-2/3 h-fit bg-[#18181C] p-5 flex flex-col gap-y-4 relative'>
            <div className='w-full h-2 bg-gradient-to-r from-[#D60D1F] to-[#3C3C94] absolute top-0 left-0'></div>
            <div className='w-full h-fit bg-[#1D1D21] flex items-center justify-between'>
                <div className='w-20 h-14 bg-gradient-to-r from-[#D60D1F] to-[#3C3C94]'></div>
                <span>Pack Bronze</span>
                <div className="size-5 rounded-full bg-white flex items-center justify-between">
                    <Icon.BiInfoCircle color='black' />
                </div>
            </div>
            <div className='bg-[#1D1D21] px-5 py-5'>
                <span className='text-xs text-gray-400'>DATE DE DEBUT DE L’ABONNEMENT</span><br />
                <span>30 Octobre 2023</span>
            </div>
            <div className='bg-[#1D1D21] px-5 py-5'>
                <span className='text-xs text-gray-400'>PROCHAIN PAIEMENT</span><br />
                <span>30 Octobre 2023</span>
            </div>
            <button type='button' className='w-full p-3 bg-[#F57F17] rounded-xl text-black font-bold'>
                Prolonger mon abonnement
            </button>
        </div>
    </section>
  )
}