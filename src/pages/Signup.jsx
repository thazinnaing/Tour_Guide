import { Div, H2, Input } from "../components/base"
import { cn } from "../utils"

const Signup = () => {
  return (
    <Div className={cn('w-full flex flex-col gap-6 justify-center items-center')}>
      <H2>Sign up to our newsletter</H2>
      <Div className={cn('flex h-14 sm:h-16 w-full sm:w-2/3 rounded-md shadow-custom')}>
        <Div className={cn('flex w-5/6 justify-center items-center')}>
          <Input className={cn('w-full')} type="text" placeholder="Enter your email here" />
        </Div>
        <Div className={cn('bg-primary w-1/6 px-5 flex justify-center items-center text-white rounded-r-md')}>
          Submit
        </Div>
      </Div>
    </Div>
  )
}

export default Signup;
