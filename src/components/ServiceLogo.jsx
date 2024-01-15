import { cn } from "../utils"
import { Div } from "./base"

const ServiceLogo = ({logoData, className}) => {
  const content = logoData.map((data)=>{
    return(
      <Div key={data.id} className={cn('flex flex-col gap-2 md:gap-3 ')}>
        <Div className={cn('text-secondary dark:bg-white dark:text-black w-12 cursor-pointer flex justify-center items-center rounded-md p-2 shadow-custom dark:shadow-custom')}>
          <data.icon className={cn('dark:text-secondary')}/>
        </Div>
        <Div className={cn('px-2')}>
          {data.title}
        </Div>
      </Div>
    )
  })

  return (
    <Div className={cn('', className)}>
      {content}
    </Div>
  )
}

export default ServiceLogo
