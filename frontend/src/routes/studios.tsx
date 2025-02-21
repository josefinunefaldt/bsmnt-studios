import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/studios')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/studios"!</div>
}
