import { cn } from "../utils";
import CardGrid from "./CardGrid";
import Tab from "./Tab";
import { Div, H2 } from "./base";

const PlaceContainer = ({ label, filterId, tabs, onFilterChange, places }) => {
  
  return (
    <Div className={cn("flex flex-col")}>
      <H2 className={cn("text-lg xs:text-xl sm:text-2xl md:text-3xl")}>
        {label}
      </H2>
      <Div className={cn("flex sm:justify-end")}>
        <Div
          className={cn(
            "flex justify-between text:sm mt-4 mb-5 sm:mt-2 sm:mb-8 md:mb-8 w-full sm:w-2/3 md:w-1/2"
          )}
        >
          {tabs.map((tab) => (
            <Tab
              data={tab}
              key={tab.id}
              isActive={filterId === tab.id}
              onClick={onFilterChange}
            />
          ))}
        </Div>
      </Div>
      <CardGrid cards={places || []} />
    </Div>
  );
};

export default PlaceContainer;
