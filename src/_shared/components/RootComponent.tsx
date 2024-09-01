import { Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

const RootComponent = () => {
  return (
    <div className="flex flex-col w-screen h-screen">
      <Outlet />
      <TanStackRouterDevtools />
    </div>
  );
};

export default RootComponent;
