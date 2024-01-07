import { Div, P, H2 } from "../components/base"
import { cn } from "../utils"

const ImageGallery = () => {
  return (
    <Div className={cn('flex justify-between')}>
      <Div className={cn('flex items-end gap-3')}>
        <H2>Our Gallery</H2>
        <P className={cn('')}>-Share Your Happy Momment</P>
      </Div>
      <Div>
        <P className={cn('text-secondary')}>View all</P>
      </Div>
    </Div>
  )
}

export default ImageGallery
