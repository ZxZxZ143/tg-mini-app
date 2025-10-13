'use client'

import Button from "@/components/shared/Button";
import {useUser} from "@/context/UserContext";

const UserInfo = () => {
    const {user} = useUser()

    return (
        <div className="w-full mt-5">
          <p className="leading-6 text-t-description">
              {
                  user?.description
              }
          </p>
            <Button className="mt-2.5 w-full" variant="secondary">Read More</Button>
        </div>
    );
};

export default UserInfo;
