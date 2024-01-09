import { cn } from "../../utils";

export const Div = ({ children, className, ...rest }) => {
  return <div className={cn('dark:bg-red-300 ',className)} {...rest}>{children}</div>;
};