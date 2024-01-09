import { useCallback } from "react";
import { Div, Divider, P } from "./base";
import { cn } from "../utils";

const Tab = ({ data, onClick, isActive, ...rest }) => {
  console.log("isactive", isActive)
  const onClickX = useCallback(() => {
    onClick(data.id);
  }, [data, onClick]);

  if (!data) {
    return;
  }

  return (
    <Div className={cn('flex flex-col items-center')} onClick={onClickX} {...rest}>
      <P
        className={cn(
          "cursor-pointer mb-1 hover:text-secondary text-sm xs:text-base xs:font-semibold",
          typeof data.id === "string" && "text-secondary"
        )}
      >
        {data.title}
      </P>
      { isActive && <Divider horizontal className={cn('bg-secondary opacity-70 ')} />}
    </Div>
  );
};

export default Tab;
