import { Div, H2, Input } from "../components/base"
import { cn } from "../utils"

const Signup = () => {
  return (
    <Div className={cn('w-full flex flex-col gap-5 justify-center items-center')}>
      <H2>Sign up to our newsletter</H2>
      <Div className={cn('flex h-16 w-1/3 rounded-md shadow-custom')}>
        <Div className={cn('flex w-4/6 justify-center items-center')}>
        <Input className={cn('w-full')} placeholder="Enter your email here" />
        </Div>
        <Div className={cn('bg-primary w-2/6 px-5 flex justify-center items-center text-white rounded-r-md')}>
          Submit
        </Div>
      </Div>
    </Div>
  )
}

export default Signup;
