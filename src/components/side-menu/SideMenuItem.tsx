'use client';
import BaseView from '@/components/base/view/BaseView';
import { FC } from 'react';
import { MenuItem, MenuItemOptions } from 'primereact/menuitem';

export const SideMenuItem: FC<{ item: MenuItem; options: MenuItemOptions }> = (props) => {
  const { item, options } = props;

  return (
    <BaseView className={'bg-white p-4'}>
      <a className='align-items-center flex cursor-pointer px-3 py-2' onClick={options.onClick}>
        <span className={`${item.icon} text-primary`} />
        <span className={'mx-2 font-semibold'}>{item.label}</span>
      </a>
    </BaseView>
  );
};

export default SideMenuItem;
