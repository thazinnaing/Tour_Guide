import { cn } from "../utils"
import { Div, P } from "./base"

const FooterContact = ({contacts}) => {

    const content = contacts.map((contact, index)=>{
      return(
        <Div key={index} className={cn('flex gap-3')}>
          <contact.icon className={cn('text-secondary')}/>
          <P>{contact.data}</P>
        </Div>
      )
    })

  return (
    <Div>
      {content}
    </Div>
  )
}

export default FooterContact
