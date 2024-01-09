import { cn } from "../utils"
import { Div, P } from "./base"

const FooterContact = ({contacts}) => {

    const content = contacts.map((contact)=>(
        <Div key={contact.id} className={cn('flex gap-3 ')}>
          <Div className={cn('flex py-1 justify-center ')}>
            <contact.icon size={17} className={cn('text-secondary')}/>
          </Div>
          <P>{contact.data}</P>
        </Div>
      )
    )

  return (
    <Div className={cn('flex flex-col gap-2')}>
      {content}
    </Div>
  )
}

export default FooterContact
