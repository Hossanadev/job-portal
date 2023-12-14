import {
  Briefcase,
  Calendar,
  Grid,
  Home,
  Settings,
  Users,
} from "react-feather";

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
  return (
    <ul className="text-md font-normal">
      {sidebarnav.map((nav) => (
        <li className={`pb-8 w-fit`} key={nav.name}>
          <a href={nav.path}>
            <span
              className={`${
                nav.path === "/"
                  ? "bg-[#D7FCE7] text-green-700 px-5 py-1.5 rounded-r-full border-l-4 border-green-700"
                  : ""
              } flex items-center gap-2 text-[13px] hover:translate-x-5 text-green-700 transition-all duration-500`}
            >
              {nav.icon} {nav.name}
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
};
