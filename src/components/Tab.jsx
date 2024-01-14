import { useCallback } from "react";
import { Div, Divider, P } from "./base";
import { cn } from "../utils";

const Tab = ({ data, onClick, isActive, isNavActive, ...rest }) => {
  
  const onClickX = useCallback(() => {
    onClick(data);
  }, [data, onClick]);

  if (!data) {
    return;
  }

  return (
    <Div className={cn('flex flex-col items-center')} onClick={onClickX} {...rest}>
      <P
        className={cn(
          "cursor-pointer mb-1 hover:text-secondary text-xs 2xs:text-sm xs:text-base xs:font-semibold",
          typeof data.id === "string" && "text-secondary hover:text-orange-300 active:text-orange-500",
          isNavActive && 'text-secondary'
        )}
      >
        {data.title}
      </P>
      { isActive && <Divider horizontal className={cn('bg-secondary dark:bg-secondary opacity-70 ')} />}
    </Div>
  );
};

export default Tab;
