'use client'

import NavItem from "@/components/TransferInfo/NavItem";
import {ListItemConfig, NavItemConfig} from "@/components/TransferInfo/config";
import {useState} from "react";
import ListItem from "@/components/TransferInfo/ListItem";

const TransferInfo = () => {
    const [active, setActive] = useState<number>(0);

    const setActiveHandler = (active: number) => {
        setActive(active);
    }

    return (
        <div>
            <div className="w-full flex gap-2 overflow-y-scroll scroll-smooth mt-5 scrollbar-hidden">
                {
                    NavItemConfig.map((item) => (
                        <NavItem key={item.id} isActive={active === item.id} onClick={() => setActiveHandler(item.id)}>
                            {item.name}
                        </NavItem>
                    ))
                }
            </div>
            <div className="flex flex-col gap-3 mt-2.5">
                {
                    ListItemConfig.map((item) => (
                        <ListItem
                            key={item.id}
                            imgPath={item.imgPath}
                            name={item.name}
                            description={item.description}
                            number={item.id}
                            className={item.className}
                        />
                    ))
                }
            </div>
        </div>
    );
};

export default TransferInfo;
