'use client';

import BaseText from '@/components/base/text/BaseText';
import BaseView from '@/components/base/view/BaseView';
import { useLoadingState } from '@/states/loading';
import useRunOnceInStrictMode from '@/hooks/useRunOnceInStrictMode';
import globalAxiosService from '@/services/AxiosService';

const LoadingProvider = () => {
  const { data: loadingState, setData } = useLoadingState();

  useRunOnceInStrictMode(() => {
    globalAxiosService.setBeforeRequestCallbacks({
      key: 'before-request',
      callback: () => setData((prev) => ({ ...prev, count: prev.count! + 1 })),
    });
    globalAxiosService.setAfterRequestCallbacks({
      key: 'after-request',
      callback: () => setData((prev) => ({ ...prev, count: prev.count! - 1 })),
    });
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
