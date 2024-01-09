import { cn } from "../utils";
import { Div, H3, Img, P } from "./base";

const Card = ({card}) => {
  return (
    <Div className={cn('shadow-custom w-auto rounded-md overflow-hidden flex flex-col')}>
      <Div className={cn('flex-1')}>
        <Img className={cn('h-64 w-full sm:w-max-full object-fill')} src={card.image} alt="" />
      </Div>
      <Div className={cn("px-2 py-3")}>
        <Div className={cn('flex flex-col gap-1')}>
          <H3>{card.title}</H3>
          <P>{card.description}</P>
        </Div>
      </Div>
    </Div>
  );
};

export default Card;
