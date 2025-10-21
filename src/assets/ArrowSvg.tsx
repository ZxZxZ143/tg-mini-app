import {FC} from 'react';
import {IconProps} from "@/assets/type";
import clsx from "clsx";

const ArrowSvg:FC<IconProps> = ({className}) => {
    return (
        <svg className={clsx(className)} width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.5 6.5L10.5 11.5L15.5 6.5L17.5 7.5L10.5 14.5L3.5 7.5L5.5 6.5Z" fill="#AAB8C2"/>
        </svg>
    );
};

export default ArrowSvg;
