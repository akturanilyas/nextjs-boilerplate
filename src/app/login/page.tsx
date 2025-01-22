import BaseView from '@/components/base/view/BaseView';
import { LoginForm } from '@/components/forms/LoginForm';
import { Button } from '@/components/base/button/Button';
import BaseText from '@/components/base/text/BaseText';

export default function Login() {
  return (
    <BaseView className={'h-full items-center justify-center p-4'}>
      <BaseView className={'w-full sm:w-96 gap-6'}>
        <BaseText text={'Giriş yap'} className={'text-left text-4xl font-bold'} />

        <BaseView className={'justify-center gap-2'}>
          <LoginForm />
          <Button label={'Kayıt ol'} variant={'transparent'} />
        </BaseView>
      </BaseView>
    </BaseView>
  );
}
