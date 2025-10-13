import clsx from "clsx";
import {FC} from "react";

interface ProgressBarProps {
    progress: number;
    className?: string;
}

const ProgressBar: FC<ProgressBarProps> = ({progress, className}) => {

    return (
        <div
            className={clsx("w-full py-1 bg-bg-progress rounded-full overflow-hidden relative flex justify-center items-center", className)}>
            <div
                className="absolute left-0 top-0 h-full bg-bg-progress-fill"
                style={{width: `${Math.round(progress)}%`}}>
            </div>
            <p className="text-t-progress-bar text-xxs z-99">
                {`${Math.round(progress)}%`}
            </p>
        </div>
    );
};

export default ProgressBar;
