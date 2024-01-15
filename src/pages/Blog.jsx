import { Div, H1, H2, Img } from "../components/base"
import { cn } from "../utils"
import ExplorePlaces from "./ExplorePlaces"
import PopularPlaces from "./PopularPlaces"

const Blog = () => {
  return (
    <Div className={cn('w-full h-full flex flex-col mt-12 gap-8')}>
      <Div className={cn('w-full flex flex-col-reverse sm:flex sm:flex-row gap-5')}>
        <Div className={cn('w-full sm:w-1/2 h-80')}>
          <Img className={cn('w-full h-full object-fill rounded-lg shadow-custom')} alt="blog" src="https://images.unsplash.com/photo-1468421870903-4df1664ac249?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGJsb2clMjB0ZXh0JTIwaW1hZ2V8ZW58MHx8MHx8fDA%3D"/>
        </Div>
        <Div className={cn('w-full sm:w-1/2 sm:h-80 sm:pt-8 flex flex-col justify-center items-center gap-6')}>
          <H1 className={cn('text-center md:text-4xl lg:text-5xl')}><b>Our Blog !</b></H1>
          <H1 className={cn('text-center lg:text-4xl')}>Let&#39;s create <br/> a beautiful moment with &ldquo;Touro&rdquo;</H1>
        </Div>

      </Div>
      <PopularPlaces />
      <ExplorePlaces />
     
    </Div>
  )
}

export default Blog
