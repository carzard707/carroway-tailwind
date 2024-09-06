
import { Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import SideBar from "./SideBar";
import Header from "./Header";

const RootComponent = () => {
  return (
    <div className="flex flex-col w-screen h-screen">
      <Header />
      <div className="flex w-full">
        <SideBar />
        <Outlet />
      </div>
      <TanStackRouterDevtools />
    </div>
  );
};

export default RootComponent;
