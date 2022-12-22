import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from "./components/MainPage/MainPage";
import NewsPage from "./components/NewsPage/NewsPage";


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
  return (
    <RouterProvider router={router} />
  );
}

export default App;
