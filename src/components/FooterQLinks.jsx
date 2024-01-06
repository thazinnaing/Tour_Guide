import { cn } from "../utils";
import { Div, P } from "./base";

const FooterQLinks = ({ links, className }) => {

  const content = links.map((link, index) => {
    return <P key={index}>{link}</P>;
  });

  return <Div className={cn("", className)}>{content}</Div>;
};

export default FooterQLinks;
