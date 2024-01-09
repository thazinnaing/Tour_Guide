import { useCallback } from "react";
import { Div, Divider, H3 } from "./base";
import { cn } from "../utils";

const Tab = ({ data, onClick, filterID, ...rest }) => {
  const onClickX = useCallback(() => {
    onClick(data.id);
  }, [data, onClick]);

  if (!data) {
    return;
  }

  return (
    <Div className={cn('flex items-center')} onClick={onClickX} {...rest}>
      <H3
        className={cn(
          "cursor-pointer mb-1 hover:text-secondary",
          typeof data.id === "string" && "text-secondary"
        )}
      >
        {data.title}
      </H3>
      {filterID === data.id && <Div> <Divider horizontal={true} className={cn('bg-secondary opacity-70 ')} /></Div>}
    </Div>
  );
};

export default Tab;
