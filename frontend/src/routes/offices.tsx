import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/offices')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/offices"!</div>
}
