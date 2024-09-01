import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createRouter } from '@tanstack/react-router'
import { Route } from './routes/__root';
import { homePageRoute } from './pages/Home';
import "./index.css"
import { resultsPageRoute } from './pages/Results';
//@ts-ignore
export const routeTree = Route.addChildren([homePageRoute, resultsPageRoute]);

const router = createRouter({ routeTree })

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

const rootElement = document.getElementById('root')!
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  )
}
