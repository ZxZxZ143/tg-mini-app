import React, {FC} from 'react';
import {IconProps} from "@/assets/type";
import clsx from "clsx";

const Nav1Svg: FC<IconProps> = ({className}) => {
    return (
        <svg className={clsx(className)} width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 5.5C18.4706 5.5 22.5 8.85786 22.5 13C22.5 15.0586 21.5047 16.9235 19.8933 18.2787C19.6517 18.4819 19.5 18.7762 19.5 19.0919V21.5H17.5L16.7062 20.3674C16.583 20.1916 16.3616 20.1153 16.1537 20.1687C14.4248 20.6132 12.5752 20.6132 10.8463 20.1687C10.6384 20.1153 10.417 20.1916 10.2938 20.3674L9.5 21.5H7.5V19.1154C7.5 18.7866 7.33835 18.4788 7.06764 18.2922C5.99285 17.5511 2.5 16.1014 2.5 14.5582V13C2.5 12.4083 2.94771 11.9286 3.5 11.9286C4.10665 11.9286 4.60188 11.6929 4.80205 11.0661C5.82552 7.86121 9.33187 5.5 13.5 5.5Z" stroke="" strokeWidth="1.5" strokeLinejoin="round"/>
            <path d="M15 8.5C14.368 8.17502 13.6963 8 13 8C12.3037 8 11.632 8.17502 11 8.5" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M7.99976 11.5H8.00874" stroke="" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M21.5 9C22 8.5 22.5 7.56296 22.5 6.33053C22.5 4.76727 21.1569 3.5 19.5 3.5C19.1494 3.5 18.8128 3.55676 18.5 3.66106" stroke="" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
    );
};

export default Nav1Svg;
