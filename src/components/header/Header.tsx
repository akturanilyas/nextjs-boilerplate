'use client';

import React from 'react';
import { Menubar } from 'primereact/menubar';
import { Avatar } from 'primereact/avatar';
import Image from 'next/image';
import BaseView from '@/components/base/view/BaseView';

export default function Header() {
  const start = <Image alt='logo' src='/vercel.svg' height='40' width={40} className='mr-2'></Image>;
  const end = (
    <BaseView className='align-items-center flex gap-2'>
      <Avatar image='https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png' shape='circle' />
    </BaseView>
  );

  return (
    <BaseView className=''>
      <Menubar className={'rounded-none bg-grey-100'} start={start} end={end} />
    </BaseView>
  );
}
