import { cn } from "../../utils";

export const Div = ({ children, className, ...rest }) => {
  return <div className={cn(className)} {...rest}>{children}</div>;
};