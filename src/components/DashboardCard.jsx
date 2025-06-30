export default function ProjectTable() {
  const data = [
    { name: 'Logo Design', date: '2025-06-01', link: '#' },
    { name: 'Website Mockup', date: '2025-06-10', link: '#' },
    { name: 'Final Assets', date: '2025-06-20', link: '#' },
  ]

  return (
    <div className="mt-6">
      <table className="min-w-full bg-white rounded shadow overflow-hidden">
        <thead className="bg-gray-100 text-gray-700">
          <tr>
            <th className="p-3 text-left">Name</th>
            <th className="p-3 text-left">Date</th>
            <th className="p-3 text-left">Download</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className="border-t">
              <td className="p-3">{row.name}</td>
              <td className="p-3">{row.date}</td>
              <td className="p-3">
                <a href={row.link} className="text-blue-500 hover:underline">Download</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4 p-4 bg-yellow-50 text-yellow-700 rounded">
        Waiting for your feedback…
      </div>
    </div>
  )
}
