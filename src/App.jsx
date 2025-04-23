import { Toaster } from "sonner";
import Sidebar from "./components/Sidebar";
import Tasks from "./components/Tasks";



function App() {
  return (
    <div className="flex">
      <Toaster toastOptions={
        {
          style: {
            background: "#35383e",
            color: "#fff",
          },
        }
      }/>
     <Sidebar />
     <Tasks />
    </div>
  );
} 
export default App;