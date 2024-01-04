import React from 'react';
import { 
    Wallet, 
    LayoutPanelLeft 
} from 'lucide-react';

export const Nav = [
{
    icon: <LayoutPanelLeft className="w-5 h-5" />,
    path: "/Dashboard",
    label: "Profile",
    },
  {
    icon: <Wallet className="w-5 h-5" />,
    path: '#',
    label: 'Wallet',
  },
];

export const marketNav = [
  {
    path: '/Market',
    label: 'Assets'
  },
  {
    path: '#',
    label: 'Burn Token',
  },
]

export const TransType = [
  {
    label: 'Limit'
  },
  {
    label: 'Market',
  },
]