import { cn } from "../utils"
import { Div, P } from "./base"

const FooterContact = ({contacts}) => {

    const content = contacts.map((contact)=>(
        <Div key={contact.id} className={cn('flex gap-2 sm:gap-3 ')}>
          <Div className={cn('flex justify-center ')}>
            <contact.icon className={cn('w-5 h-5 sm:w-6 sm:h-6 text-secondary')}/>
          </Div>
          <P className={cn('text-xs sm:text-base')}>{contact.data}</P>
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
