'use client';

import React from 'react';
import { PanelMenu } from 'primereact/panelmenu';
import { MenuItem } from 'primereact/menuitem';
import BaseView from '@/components/base/view/BaseView';

export default function SideMenu() {
  const items: MenuItem[] = [
    {
      label: 'Home',
      icon: 'pi pi-file',
    },
    {
      label: 'Components',
      icon: 'pi pi-cloud',
      items: [
        {
          label: 'Import',
          icon: 'pi pi-cloud-download',
          command(event) {
            console.log(event);
          },
        },
        {
          label: 'Export',
          icon: 'pi pi-cloud-upload',
          command(event) {
            console.log(event);
          },
        },
      ],
    },
    {
      label: 'Sign Out',
      icon: 'pi pi-sign-out',
      command(event) {
        console.log(event);
      },
    },
  ];

  return (
    <BaseView className='justify-content-center flex h-screen bg-white p-1'>
      <PanelMenu model={items} className='w-full md:w-72' />
    </BaseView>
  );
}
