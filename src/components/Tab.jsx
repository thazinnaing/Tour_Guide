import { useCallback } from "react";
import { Div, Divider, H3, P } from "./base";
import { cn } from "../utils";

const Tab = ({ data, className, onClick, filterID, ...rest }) => {
  const onClickX = useCallback(() => {
    onClick(data.id);
  }, [data, onClick]);

  if (!data) {
    return;
  }

  return (
    <Div className={cn('flex items-center')} onClick={onClickX} {...rest}>
      <P
        className={cn(
          "cursor-pointer mb-1 hover:text-secondary",
          className,
          typeof data.id === "string" && "text-secondary"
        )}
      >
        {data.title}
      </P>
      {filterID === data.id && <Div> <Divider horizontal={true} className={cn('bg-secondary opacity-70 ')} /></Div>}
    </Div>
  );
};

export default Tab;
