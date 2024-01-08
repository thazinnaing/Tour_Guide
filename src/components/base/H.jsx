import { cn } from "../../utils";

export const H1 = ({ children, className, ...rest }) => {
  return <h1 className={cn("text-7xl leading-tight font-bold", className)} {...rest}>{children}</h1>;
};

export const H2 = ({ children, className, ...rest }) => {
  return <h2 className={cn('text-2xl md:text-3xl font-semibold', className)} {...rest}>{children}</h2>;
};

export const H3 = ({ children, className, ...rest }) => {
  return <h3 className={cn('font-semibold text-md', className)}  {...rest}>{children}</h3>;
};
