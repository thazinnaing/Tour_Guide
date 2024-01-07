import { useCallback } from "react";
import { Div, H3 } from "./base";

const Tab = ({data, onClick, ...rest}) => {

  const onClickX = useCallback(() => {
    onClick(data.id)
  },[data, onClick])

  if (!data) {
    return
  }

  return (
    <Div onClick={onClickX} {...rest}>
      <H3>{data.title}</H3>  
    </Div>
  )
}

export default Tab;