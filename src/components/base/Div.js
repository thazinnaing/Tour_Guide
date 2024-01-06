import { cn } from "../../utils";

export const Div = ({ children, className, ...rest }) => {
  return <div className={cn("p-4", className)} {...rest}>{children}</div>;
};

