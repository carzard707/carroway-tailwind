import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import styled from 'styled-components'
import RootComponent from '../_shared/components/RootComponent'

export const Route = createRootRoute({
  component: RootComponent,
})


