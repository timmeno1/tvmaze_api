import { MovieTVDetailPage } from "../components/MovieTVDetailPage";
import { Home } from "../features/Content/Home/Home";
import { Moveis } from "../features/Content/Movies/Movies";
import { People } from "../features/Content/People/People";
import { Shows } from "../features/Content/Shows/Shows";

export const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/shows",
    element: <Shows />,
  },
  {
    path: "/movies",
    element: <Moveis />,
  },
  {
    path: "movies/detail",
    element: <MovieTVDetailPage />,
  },
  {
    path: "/people",
    element: <People />,
  },
];
