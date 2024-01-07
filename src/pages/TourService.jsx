import { Globe, Hotel, Utensils, Wifi } from "lucide-react"
import ServiceLogo from "../components/ServiceLogo"
import {Div, H2, P} from "../components/base"
import { cn } from "../utils"

const logoData=[
  [
  {icon: Globe, title: "Flight"},
  {icon: Wifi, title: "Wifi"}
  ],
  [
  {icon: Hotel, title: "Hotel"},
  {icon: Utensils, title: "Food"}
  ]
]
const TourService = () => {
  return (
    <Div className={cn('flex gap-10')}>
      <Div className={cn('w-1/2 bg-gray-700')}>

      </Div>
      <Div className={cn('flex flex-col w-1/2 gap-4')}>
        <Div>
          <H2>Explore all corners of</H2>
          <H2>The world with us</H2>
        </Div>
        <Div>
          <P>Travel is fatal to prejudice, and narrow mindedness.</P>
          <P>And many of our people need it sorely on these accounts.</P>
          <P>And many of our people need sorely.</P>
        </Div>
        <Div className={cn('flex')}>
          <ServiceLogo logoData={logoData[0]}/>
          <ServiceLogo logoData={logoData[1]}/>
        </Div>
      </Div>
    </Div>
  )
}

export default TourService
