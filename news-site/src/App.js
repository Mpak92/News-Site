import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from "./components/MainPage/MainPage";
import NewsPage from "./components/NewsPage/NewsPage";
import Header from './components/Header/Header';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
    children: [
      {
        path: "/",
        element: <MainPage />
      },
      {
        path: "/:newsId",
        element: <NewsPage />
      }
    ]
  }
  // {
  //   path: "/",
  //   element: <MainPage />
  // },
  // {
  //   path: "/:newsId",
  //   element: <NewsPage />
  // }
]);

function App() {
  return (<div>
    <RouterProvider router={router} />
  </div>);
}

export default App;
