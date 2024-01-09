import { cn } from "../utils"
import { Div } from "./base"

const ServiceLogo = ({logoData}) => {
  const content = logoData.map((data)=>{
    return(
      <Div key={data.id} className={cn('flex flex-col gap-2 md:gap-3')}>
        <Div className={cn('text-secondary w-12 flex justify-center items-center shadow-sm rounded-md p-2')}>
          <data.icon/>
        </Div>
        <Div>
          {data.title}
        </Div>
      </Div>
    )
  })

  return (
    <Div className={cn('flex w-1/2 flex-col gap-4')}>
      {content}
    </Div>
  )
}

export default ServiceLogo
