import { Div, H3, P } from "../components/base";
import { cn } from "../utils";
import { Facebook, Twitter, Instagram, Linkedin, PlaneTakeoff } from "lucide-react";
import { navTabs, links, contactData, FooterContact, FooterQLinks } from "../components";

const Footer = () => {
  
  return (
    <Div className={cn('grid grid-cols-2 md:grid-cols-4 gap-6')}>
      <Div className={cn('flex flex-col gap-3')}>
        <Div className={cn('flex gap-3')}>
          <PlaneTakeoff className={cn('text-secondary')}/>
          <H3>Touro</H3>
        </Div>
        <Div className={cn('flex flex-col text-sm sm:text-l sm:gap-2')}>
          <P>Travel is fatal to prejudice,</P>
          <P>and narrow mindedness</P>
          <P>And many of people.</P>
        </Div>
        <Div className={cn('flex gap-3 sm:gap-4 text-gray-400')}>
          <Facebook className={cn('text-secondary')}/>
          <Twitter />
          <Instagram />
          <Linkedin />
        </Div>
      </Div>
      <Div className={cn('flex text-sm sm:text-l flex-col gap-3')}>
        <H3>Quick Link</H3>
        <FooterQLinks links={navTabs}/>
      </Div>
      <Div className={cn('flex flex-col text-sm sm:text-l gap-3')}>
        <H3>Quick Link</H3>
        <FooterQLinks links={links}/>
      </Div>
      <Div className={cn('flex flex-col text-sm sm:text-l gap-3')}>
        <H3>Contact Us</H3>
        <FooterContact contacts={contactData}/>
      </Div>
    </Div>
  )
};

export default Footer;
