import {FC} from "react";
import clsx from "clsx";
import Image from "next/image";

interface ListProps {
    className?: string,
    imgPath: string,
    name: string,
    description: string,
    number: number,
}

const ListItem:FC<ListProps> = ({className, name, description, number, imgPath}) => {
    return (
        <div className={clsx("flex items-center justify-between p-3 border-1 border-border-list-item rounded-lg", className)}>
            <div className="flex items-center gap-3">
                <Image src="/images/userList.jpg" alt="user avatar" width={60} height={60} className="w-16 h-16 rounded-full"/>
                <div className="flex flex-col gap-1">
                    <p className="text-t-primary-list-item">
                        {
                            name
                        }
                    </p>
                    <p className="text-t-secondary-list-item">
                        {
                            description
                        }
                    </p>
                </div>
            </div>
            <p className="text-t-secondary-list-item">
                #{number}
            </p>
        </div>
    );
};

export default ListItem;
