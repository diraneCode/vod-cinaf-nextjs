import IconSvg from '@/app/components/IconSvg'
import * as Icon from 'react-icons/bi'

export const NavLinks = [
    {
        id: 1,
        icon: <IconSvg name='lock' className='w-6' />,
        title: 'CLIENT ID',
        href: '/account#CLIENT ID'
    },
    {
        id: 2,
        // icon: <Icon.BiCard size={20} color='#F57F17' />,
        icon: <IconSvg name='credit-card' className='w-6' />,
        title: 'INFORMATION DE PAIEMENTS',
        href: '/account#'
    },
    {
        id: 3,
        icon: <IconSvg name='user' className='w-6' />,
        title: 'INFORMATIONS PERSONNELLES',
        href: '/account#CardInfo'
    },
    {
        id: 4,
        icon: <IconSvg name='login' className='w-6' />,
        title: 'COMPTE ASSOCIES',
        href: '/account#CardAccount'
    },
    {
        id: 5,
        icon: <IconSvg name='settings' className='w-6' />,
        title: 'PARAMETRES',
        href: '/account#CardRenew'
    },
] 