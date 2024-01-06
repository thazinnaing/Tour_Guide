import { cn } from "../../utils";

export const H1 = ({ children, className, ...rest }) => {
  return <h1 className={cn("text-7xl leading-tight font-bold", className)} {...rest}>{children}</h1>;
};

export const H2 = ({ children, ...rest }) => {
  return <h2 {...rest}>{children}</h2>;
};

export const H3 = ({ children, ...rest }) => {
  return <h3  {...rest}>{children}</h3>;
};
