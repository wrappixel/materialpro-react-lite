import { RouterProvider } from "react-router";
import router from "./routes/Router"




const App = () => {


  return <div className="dark"><RouterProvider router={router} /></div>;
};

export default App;