import { useParams } from "react-router-dom"
import { Div, H1, Img, P } from "../components/base";
import { cn } from "../utils";
import { places } from "../api";

const Detail = () => {

  const {id} = useParams('id');
  const detail = places.find(p => id === p.id.toString())

  return (
    <Div className={cn('w-full flex flex-col gap-6 mt-12')}>
      <Div className={cn('w-full h-72 xs:h-80 lg:h-96 xl:h-[60vh]')}>
        <Img className={cn('w-full h-full object-fill rounded-lg shadow-custom')} alt="" src={detail.image} />
      </Div>
      <Div id="scroll" className={cn('flex flex-col gap-4')}>
        <H1 className={cn('text-2xl xs:text-3xl md:text-4xl')}>{detail.title}</H1>
        <P className={cn('font-semibold text-base 2xs:text-lg')}>{detail.description}</P>
        <P>{detail.title} takes its name from the iconic shape of the rocks overlooking the small bay. It is the best beach in a small island chain of perfect beaches  the Similans. Part of a national park, the breathtaking natural beauty of this spot is well protected and preserved. There is quite a lot of coral growing close to the shore so wading out can be a slow experience, but the snorkelling is fantastic.</P>
      </Div>
    </Div>
  )
}

export default Detail
