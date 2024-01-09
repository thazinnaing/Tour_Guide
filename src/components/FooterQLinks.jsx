import { cn } from "../utils";
import { Div, P } from "./base";

const FooterQLinks = ({ links, className }) => {

  const content = links.map((link) => (<P key={link.id}>{link.title}</P>));

  return <Div className={cn("flex flex-col gap-2", className)}>{content}</Div>;
};

export default FooterQLinks;
