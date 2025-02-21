import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/hackney')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/hackney"!</div>
}
