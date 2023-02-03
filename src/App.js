import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes/Routes";
import "./App.css";
function App() {
  return (
    <div className="main-bg">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
