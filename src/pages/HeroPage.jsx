import { Filter } from '../components';
import { Div, Divider, H1, H3, Img } from '../components/base';
import { cn } from '../utils';

const HeroPage = () => {
  return (
    <Div className={cn('flex')}>
      <Div className={cn('h-72 xs:h-80 sm:h-96 md:h-120 w-full md:w-3/5 flex flex-col justify-around ')}>
        <Div className={cn('flex')}>
          <Div className={cn('w-1/2 md:w-full pt-8 xs:pt-10 sm:pt-12 md:pt-0')}>
            <H1 className={cn('xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl')}>Explore <br/> Beautiful <br/> World!</H1> 
          </Div>
          <Div className={cn('w-1/2 md:hidden')}>
            <Img className={cn('object-fill w-full h-52 xs:h-64 sm:h-80')} src="https://img.freepik.com/premium-photo/happy-family-warm-clothing-with-luggage-white-background-ready-winter-vacation_392895-57857.jpg?size=626&ext=jpg&ga=GA1.2.1633012741.1684645608&semt=ais" alt="" />
          </Div>
        </Div>
        <Div className={cn('w-full h-16 xs:h-20 grid grid-cols-4 rounded-lg shadow-custom')}>
          <Div className={cn('flex justify-between')}>
            <Filter type="Located in" data="bangladesh" />
            <Div className={cn('py-3 xs:py-5 sm:py-4')}>
              <Divider className={cn('bg-gray-300 ')}/>
            </Div>
          </Div>
          <Div className={cn('flex justify-between')}>
            <Filter type="Date" data="Wed_7 Nov" />
            <Div className={cn('py-3 xs:py-5 sm:py-4')}>
              <Divider className={cn('bg-slate-300')}/>
            </Div>
          </Div>
          <Filter type="Price Range" data="$400-$700" />
          <Div className={cn('h-16 xs:h-20 flex justify-center items-center bg-primary hover:bg-sky-400 active:bg-sky-500 text-white rounded-e-lg')}>
            <H3 className={cn('md:text-lg lg:text-xl')}>Search</H3>
          </Div>
        </Div>
      </Div>
      <Div className={cn('xs:w-2/5 hidden md:flex')}>
        <Img className={cn('object-fill w-full h-120')} src="https://img.freepik.com/premium-photo/happy-family-warm-clothing-with-luggage-white-background-ready-winter-vacation_392895-57857.jpg?size=626&ext=jpg&ga=GA1.2.1633012741.1684645608&semt=ais" alt="" />
      </Div>
    </Div>
  )
}

export default HeroPage;