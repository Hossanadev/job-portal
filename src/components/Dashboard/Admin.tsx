import {ArrowRight, Filter, Home, Send, ShoppingBag, Users} from "react-feather";
import { StatsCard } from "../StatsCard";
import { JobsData } from "../../../utilities/data";
import { status_checker } from "../../../utilities/helpers";
import Link from "next/link";

export const AdminDashboard = () => {
  return (
    <div>
      {/* breadcrumb */}
      <p className="text-md font-normal w-fit text-sm text-green-700 hover:cursor-pointer">
        Dashboard
      </p>

      {/* content */}
      <div className="my-5 grid max-sm:grid-cols-1 grid-cols-2 lg:grid-cols-4 max-sm:gap-3 gap-5">
        <StatsCard
          icon={<ShoppingBag size={20} color="green" />}
          color="#D7FCE7"
          title="Jobs"
          value="1105"
        />
        <StatsCard
          icon={<Send size={20} color="green" />}
          color="#D7FCE7"
          title="Applicants"
          value="8405"
        />
        <StatsCard
          icon={<Home size={20} color="green" />}
          title="Companies"
          value="359"
          color="#D7FCE7"
        />
        <StatsCard
          icon={<Users size={20} color="green" />}
          title="Users"
          value="9805"
          color="#D7FCE7"
        />
      </div>

      {/* table */}
      <div className="w-full bg-white rounded shadow-sm max-sm:my-10 my-8">
        <div className="flex justify-between font-normal text-sm px-3 py-5">
          <p className="text-sm">Recent Jobs</p>
          <div className="button flex space-x-2 items-center">
            <Filter size={16} />
            <p>Filter</p></div>
        </div>
        <div className="overflow-x-scroll no-scrollbar text-sm">
          <table className="w-full">
            <thead className="bg-[#D7FCE7] text-green-700">
              <tr>
                <th className="p-2 text-sm font-normal text-start">
                  <input className="accent-green-700" type="checkbox" />
                </th>
                <th className="p-2 text-sm font-normal text-start whitespace-nowrap">
                  Job Title
                </th>
                <th className="p-2 text-sm font-normal text-start whitespace-nowrap">
                  Company
                </th>
                <th className="p-2 text-sm font-normal text-start whitespace-nowrap">
                  Location
                </th>
                <th className="p-2 text-sm font-normal text-start whitespace-nowrap">
                  Status
                </th>
              </tr>
            </thead>
            {JobsData.map((job, index) => (
              <tbody key={job.id}>
                <tr
                  className={`${
                    index % 2 !== 0 ? "bg-[#e5e5e5]/60" : "bg-white"
                  }`}
                >
                  <td className="p-2 text-sm font-normal">
                    <input className="accent-green-700" type="checkbox" />
                  </td>
                  <td className="p-2 text-[13px] font-normal whitespace-nowrap text-green-700">
                    <span className="cursor-pointer w-fit">{job?.title}</span>
                  </td>
                  <td className="p-2 text-[13px] font-normal whitespace-nowrap">
                    {job?.company}
                  </td>
                  <td className="p-2 text-[13px] font-normal whitespace-nowrap">
                    {job?.location}
                  </td>
                  <td className="p-2 whitespace-nowrap capitalize text-[10px] font-medium">
                    {status_checker(job?.status.toLocaleLowerCase())}
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
        <div className="flex justify-end font-normal text-sm px-3 py-5">
          <Link href="/jobs">
            <div className="button flex space-x-2 items-center">
              <ArrowRight size={16} className={"animate-none"} />
              <p>View More</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
