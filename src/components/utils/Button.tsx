import { ReactNode } from 'react';

type ButtonProps = {
    className?: string,
    children: ReactNode,
    onClick?: any
};

export const Button = (props: ButtonProps) => (
    <button
        onClick={props.onClick}
        type="button"
        className={`focus:outline-none transition rounded-full py-4 text-xl shadow-md-dark-contrast font-sfpro ${props.className}`}
    >
        {props.children}
    </button>
);