import Home from "@/components/Home"
import About from "@/components/About"
import Counter from "@/components/Counter"

const routes = [
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/about',
    element: <About />
  },
  {
    path: '/counter',
    element: <Counter />
  }
]

export default routes;
