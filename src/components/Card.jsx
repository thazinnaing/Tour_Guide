import { cn } from "../utils";
import { Div, H3, P } from "./base";

const Card = ({card}) => {
  return (
    <Div className={cn('bg-white shadow-custom w-auto h-64 rounded-md overflow-hidden flex flex-col')}>
      <Div className={cn("bg-primary flex-1  rounded-md")}/>
      <Div className={cn("p-2")}>
        <Div>
          <H3>{card.title}</H3>
        </Div>
        <Div>
          <P>{card.description}</P>
        </Div>
      </Div>
    </Div>
  );
};

export default Card;
