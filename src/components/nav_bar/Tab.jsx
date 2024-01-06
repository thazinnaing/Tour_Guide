import { Div, H3 } from "../base"

const Tab = ({title, ...rest}) => {
  return (
    <Div {...rest}>
      <H3>{title}</H3>
    </Div>
  )
}

export default Tab;