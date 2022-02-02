import { Home } from '../features/Content/Home/Home'
import { Moveis } from '../features/Content/Movies/Movies'
import { People } from '../features/Content/People/People'
import { Shows } from '../features/Content/Shows/Shows'
import { Trending } from '../features/Content/Trending/Trending'

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
      path: "/trending",
    element: <Trending />,
  },
  {
      path: "/people",
    element: <People />,
  },
    
]