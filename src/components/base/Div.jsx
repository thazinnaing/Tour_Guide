import { cn } from "../../utils";

export const Div = ({ children, className, ...rest }) => {
  return <div className={cn('bg-white text-black dark:bg-black dark:text-white',className)} {...rest}>{children}</div>;
};