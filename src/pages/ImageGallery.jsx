import { Div, P, H2, H3 } from "../components/base"
import { cn } from "../utils"

const ImageGallery = () => {
  return (
    <Div className={cn('flex flex-col gap-5')}>
      <Div className={cn('flex justify-between')}>
        <Div className={cn('flex items-end gap-3')}>
          <H2>Our Gallery</H2>
          <P className={cn('')}>-Share Your Happy Momment</P>
        </Div>
        <Div>
          <H3 className={cn('text-secondary')}>View all</H3>
        </Div>
      </Div>
      <Div className={cn('flex gap-5')}>
        <Div className={('flex flex-col w-1/3 gap-5')}>
          <img className={cn('h-52 rounded-md')} src="https://images.unsplash.com/photo-1521171338749-b3a9f9ad7f34?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHRyYXZlbGxlcnxlbnwwfHwwfHx8MA%3D%3D" />
          <img className={cn('h-96 rounded-md')} src="https://images.unsplash.com/photo-1647891940243-77a6483a152e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxzZWFyY2h8OHx8bW91bnRhaW58ZW58MHx8MHx8fDA%3D" />
        </Div>
        <Div className={('flex flex-col w-1/3 gap-5')}>
          <img className={cn('h-96 rounded-md')} src="https://images.unsplash.com/photo-1575677155692-309d1398fd85?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRyYXZlbGxlcnxlbnwwfHwwfHx8MA%3D%3D" />
          <img className={cn('h-52 rounded-md')} src="https://plus.unsplash.com/premium_photo-1681122535458-324b598d365e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dHJhdmVsbGVyfGVufDB8fDB8fHww" />
        </Div>
        <Div className={('flex flex-col w-1/3 gap-5')}>
          <img className={cn('h-52 rounded-md')} src="https://images.unsplash.com/photo-1642928614293-ba6ff94b4a75?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dHJhdmVsbGluZyUyMGF0JTIwaWNlYmVyZ3N8ZW58MHx8MHx8fDA%3D" />
          <img className={cn('h-96 rounded-md')} src="https://images.unsplash.com/photo-1430462708036-7ef5363d56d8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHRyYXZlbGxpbmclMjBiZWFjaHxlbnwwfHwwfHx8MA%3D%3D" />
        </Div>
      </Div>
    </Div>
    
  )
}

export default ImageGallery
