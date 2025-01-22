'use client';

import React, { useEffect } from 'react';

import BaseView from '@/components/base/view/BaseView';
import Compi from '@/components/icons/Compi';
import BaseText from '@/components/base/text/BaseText';
import { Logout } from '@/components/icons';
import { Button } from '@/components/base/button/Button';
import { useMain } from '@/hooks/useSlices';
import { useAppDispatch } from '@/hooks/useRedux';
import { setUser } from '@/states/slices/mainSlice';
import { useLogoutMutation } from '@/api/base/services/activity/authService';

export default function Header() {
  return (
    <BaseView className='flex-row bg-white p-5'>
      <Compi width={115} />
      <BaseView className={'flex-1 flex-row justify-end'}>
        <AuthSection />
      </BaseView>
    </BaseView>
  );
}

export const AuthSection = () => {
  const { user } = useMain();
  const [logout] = useLogoutMutation();

  const dispatch = useAppDispatch();

  if (!user || !user.first_name) {
    return null;
  }

  const onLogout = () => {
    logout();
  };

  return (
    <Button variant={'inline'} className={'flex-row items-center justify-end gap-2.5 p-0'} onClick={onLogout}>
      <BaseText text={`${user.first_name} ${user.last_name}`} className={'text-secondary'} />
      <Logout />
    </Button>
  );
};
