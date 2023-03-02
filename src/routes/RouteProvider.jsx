import { createBrowser, RouterProvider } from 'react-router-dom'

import { routes } from "@/routes/routes"

export const router = createBrowserRouter(routes)

export const Routes = () => {
  return <RouterProvider router={router} />
}