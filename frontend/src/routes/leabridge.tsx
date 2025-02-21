import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/leabridge')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/leabridge"!</div>
}
