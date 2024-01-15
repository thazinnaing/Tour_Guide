import { logoData } from "../components/Data"
import ServiceLogo from "../components/ServiceLogo"
import { Div, H1, H2, Img, P } from "../components/base"
import { cn } from "../utils"

const AboutUs = () => {
  return (
    <Div className={cn('w-full h-full flex flex-col justify-center items-center mt-10 gap-8 lg:gap-8')}>
      <Div className={cn('w-full h-[40vh] sm:h-[50vh] md:h-[60vh] xl:h-[70vh]')}>
        <Img className={cn('w-full h-full object-fill rounded-lg')} alt="aboutus" src="https://plus.unsplash.com/premium_photo-1661328145556-61fa1df01cef?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Z3JvdXAlMjBwaG90b3xlbnwwfHwwfHx8MA%3D%3D" />
      </Div>
      <Div className={cn('w-full')}>
        <H1 className={cn('sm:text-3xl lg:text-4xl')}>About Our Team</H1>
      </Div>
      <Div>
        <P>Tour guides familiarize people with the history, functions, and customs of a particular region or establishment. Though customers typically include foreigners on vacation, virtually any person can attend a tour.</P>
      </Div>
      <Div className={cn('flex flex-col sm:flex sm:flex-row gap-5')}>
        <Div className={cn('sm:w-1/2 h-64 sm:h-72 shadow-custom')}>
          <Img className={cn('w-full h-full rounded-lg')} src="https://images.unsplash.com/photo-1600714480856-dc99b28892eb?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dG91ciUyMGd1aWRlfGVufDB8fDB8fHww" alt="tour"/>
        </Div>
        <Div className={cn('flex flex-col sm:w-1/2 sm:h-72 gap-5 sm:justify-center')}>
          <H2 className={cn('text-xl md:2xl')}>Tour-Guide</H2>
          <P>We are searching for a vibrant tour guide to join our established company. The tour guides responsibilities include familiarizing customers with the locality by vehicle or foot, and ensuring that the group remains safe at all times. You should also stay up-to-date with new attractions that may be of interest to customers.</P>
        </Div>
      </Div>
      <Div className={cn('flex w-full rounded-lg shadow-sm border p-5')}>
          <ServiceLogo className={cn('flex w-1/2 justify-around')} logoData={logoData[0]}/>
          <ServiceLogo className={cn('flex w-1/2 justify-around')} logoData={logoData[1]}/>
      </Div>
      <Div className={cn('flex flex-col sm:flex sm:flex-row gap-5')}>
        <Div className={cn('flex flex-col sm:w-1/2 sm:h-72 gap-5 sm:justify-center')}>
          <H2 className={cn('text-xl md:2xl')}>Our Service</H2>
          <P>We are searching for a vibrant tour guide to join our established company. The tour guides responsibilities include familiarizing customers with the locality by vehicle or foot, and ensuring that the group remains safe at all times. You should also stay up-to-date with new attractions that may be of interest to customers.</P>
        </Div>
        <Div className={cn('sm:w-1/2 h-64 sm:h-72 shadow-custom')}>
          <Img className={cn('w-full h-full rounded-lg')} src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dHJhdmVsJTIwZ3JvdXB8ZW58MHx8MHx8fDA%3D" alt="tour"/>
        </Div>
      </Div>
      

    </Div>
  )
}

export default AboutUs
