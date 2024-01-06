import { Div, H3, P } from "../components/base";
import { cn } from "../utils";
import { MapPin,  Phone, Mail, Facebook, Twitter, Instagram, Linkedin, PlaneTakeoff } from "lucide-react";
import { FooterContact, FooterQLinks } from "../components";

const links1 = ["Home", "Category", "Blog","About us"];
const links2 = ["FAQs", "Privacy", "Term & Conditions", "Support"];
const contactData = [
  {icon: MapPin, data: "342 Blone Street, Wisconsing United Staids"},
  {icon: Phone, data: "2145-5467-5378"},
  {icon: Mail, data: "tour@agency.com"}
]

const Footer = () => {
  
  return (
    <Div className={cn('flex justify-between gap-4')}>
      <Div className={cn('flex flex-col gap-3')}>
        <Div className={cn('flex gap-3')}>
          <PlaneTakeoff />
          <H3>Touro</H3>
        </Div>
        <P>Travel is fatal to prejudice,</P>
        <P>and narrow mindedness</P>
        <P>And many of people.</P>
        <Div className={cn('flex gap-4')}>
          <Facebook />
          <Twitter />
          <Instagram />
          <Linkedin />
        </Div>
      </Div>
      <Div className={cn('flex flex-col gap-3')}>
        <H3>Quick Link</H3>
        <FooterQLinks links={links1}/>
      </Div>
      <Div className={cn('flex flex-col gap-3')}>
        <H3>Quick Link</H3>
        <FooterQLinks links={links2}/>
      </Div>
      <Div className={cn('flex flex-col gap-3')}>
        <H3>Contact Us</H3>
        <FooterContact contacts={contactData}/>
      </Div>
    </Div>
  )
};

export default Footer;
