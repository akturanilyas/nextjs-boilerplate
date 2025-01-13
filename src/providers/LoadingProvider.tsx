'use client';
import BaseText from '@/components/base/text/BaseText';
import BaseView from '@/components/base/view/BaseView';
import { useLoadingState } from '@/states/loading';
import { useEffect, useState } from 'react';
import eventProvider from '@/providers/EventProvider';

const LoadingProvider = () => {
  const { data: loadingState, setData } = useLoadingState();

  useState();

  useEffect(() => {
    eventProvider.addListener({
      eventName: 'increaseLoading',
      callback() {
        setData((countState) => ({ count: (countState.count || 0) + 1 }));
      },
    });

    eventProvider.addListener({
      eventName: 'decreaseLoading',
      callback() {
        setData((countState) => ({ count: (countState.count || 0) - 1 }));
      },
    });

    return () => {
      eventProvider.removeAllListeners({
        eventName: 'increaseLoading',
      });

      eventProvider.removeAllListeners({
        eventName: 'decreaseLoading',
      });
    };
  }, []);

  return loadingState?.count ? (
    <BaseView
      className={`
      fixed
        left-0 top-0 
        z-50 h-[100vh] 
        w-full items-center 
        justify-center
        bg-black/20 bg-red-900 backdrop-blur dark:bg-white/20
      `}
    >
      <BaseView className={'animate-spin'}>
        <BaseText text={'loading'} />
      </BaseView>
    </BaseView>
  ) : null;
};

export default LoadingProvider;
