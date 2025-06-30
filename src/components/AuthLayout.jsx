import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="bg-white shadow p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-gray-800">Client Portal</h1>
      <nav className="space-x-4">
        <Link to="/dashboard" className="text-blue-600 hover:underline">Dashboard</Link>
        <Link to="/history" className="text-blue-600 hover:underline">Project History</Link>
      </nav>
    </header>
  )
}
