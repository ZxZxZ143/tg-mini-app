import {FC} from "react";
import {IconProps} from "@/assets/type";
import clsx from "clsx";

interface NavigationProps {
    Icon: FC<IconProps>,
    isActive: boolean,
    onClick: () => void,
}

const NavigationItem: FC<NavigationProps> = ({onClick, Icon, isActive}) => {
    const active = isActive ? '[&_*]:stroke-icon-active-navigation' : '[&_*]:stroke-icon-not-active-navigation'

    return (
        <button onClick={onClick} className="w-6 h-6">
            <Icon className={clsx("w-6 h-6", active)}/>
        </button>
    );
};

export default NavigationItem;
