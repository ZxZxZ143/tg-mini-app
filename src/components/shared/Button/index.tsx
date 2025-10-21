import {FC, PropsWithChildren} from "react";
import clsx from "clsx";

interface ButtonProps {
    type?: 'button' | 'submit' | 'reset';
    onClick?: () => void;
    className?: string;
    variant?: 'primary' | 'secondary';
}

const Button: FC<PropsWithChildren<ButtonProps>> = ({
                                                        variant = 'primary',
                                                        className,
                                                        onClick,
                                                        type = 'button',
                                                        children
                                                    }) => {
    const variants: Record<string, string> = {
        'primary': 'bg-b-primary hover:bg-b-primary/70 active:bg-b-primary/70 pt-[11px] py-[12px]',
        'secondary': 'bg-b-secondary hover:bg-b-secondary/70 active:bg-b-secondary/70 pt-2.5 pb-[11px]'
    }
    return (
        <button
            className={clsx('cursor-pointer transition outline-none leading-[120%] flex justify-center items-center font-bold text-s rounded-xl',
                className,
                variants[variant]
                )}
            type={type}
            onClick={onClick}
        >
            {
                children
            }
        </button>
    );
};

export default Button;
