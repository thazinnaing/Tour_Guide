import { cn } from "../../utils";

export const Div = ({ children, className, ...rest }) => {
  return <div className={cn("p-1", className)} {...rest}>{children}</div>;
};

