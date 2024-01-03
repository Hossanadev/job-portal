export interface GuestProps {
  setIsAuthenticated: (value: boolean) => void;
}

export interface ChildrenProps {
  children?: JSX.Element;
}

export type StatsCardProps = {
  icon: JSX.Element;
  title: string;
  value: number | string;
  color: string;
};

export type JobsCardProps = {
  title: string;
  company: string;
  location?: string;
  status?: string;
  date?: string;
  id?: number;
  href: string;
  image: string;
};
