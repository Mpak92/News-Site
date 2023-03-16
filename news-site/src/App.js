import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from "./components/MainPage/MainPage";
import NewsPage from "./components/NewsPage/NewsPage";
import Header from './components/Header/Header';


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />
  },
  {
    path: "/:newsId",
    element: <NewsPage />
  }
]);

function App() {
  return (<div>
    <Header />
    <RouterProvider router={router} />
  </div>);
}

export default App;
