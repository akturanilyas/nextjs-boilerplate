import { HTMLAttributes, PropsWithChildren } from 'react';

export type FormProps = PropsWithChildren & HTMLAttributes<HTMLFormElement>;

const Form = ({ children, ...rest }: FormProps) => <form {...rest}>{children}</form>;

export default Form;
