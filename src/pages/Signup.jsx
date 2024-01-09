import { Div, H2, Input } from "../components/base"
import { cn } from "../utils"

const Signup = () => {
  return (
    <Div className={cn('w-full flex flex-col gap-6 justify-center items-center')}>
      <H2 className={cn('text-base xs:text-lg sm:text-xl md:text-2xl')}>Sign up to our newsletter</H2>
      <Div className={cn('dark:bg-white flex h-14 sm:h-16 w-full xs:w-2/3 rounded-md shadow-custom')}>
        <Div className={cn('dark:bg-white dark:text-black flex w-3/4 sm:w-5/6 justify-center items-center rounded-md')}>
          <Input className={cn('w-full')} type="text" placeholder="Enter your email here" />
        </Div>
        <Div className={cn('bg-primary dark:bg-primary w-1/4 sm::w-1/6 px-5 flex justify-center items-center text-white rounded-r-md cursor-pointer hover:bg-blue-300 active:bg-blue-500')}>
          Submit
        </Div>
      </Div>
    </Div>
  )
}

export default Signup;
