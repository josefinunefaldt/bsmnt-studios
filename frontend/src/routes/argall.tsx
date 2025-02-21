import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/argall')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/argall"!</div>
}
