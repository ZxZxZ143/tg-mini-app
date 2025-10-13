import React, {FC} from 'react';
import {IconProps} from "@/assets/type";
import clsx from "clsx";

const Nav5Svg: FC<IconProps> = ({className}) => {
    return (
        <svg className={clsx(className)} width="25" height="25" viewBox="0 0 25 25" fill="none"
             xmlns="http://www.w3.org/2000/svg">
            <path d="M4.5 5.5H20.5" stroke="white" stroke-opacity="0.5" stroke-width="1.5" stroke-linecap="round"
                  stroke-linejoin="round"/>
            <path d="M4.5 12.5H20.5" stroke="white" stroke-opacity="0.5" stroke-width="1.5" stroke-linecap="round"
                  stroke-linejoin="round"/>
            <path d="M4.5 19.5H20.5" stroke="white" stroke-opacity="0.5" stroke-width="1.5" stroke-linecap="round"
                  stroke-linejoin="round"/>
        </svg>

    );
};

export default Nav5Svg;
