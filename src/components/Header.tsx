"use client";
import React from "react";
import { X, AlignRight, User } from "react-feather";

export const Header: React.FC<{}> = () => {
  return (
    <div className="header flex justify-between items-center fixed w-full z-50">
      <div>
        <h1 className="font-semibold text-xl md:text-xl">Recruitment Portal</h1>
        <p className="text-xs">{`..."the ultimate tech recruitment platform".`}</p>
      </div>
      <div className="flex space-x-3 items-center">
        <div
          className={`p-1 rounded-full w-fit border-green-700 border bg-white cursor-pointer`}
        >
          <div
            className={`text-white p-2 border bg-green-500 border-green-700 w-fit rounded-full text-xs`}
          >
            <User size={20} />
          </div>
        </div>
        <div className="flex space-x-6 items-center lg:hidden">
          {true ? (
            <AlignRight
              size={28}
              className="hidden max-lg:block cursor-pointer"
            />
          ) : (
            <X size={28} className="hidden max-lg:block cursor-pointer" />
          )}
        </div>
      </div>
    </div>
  );
};
