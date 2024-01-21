import React from "react";
import {Grid, User} from "react-feather";
import Link from "next/link";

export const Header: React.FC<{ setShowMobileSidebar: React.Dispatch<React.SetStateAction<boolean>>, showMobileSidebar: boolean}> = ({setShowMobileSidebar, showMobileSidebar}) => {
  return (
    <div className="header flex justify-between items-center fixed w-full z-50">
        <Link href={"/"}><h1 className="font-semibold text-xl md:text-xl">Jobs Portal</h1></Link>
      <div className="flex space-x-3 items-center">
        <div
          className={`hidden lg:block rounded-full w-fit border-green-700 border bg-white/70 cursor-pointer`}
        >
          <div
            className={`hidden lg:block text-white lg:p-1.5 border lg:shadow shadow-black bg-green-500 border-green-700 w-fit rounded-full text-xs`}
          >
            <User size={20} />
          </div>
        </div>
        <div className="flex space-x-6 items-center lg:hidden">
          {(
              <Grid
                  size={28}
                  onClick={() => {setShowMobileSidebar(!showMobileSidebar)}}
                  className="hidden max-lg:block cursor-pointer text-white/90"
              />
          )}
        </div>
      </div>
    </div>
  );
};
