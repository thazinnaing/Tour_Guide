import { Fan } from "lucide-react"
import {Div, H2} from "../components/base"
import { cn } from "../utils"

const logoData = [
  {icon: Fan, title:"aven"},
  {icon: Fan, title: "HEXLAB"},
  {icon: Fan, title: "kanba"},
  {icon: Fan, title: "liva"},
  {icon: Fan, title: "amara"}
]

const LogoTitle = () => {
  const content = logoData.map((logo, index)=>{
    return(
      <Div key={index} className={cn('flex justify-center items-center gap-1')}>
        <logo.icon />
        <H2>{logo.title}</H2>
      </Div>
    )
  })
  return (
    <Div className={cn('flex text-gray-400 justify-between')}>
      {content}
    </Div>
  )
}

export default LogoTitle
