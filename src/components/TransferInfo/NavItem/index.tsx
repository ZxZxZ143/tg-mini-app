import {FC, PropsWithChildren} from "react";
import clsx from "clsx";

interface NavItemProps {
    className?: string
    onClick?: () => void
    isActive?: boolean
}

const NavItem: FC<PropsWithChildren<NavItemProps>> = ({isActive, onClick, className, children}) => {
    const active = isActive ? (
        'bg-bg-active-nav-item text-t-active-nav-item'
    ) : (
        'bg-bg-not-active-nav-item text-t-not-active-nav-item'
    )

    return (
        <button className={clsx('transition py-2 px-3 rounded-md text-xs w-fit whitespace-nowrap', active, className)} onClick={onClick}>
            {children}
        </button>
    );
};

export default NavItem;
