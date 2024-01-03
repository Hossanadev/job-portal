import {
  Briefcase,
  Calendar,
  Grid,
  Home,
  Settings,
  Users,
} from "react-feather";
import Link from "next/link";
import {useEffect, useState} from "react";

export const Sidebar = () => {
  const sidebarnav = [
    {
      name: "Dashboard",
      path: "/",
      sub_nav: [],
      icon: <Grid size={15} fill="white" color="green" />,
    },
    {
      name: "Jobs",
      path: "/jobs",
      sub_nav: [],
      icon: <Briefcase size={15} fill="white" color="green" />,
    },
    {
      name: "Users",
      path: "/users",
      sub_nav: [],
      icon: <Users size={15} fill="white" color="green" />,
    },
    {
      name: "Companies",
      path: "/companies",
      sub_nav: [],
      icon: <Home size={15} fill="white" color="green" />,
    },
    {
      name: "Events",
      path: "/events",
      sub_nav: [],
      icon: <Calendar size={15} fill="white" color="green" />,
    },
    {
      name: "Settings",
      path: "/settings",
      sub_nav: [],
      icon: <Settings size={15} fill="white" color="green" />,
    },
  ];
  const [navIndex, setNavIndex] = useState(0);
  useEffect(() => {
    const url = window.location.pathname;
    switch (true) {
      case url === "/":
        setNavIndex(0);
        break;
      case url.startsWith("/jobs"):
        setNavIndex(1);
        break;
      case url.startsWith("/users"):
        setNavIndex(2);
        break;
      case url.startsWith("/companies"):
        setNavIndex(3);
        break;
      case url.startsWith("/events"):
        setNavIndex(4);
        break;
      case url.startsWith("/settings"):
        setNavIndex(5);
        break;
      default:
    }
  }, [navIndex]);
  return (
    <ul className="text-md font-normal">
      {sidebarnav.map((nav, idx) => (
        <li className={`pb-8 w-fit`} key={nav.name}>
          <Link href={nav.path}>
            <span
              className={`${
                idx === navIndex
                  ? "bg-[#D7FCE7] text-green-700 px-5 py-1.5 rounded-r-full border-l-4 border-green-700"
                  : ""
              } flex items-center gap-2 text-[13px] hover:translate-x-5 text-green-700 transition-all duration-500`}
            >
              {nav.icon} {nav.name}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
};
