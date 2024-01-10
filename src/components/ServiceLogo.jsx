import { cn } from "../utils"
import { Div } from "./base"

const ServiceLogo = ({logoData}) => {
  const content = logoData.map((data)=>{
    return(
      <Div key={data.id} className={cn('flex flex-col gap-2 md:gap-3 ')}>
        <Div className={cn('text-secondary dark:bg-white dark:text-black w-12 flex justify-center items-center rounded-md p-2 shadow-custom dark:shadow-custom')}>
          <data.icon className={cn('dark:text-secondary')}/>
        </Div>
        <Div className={cn('px-2')}>
          {data.title}
        </Div>
      </Div>
    )
  })

  return (
    <Div className={cn('flex w-1/2 lg:w-1/3 flex-col gap-4')}>
      {content}
    </Div>
  )
}

export default ServiceLogo
