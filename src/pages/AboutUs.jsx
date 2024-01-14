import { Div, H1, Img } from "../components/base"
import { cn } from "../utils"

const AboutUs = () => {
  return (
    <Div className={cn('w-full h-full flex flex-col justify-center items-center mt-10 gap-8')}>
      <Div className={cn('w-full h-[40vh] sm:h-[50vh] md:h-[60vh] xl:h-[70vh]')}>
        <Img className={cn('w-full h-full object-fill rounded-lg')} alt="aboutus" src="https://plus.unsplash.com/premium_photo-1661328145556-61fa1df01cef?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Z3JvdXAlMjBwaG90b3xlbnwwfHwwfHx8MA%3D%3D" />
      </Div>
      <Div className={cn('w-full')}>
        <H1 className={cn('sm:text-3xl lg:text-4xl')}>About Our Team</H1>
      </Div>
    </Div>
  )
}

export default AboutUs
