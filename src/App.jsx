import "./App.css";
import { Layout} from "./components";
import { AboutUs, Blog, Category, Home } from "./pages";
import ColorSchemeProvider from "./provider/ColorScheme";
import { BrowserRouter, Route ,Routes} from "react-router-dom";

function App() {
  return (
    <ColorSchemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>} >
            <Route index element={<Home/>}/>
            <Route path="/category" element={<Category/>} />
            <Route path="/blog" element={<Blog/>} />
            <Route path="/about_us" element={<AboutUs/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ColorSchemeProvider>
  );
}

export default App;
