
import { useRoutes } from "react-router-dom";
import { routes } from "../app/routes";

export const Content = () => {
  
  let Routes = useRoutes(routes)

  return <div className="dark:bg-gray-500 ">{Routes}</div>;
};