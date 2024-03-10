import { Link } from "react-router-dom"

export default function NotFoundPage() {
  return (
    <div className="flex flex-col gap-2 text-center pt-10">Page Not Found
    <Link to='/'>Home</Link>
    </div>
  )
}
