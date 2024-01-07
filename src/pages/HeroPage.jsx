import { Filter } from '../components';
import { Div, Divider, H1, H3 } from '../components/base';
import { cn } from '../utils';

const HeroPage = () => {
  return (
    <Div className={cn('h-[70vh] flex gap-2')}>
      <Div className={cn('flex flex-col justify-around w-3/5 h-full')}>
        <Div>
          <H1>Explore </H1> <H1> Beautiful </H1> <H1> World! </H1>
        </Div>
        <Div className={cn('flex justify-between shadow-custom rounded-md overflow-hidden')}>
          <Filter type="Located in" data="bangladesh" />
          <Div className={cn('py-4')}>
            <Divider />
          </Div>
          <Filter type="Date" data="Wed_7 Nov" />
          <Div className={cn('py-4')}>
            <Divider />
          </Div>
          <Filter type="Price Range" data="$400-$700" />
          <Div className={cn('bg-primary h-full text-white flex items-center justify-center w-1/4 ')}><H3>Search</H3></Div>
        </Div>
      </Div>
      <Div className={cn(" h-full w-2/5 bg-[length:w-full h-full] bg-no-repeat bg-[url('https://img.freepik.com/premium-psd/couple-getting-ready-travel-with-luggage-passports_23-2150095736.jpg?size=626&ext=jpg&ga=GA1.2.1633012741.1684645608&semt=ais')]")}>

      </Div>
    </Div>
  )
}

export default HeroPage;