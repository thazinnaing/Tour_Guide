import ServiceLogo from "../components/ServiceLogo"
import { Div, H2, P } from "../components/base"
import { cn } from "../utils"
import { logoData } from "../components/Data"


const TourService = () => {  
  return (
    <Div className={cn('w-full grid grid-cols-1 sm:grid-cols-2 gap-10')}>
      <Div className={cn('w-[100%] h-72 sm:h-auto bg-gray-700')}>
          
      </Div>
      <Div className={cn('flex flex-col w-[100%] gap-4')}>
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
