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
