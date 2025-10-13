import React, {FC} from 'react';
import {IconProps} from "@/assets/type";
import clsx from "clsx";

const Nav4Svg: FC<IconProps> = ({className}) => {
    return (
        <svg className={clsx(className)} width="24" height="25" viewBox="0 0 24 25" fill="none"
             xmlns="http://www.w3.org/2000/svg">
            <path
                d="M12 8C12 9.933 10.433 11.5 8.5 11.5C6.567 11.5 5 9.933 5 8C5 6.067 6.567 4.5 8.5 4.5C10.433 4.5 12 6.067 12 8Z"
                stroke="white" strokeOpacity="0.5" strokeWidth="1.5"/>
            <path d="M13.5 11.5C15.433 11.5 17 9.933 17 8C17 6.067 15.433 4.5 13.5 4.5" stroke="white"
                  strokeOpacity="0.5" strokeWidth="1.5" strokeLinecap="round"/>
            <path
                d="M13.1429 20.5H3.85714C2.83147 20.5 2 19.7325 2 18.7857C2 16.4188 4.07868 14.5 6.64286 14.5H10.3571C11.4023 14.5 12.3669 14.8188 13.1429 15.3568"
                stroke="white" strokeOpacity="0.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M19 14.5V20.5M22 17.5H16" stroke="white" strokeOpacity="0.5" strokeWidth="1.5"
                  strokeLinecap="round"/>
        </svg>

    );
};

export default Nav4Svg;
