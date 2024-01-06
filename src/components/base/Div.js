import { cn } from "../../utils";

const Div = ({ children, className, ...rest }) => {
  return <div className={cn("p-4", className)} {...rest}>{children}</div>;
};

export default Div;
