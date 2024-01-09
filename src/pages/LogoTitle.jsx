import {Div, P} from "../components/base"
import { cn } from "../utils"
import { logo } from "../components"

const LogoTitle = () => {
  const content = logo.map((logo)=>(
      <Div key={logo.id} className={cn('flex justify-center items-center gap-1')}>
        <logo.icon size={20}/>
        <P className={cn('text-sm sm:text-xl sm:font-semibold')}>{logo.title}</P>
      </Div>
    )
  )
  return (
    <Div className={cn('flex text-gray-400 justify-between')}>
      {content}
    </Div>
  )
}

export default LogoTitle
