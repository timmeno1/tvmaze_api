import { MediaDetailPage } from "../components/MediaDetailPage";
import { Home } from "../features/Content/Home/Home";
import { Movies } from "../features/Content/Movies/Movies";
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
    path: "/shows/:id",
    element: <MediaDetailPage />,
  },
  {
    path: "/movies",
    element: <Movies />,
  },
  {
    path: "/movies/:id",
    element: <MediaDetailPage />,
  },
  {
    path: "/people",
    element: <People />,
  },
  {
    path: "/person/:id",
    element: <MediaDetailPage />,
  },
];
