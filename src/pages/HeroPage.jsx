import { Div, H1 } from '../components/base';
import { cn } from '../utils';

const HeroPage = () => {
  return (
    <Div className={cn('h-[70vh] flex')}>
      <Div className={cn('flex flex-col justify-around w-3/5 h-full')}>
        <Div>
          <H1>Explore </H1> <H1> Beautiful </H1> <H1> World! </H1>
        </Div>
        <Div>Search</Div>
      </Div>
      <Div className={cn("bg-primary h-full w-2/5")}>

      </Div>
    </Div>
  )
}

export default HeroPage;