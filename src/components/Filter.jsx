
import { ChevronDown } from 'lucide-react';
import { ICON_SIZE, cn } from '../utils';
import { Div, H3, P } from './base';
const Filter = ({type, data, className, ...rest}) => {
  return (
    <Div className={cn("p-4",className)} {...rest}>
      <P className='text-primary'>{type}</P>
      <Div className={cn('flex justify-between items-center gap-4')}>
        <H3>{data}</H3>
        <ChevronDown size={ICON_SIZE} className='text-primary' />
      </Div>
    </Div>
  )
}

export default Filter;