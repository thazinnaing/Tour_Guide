import { Filter } from '../components';
import { Div, H1, H3 } from '../components/base';
import { cn } from '../utils';

const HeroPage = () => {
  return (
    <Div className={cn('h-[70vh] flex gap-2')}>
      <Div className={cn('flex flex-col justify-around w-3/5 h-full')}>
        <Div>
          <H1>Explore </H1> <H1> Beautiful </H1> <H1> World! </H1>
        </Div>
        <Div className={cn('flex justify-between shadow-md rounded-md overflow-hidden')}>
          <Filter type="Country" data="bangladesh" />
          <Filter type="Date" data="Wed_7 Nov" />
          <Filter type="Price Range" data="$400-$700" />
          <Div className={cn('bg-primary h-full text-white flex items-center justify-center w-1/4')}><H3>Search</H3></Div>
        </Div>
      </Div>
      <Div className={cn("bg-primary h-full w-2/5")}>

      </Div>
    </Div>
  )
}

export default HeroPage;