import { Moon, Sun } from "lucide-react";
import { useColorScheme } from "../provider/ColorScheme";
import { Div } from "./base";

const Theme = ({...rest}) => {

  const { isDark, setTheme } = useColorScheme();

  const iconClickHandler = () => {
    setTheme(isDark ? 'light' : 'dark');
  };

  return (
    <Div
      onClick={iconClickHandler}
      {...rest}
      >
      {isDark ? <Moon size={30}/> : <Sun size={30}/>}
    </Div>
  );
};
export default Theme;