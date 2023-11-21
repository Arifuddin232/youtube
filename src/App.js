import "./index.css";
import Head from "./components/Head";
import Page from "./components/Page";
import { Provider } from "react-redux";
import store from "./utils.js/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import Demo from "./components/Demo";

const appRouter=createBrowserRouter([{
  path:"/",
  element:<Page/>,
  children:[
  {
    path:"/",
    element:<MainContainer/>,
  },
  {
    path:"watch",
    element:<WatchPage/>
  },
  {
    path:"demo",
    element:<Demo/>
  }
  ]

}])
function App() {
  return (
  <div >
    <Provider store={store}>
   <Head/>
   <RouterProvider router={appRouter}/>
  <Page/>
  </Provider>
  
  </div>
  
  );
}
export default App;
