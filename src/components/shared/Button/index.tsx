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
        'primary': 'bg-b-primary',
        'secondary': 'bg-b-secondary'
    }
    return (
        <button
            className={clsx('py-2.5 flex justify-center items-center font-bold text-s rounded-xl ',
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
