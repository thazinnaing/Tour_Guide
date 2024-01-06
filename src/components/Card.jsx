import { cn } from "../utils";
import { Div, H3, P } from "./base";

const Card = () => {
  return (
    <Div className={cn('bg-white shadow-custom w-auto h-64 rounded-md overflow-hidden')}>
      <Div className={cn("bg-primary h-1/2 rounded-md")}>bg image</Div>
      <Div>
        <H3>Title</H3>
      </Div>
      <Div>
        <P>Some text</P>
      </Div>
    </Div>
  );
};

export default Card;
