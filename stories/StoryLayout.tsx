import React from "react";
import classNames from "classnames";
import "../src/styles/tailwind.css";
import "../src/styles/styles.css";

interface IStoryArgs {
    darkMode: boolean;
    className?: string;
    children?: React.ReactNode;
    noPadding?: boolean;
}

const StoryLayout = (args: IStoryArgs) => {
    return (
        <div className={classNames({ "dark bg-gray-900": args.darkMode }, "-m-4")}>
            <button className="btn-base btn-md btn-primary btn-primary-hover btn-primary-focus shadow-grayDark">Button CTA</button>
            <div className={classNames(args.className, { "p-4": !args.noPadding })}>
                {args.children}
            </div>
        </div>
    );
};

export default StoryLayout;