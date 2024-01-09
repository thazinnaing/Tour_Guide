import {Div, H3} from "../components/base"
import { cn } from "../utils"
import { logo } from "../components"

const LogoTitle = () => {
  const content = logo.map((logo)=>(
      <Div key={logo.id} className={cn('flex items-center gap-1 md:gap-2')}>
        <logo.icon size={22} />
        <H3 className={cn('text-l sm:text-xl md:text-2xl sm:font-semibold')}>{logo.title}</H3>
      </Div>
    )
  )
  return (
    <Div className={cn('grid grid-cols-2 sm:grid-cols-5 text-gray-400 gap-2 sm:gap-4')}>
      {content}
    </Div>
  )
}

export default LogoTitle
