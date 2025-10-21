'use client'

import Button from "@/components/shared/Button";
import {useUser} from "@/context/UserContext";
import {useEffect, useRef, useState} from "react";
import clsx from "clsx";

const UserInfo = () => {
    const textRef = useRef<HTMLParagraphElement>(null);
    const {user} = useUser()
    const [isExpanded, setExpanded] = useState(false)
    const [isTruncated, setIsTruncated] = useState(false)

    const toggleExpanded = () => {
        setExpanded(prevState => !prevState)
    }

    useEffect(() => {
        const el = textRef.current

        if (el) {
            setIsTruncated(el.scrollHeight > el.clientHeight)
        }
    }, [user])

    return (
        <div className="w-full mt-5">
            <p ref={textRef} className={clsx("leading-6 text-t-description", {'line-clamp-3': !isExpanded})}>
                {
                    user?.description
                }
            </p>
            {
                isTruncated && (
                    <Button className="mt-2.5 w-full" variant="secondary" onClick={toggleExpanded}>
                        {
                            isExpanded ? 'Read Less' : 'Read More'
                        }
                    </Button>
                )
            }
        </div>
    );
};

export default UserInfo;
