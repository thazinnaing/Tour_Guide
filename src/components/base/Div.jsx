import { cn } from "../../utils";

export const Div = ({ children, className, ...rest }) => {
  return <div className={cn('dark:bg-black dark:text-white ',className)} {...rest}>{children}</div>;
};