import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes/Routes";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <div className="main-bg">
      <RouterProvider router={router} />
      <ToastContainer />
    </div>
  );
}

export default App;
