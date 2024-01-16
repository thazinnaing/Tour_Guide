import "./App.css";
import { Layout} from "./components";
import { AboutUs, Blog, Detail, Home } from "./pages";
import ColorSchemeProvider from "./provider/ColorScheme";
import { BrowserRouter, Route ,Routes} from "react-router-dom";

function App() {
  return (
    <ColorSchemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>} >
            <Route index element={<Home/>}/>
            <Route path="/blog" element={<Blog/>} />
            <Route path="/about_us" element={<AboutUs/>} />
            <Route path="/detail/:id" element={<Detail/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ColorSchemeProvider>
  );
}

export default App;
