import { Div, P, H2, H3, Img } from "../components/base"
import { cn } from "../utils"

const ImageGallery = () => {
  return (
    <Div className={cn('flex flex-col gap-5 sm:gap-6')}>
      <Div className={cn('flex justify-between items-center')}>
        <Div className={cn('flex flex-col sm:flex-row sm:items-end  gap-3')}>
          <H2 className={cn('text-lg xs:text-xl sm:text-2xl md:text-3xl')}>Our Gallery</H2>
          <P className={cn('text-xs 2xs:text-base')}>-Share Your Happy Momment</P>
        </Div>
        <Div>
          <H3 className={cn('text-secondary cursor-pointer text-sm 2xs:text-base')}>View all</H3>
        </Div>
      </Div>

      <Div className={cn('grid grid-cols-2 md:grid-cols-4 gap-5')}>
        <Div className={cn('grid gap-4')}>
          <Div>
            <Img className={cn('object-scale-down rounded-md sm:h-auto w-full sm:max-w-full')} src="https://images.unsplash.com/photo-1521171338749-b3a9f9ad7f34?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHRyYXZlbGxlcnxlbnwwfHwwfHx8MA%3D%3D" alt="" />
          </Div>
          <Div>
            <Img className={cn('object-scale-down rounded-md sm:h-auto w-full sm:max-w-full')} src="https://images.unsplash.com/photo-1647891940243-77a6483a152e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxzZWFyY2h8OHx8bW91bnRhaW58ZW58MHx8MHx8fDA%3D" alt="" /> 
          </Div>
        </Div>
        <Div className={cn('grid gap-4')}>
          <Div>
            <Img className={cn('object-scale-down rounded-md sm:h-auto w-full sm:max-w-full')} src="https://images.unsplash.com/photo-1598525317424-bc58218b48cb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dHJhdmVsbGVyJTIwd2F0ZXJmYWxsfGVufDB8fDB8fHww" alt="" /> 
          </Div>
          <Div>
            <Img className={cn('object-scale-down rounded-md sm:h-auto w-full sm:max-w-full')} src="https://plus.unsplash.com/premium_photo-1681122535458-324b598d365e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dHJhdmVsbGVyfGVufDB8fDB8fHww" alt="" />
          </Div>
        </Div>
        <Div className={cn('hidden sm:grid gap-4')}>
          <Div>
            <Img className={cn('h-auto max-w-full rounded-md')} src="https://images.unsplash.com/photo-1642928614293-ba6ff94b4a75?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dHJhdmVsbGluZyUyMGF0JTIwaWNlYmVyZ3N8ZW58MHx8MHx8fDA%3D" alt="" />
          </Div>
          <Div>
            <Img className={cn('h-auto max-w-full rounded-md object-scale-down')} src="https://images.unsplash.com/photo-1430462708036-7ef5363d56d8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHRyYXZlbGxpbmclMjBiZWFjaHxlbnwwfHwwfHx8MA%3D%3D" alt="" /> 
          </Div>
        </Div>
        <Div className={cn('hidden sm:grid gap-4')}>
            <Div>
              <Img className={cn('h-auto max-w-full rounded-md object-scale-down')} src="https://images.unsplash.com/photo-1682687982093-4773cb0dbc2e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8" alt="" /> 
            </Div>
            <Div>
              <Img className={cn('h-auto max-w-full rounded-md')} src="https://images.unsplash.com/photo-1543965860-023b5d3d78d6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dHJhdmVsbGVyJTIwaWNlYmVyZ3N8ZW58MHx8MHx8fDA%3D" alt="" />
            </Div>
          </Div>
        </Div>

    </Div>
    
  )
}

export default ImageGallery
