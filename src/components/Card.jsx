import { cn } from "../utils";
import { Div, H3, Img, P } from "./base";
import { useNavigate } from "react-router-dom";

const Card = ({card}) => {
  const navigate = useNavigate()
  const onClickHandler=()=>{
    navigate(`/places/${card.id}`);
  }
  return (
    <Div className={cn('w-auto cursor-pointer shadow-sm rounded-md overflow-hidden flex flex-col transition duration-1 ease-in-out transform hover:-translate-y-1 md:hover:-translate-y-1.5 hover:shadow-custom')}>
      <Div className={cn('flex-1')}>
        <Img className={cn('h-64 w-full sm:w-max-full rounded-ss-md object-fill')} src={card.image} alt="" />
      </Div>
      <Div className={cn("px-2 py-4")}>
        <Div className={cn('flex flex-col gap-1')}>
          <H3 className={cn('text-sm xs:text-base')}>{card.title}</H3>
          <P className={cn('text-sm xs:text-base')}>{card.description}</P>
          <Div onClick = {onClickHandler}>
            <P className={cn('text-primary hover:text-secondary')}>Click for more details ...</P>
          </Div>
        </Div>
      </Div>
    </Div>
  );
};

export default Card;
