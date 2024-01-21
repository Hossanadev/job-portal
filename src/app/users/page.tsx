import Authenticated from "@/Layout/Authenticated";
import {StatsCard} from "@/components/StatsCard";
import {Aperture, ArrowRight, BarChart, Briefcase, Filter, Home, PlusCircle} from "react-feather";
import {UsersData} from "../../../utilities/data";
import {status_checker} from "../../../utilities/helpers";
import Link from "next/link";

export default function Users() {
    return (
        <Authenticated>
            <>
                <p className="text-md font-normal text-sm w-fit text-green-700 hover:cursor-pointer">
                    Users
                </p>
                <div>
                    <div className="my-5 grid max-sm:grid-cols-1 grid-cols-2 lg:grid-cols-4 max-sm:gap-3 gap-5">
                        <StatsCard
                            icon={<Aperture size={20} color="green"/>}
                            color="#D7FCE7"
                            title="Total"
                            value="11056"
                        />
                        <StatsCard
                            icon={<Home size={20} color="green"/>}
                            color="#D7FCE7"
                            title="Employers"
                            value="3205"
                        />
                        <StatsCard
                            icon={<Briefcase size={20} color="green"/>}
                            title="Job seekers"
                            value="7859"
                            color="#D7FCE7"
                        />
                        <StatsCard
                            icon={<BarChart size={20} color="green"/>}
                            title="Online"
                            value="4405"
                            color="#D7FCE7"
                        />
                    </div>

                    {/* table */}
                    <div className="w-full bg-white rounded shadow-sm max-sm:my-10 my-8">
                        <div className="flex justify-between font-normal text-sm px-3 py-5">
                            <p className="text-sm">All Users</p>
                            <div className={"flex items-center gap-3"}>
                                <div className="button flex space-x-2 items-center">
                                    <Filter size={16}/>
                                    <p>Filter</p>
                                </div>
                                <div className="button flex space-x-2 items-center">
                                    <PlusCircle size={16}/>
                                    <p>Add</p>
                                </div>
                            </div>
                        </div>
                        <div className="overflow-x-scroll no-scrollbar text-sm">
                            <table className="w-full">
                                <thead className="bg-[#D7FCE7] text-green-700">
                                <tr>
                                    <th className="p-2 text-sm font-normal text-start">
                                        <input className="accent-green-700" type="checkbox"/>
                                    </th>
                                    <th className="p-2 text-sm font-normal text-start whitespace-nowrap">
                                        Name
                                    </th>
                                    <th className="p-2 text-sm font-normal text-start whitespace-nowrap">
                                        Position
                                    </th>
                                    <th className="p-2 text-sm font-normal text-start whitespace-nowrap">
                                        Email
                                    </th>
                                    <th className="p-2 text-sm font-normal text-start whitespace-nowrap">
                                        Type
                                    </th>
                                </tr>
                                </thead>
                                {UsersData.map((user, index) => (
                                    <tbody key={user.id}>
                                    <tr
                                        className={`${
                                            index % 2 !== 0 ? "bg-[#e5e5e5]/60" : "bg-white"
                                        }`}
                                    >
                                        <td className="p-2 text-sm font-normal">
                                            <input className="accent-green-700" type="checkbox"/>
                                        </td>
                                        <td className="p-2 text-[13px] font-normal whitespace-nowrap text-green-700">
                                            <span className="cursor-pointer w-fit">{user?.name}</span>
                                        </td>
                                        <td className="p-2 text-[13px] font-normal whitespace-nowrap">
                                            {user?.position}
                                        </td>
                                        <td className="p-2 text-[13px] font-normal whitespace-nowrap">
                                            {user?.email}
                                        </td>
                                        <td className="p-2 whitespace-nowrap capitalize text-[10px] font-medium">
                                            {status_checker(user?.type.toLocaleLowerCase())}
                                        </td>
                                    </tr>
                                    </tbody>
                                ))}
                            </table>
                        </div>
                        <div className="flex justify-end font-normal text-sm px-3 py-5">
                            <Link href="#">
                                <div className="button flex space-x-2 items-center">
                                    <ArrowRight size={16} className={"animate-none"}/>
                                    <p>Next</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </>
        </Authenticated>
    )
}