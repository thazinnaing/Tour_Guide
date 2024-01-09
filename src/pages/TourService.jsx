import ServiceLogo from "../components/ServiceLogo"
import { Div, H2, Img, P } from "../components/base"
import { cn } from "../utils"
import { logoData } from "../components/Data"

const TourService = () => {  
  return (
    <Div className={cn('w-full sm:h-96 grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-0')}>
      <Div className={cn('')}>
        <Img className={cn('w-full h-72 xs:h-80 sm:h-96 sm:max-w-full')} 
          src="https://img.freepik.com/free-photo/tourist-with-thumb-up_1368-7035.jpg?size=626&ext=jpg&ga=GA1.2.1633012741.1684645608&semt=ais" 
          alt="" />
      </Div>
      <Div className={cn('flex flex-col gap-4')}>
        <Div>
          <H2 className={cn('text-lg xs:text-xl sm:text-2xl')}>Explore all corners of The world with us</H2>
        </Div>
        <Div>
          <P>Travel is fatal to prejudice, and narrow mindedness. <br/> And many of our people need it sorely on these accounts.<br/> And many of our people need sorely.</P>
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
