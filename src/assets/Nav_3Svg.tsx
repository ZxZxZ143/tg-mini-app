import React, {FC} from 'react';
import {IconProps} from "@/assets/type";
import clsx from "clsx";

const Nav3Svg: FC<IconProps> = ({className}) => {
    return (
        <svg className={clsx(className)} width="25" height="25" viewBox="0 0 25 25" fill="none"
             xmlns="http://www.w3.org/2000/svg">
            <path
                d="M14.5 18.5C18.9183 18.5 22.5 14.9183 22.5 10.5C22.5 6.08172 18.9183 2.5 14.5 2.5C10.0817 2.5 6.5 6.08172 6.5 10.5C6.5 14.9183 10.0817 18.5 14.5 18.5Z"
                stroke="white" strokeOpacity="0.5" strokeWidth="1.5" strokeLinecap="round"/>
            <path
                d="M13.6669 21.4689C12.563 22.1239 11.2742 22.5 9.8975 22.5C5.81197 22.5 2.5 19.188 2.5 15.1025C2.5 13.7258 2.87607 12.437 3.53107 11.3331"
                stroke="white" strokeOpacity="0.5" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>

    );
};

export default Nav3Svg;
