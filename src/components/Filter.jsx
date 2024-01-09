import { ChevronDown } from 'lucide-react';
import { cn } from '../utils';
import { Div, P } from './base';

const Filter = ({type, data, className, ...rest}) => {
  return (
    <Div className={cn('dark:bg-white dark:text-black flex px-1 xs:px-2 lg:px-4 items-center')}>
      <Div className={cn("dark:bg-white dark:text-black text-2xs xs:text-xs sm:lg:text-sm md:text-xs flex flex-col gap-2",className)} {...rest}>
        <P className='text-primary'>{type}</P>
        <Div className={cn('dark:bg-white dark:text-black flex items-center gap-1 xs:gap-3 md:gap-2 lg:gap-3')}>
          <P className={cn('xs:font-semibold')}>{data}</P>
          <ChevronDown className={cn('text-primary w-3 xs:h-3 sm:w-4 md:h-4 lg:w-6 lg:h-6')} />
        </Div>
      </Div>
    </Div>
    
  )
}

export default Filter;