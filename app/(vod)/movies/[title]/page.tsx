import AvatarWrapper from '@/app/components/avatarWrapper'
import Episode from '@/app/components/details/Episode'
import Image from 'next/image'
import * as Icon from 'react-icons/bi'

type Props = {
  params: {
    title: string
  }
}

export default function page({ params }: Props) {
  return (
    <div className='w-screen h-screen text-white space-y-4'>
      <div className="w-full h-3/5 bg-[#262626]/40"></div>
      <div className='w-1/2 px-6'>
        <div>
          Minga, jeune orpheline vit chez sa marâtre Mami Kaba, une femme acariâtre qui n’hésite pas à lui mener la vie dure et la mettra hors de chez elle pour une cuillère...
        </div>
        <span>Casting</span>
        <AvatarWrapper />
      </div>
      <div className="bg-[#141414]">
        <div className="w-[97%] px-6">
          <div className="flex justify-between mb-8">
            <span>Episodes</span>
            <span>Samba le general</span>
          </div>
          <div className="space-y-2">
            <Episode />
            <Episode />
          </div>
          <div className="border border-[#414141] relative mt-1">
            <button type="button" className="size-8 rounded-full border border-[#BBBBBB]/60 absolute left-1/2 -top-4 z-10 bg-[#262626]">
              <Icon.BiChevronDown color="white" size={30} />
            </button>
          </div>
        </div>
        <div className="w-[97%] px-6">
          <span>Vous pouvez aimer</span>
          <div className="flex space-x-5">
            <div className="w-[261px] h-[357px] bg-[#1E1E1E] rounded-md overflow-hidden space-y-5">
              <div className="w-full h-2/5 bg-[#262626]">
                <Image src='/ressources/rem1.png' alt='rem' width={1000} height={100} />
              </div>
              <div className="flex justify-between px-4">
                <div className="w-fit py-1 px-5 bg-[#262626] rounded">
                  <Icon.BiMessage size={20} />
                </div>
                <div className="w-fit py-1 px-5 bg-[#262626] rounded">
                  <Icon.BiMessage size={20} />
                </div>
                <div className="w-fit py-1 px-5 bg-[#262626] rounded">
                  <Icon.BiMessage size={20} />
                </div>
              </div>
              <div className="px-4 text-xs text-[#F2F2F2]/80">
                Filomena décide de se rendre à Douala pour y créer son entreprise. Elle ne connaît personne d`autre que l`adresse de son amie, Rosa. Rosa est surprise par sa présence, mais elle n`a pas le choix, Filomena n`a pas d`autre endroit où aller. Filo discute avec le propriétaire et ils arrivent à un 
              </div>
            </div>
            <div className="w-[261px] h-[357px] bg-[#1E1E1E] rounded-md overflow-hidden space-y-5">
              <div className="w-full h-2/5 bg-[#262626]">
                <Image src='/ressources/rem1.png' alt='rem' width={1000} height={100} />
              </div>
              <div className="flex justify-between px-4">
                <div className="w-fit py-1 px-5 bg-[#262626] rounded">
                  <Icon.BiMessage size={20} />
                </div>
                <div className="w-fit py-1 px-5 bg-[#262626] rounded">
                  <Icon.BiMessage size={20} />
                </div>
                <div className="w-fit py-1 px-5 bg-[#262626] rounded">
                  <Icon.BiMessage size={20} />
                </div>
              </div>
              <div className="px-4 text-xs text-[#F2F2F2]/80">
                Filomena décide de se rendre à Douala pour y créer son entreprise. Elle ne connaît personne d`autre que l`adresse de son amie, Rosa. Rosa est surprise par sa présence, mais elle n`a pas le choix, Filomena n`a pas d`autre endroit où aller. Filo discute avec le propriétaire et ils arrivent à un 
              </div>
            </div>
            <div className="w-[261px] h-[357px] bg-[#1E1E1E] rounded-md overflow-hidden space-y-5">
              <div className="w-full h-2/5 bg-[#262626]">
                <Image src='/ressources/rem1.png' alt='rem' width={1000} height={100} />
              </div>
              <div className="flex justify-between px-4">
                <div className="w-fit py-1 px-5 bg-[#262626] rounded">
                  <Icon.BiMessage size={20} />
                </div>
                <div className="w-fit py-1 px-5 bg-[#262626] rounded">
                  <Icon.BiMessage size={20} />
                </div>
                <div className="w-fit py-1 px-5 bg-[#262626] rounded">
                  <Icon.BiMessage size={20} />
                </div>
              </div>
              <div className="px-4 text-xs text-[#F2F2F2]/80">
                Filomena décide de se rendre à Douala pour y créer son entreprise. Elle ne connaît personne d`autre que l`adresse de son amie, Rosa. Rosa est surprise par sa présence, mais elle n`a pas le choix, Filomena n`a pas d`autre endroit où aller. Filo discute avec le propriétaire et ils arrivent à un 
              </div>
            </div>
          </div>
        </div>
        <div className="w-[97%] px-6">
          <span>A propos de Samba</span>
        </div>
        <div className='bg-[#262626] h-64'>
        </div>
      </div>
    </div>
  )
}