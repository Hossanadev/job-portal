import { FC } from "react";
import { StatsCardProps } from "../../utilities/types";
export const StatsCard: FC<StatsCardProps> = (props) => {
  const { icon, title, value, color } = props;
  return (
    <div className="flex space-x-3 bg-white items-center shadow-sm px-3 rounded py-3">
      <div
        className={`p-1 rounded-full w-fit shadow shadow-green-700 bg-white`}
      >
        <div
          style={{ backgroundColor: color }}
          className={`text-white p-3 border border-white w-fit rounded-full text-xs`}
        >
          {icon}
        </div>
      </div>
      <div>
        <p className="text-sm">{title}</p>
        <p className="font-medium text-md">
          {new Intl.NumberFormat("en-US").format(Number(value))}
        </p>
      </div>
    </div>
  );
};
