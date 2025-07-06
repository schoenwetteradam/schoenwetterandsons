export default function KPICard({ title, value, trend, icon: Icon }) {
  return (
    <div className="bg-white p-4 rounded shadow border">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-600">{title}</p>
          <p className="text-2xl font-bold">{value}</p>
        </div>
        {Icon && <Icon className="h-6 w-6 text-blue-600" />}
      </div>
      <div className={`mt-1 text-sm ${trend >= 0 ? 'text-green-600' : 'text-red-600'}`}> 
        {trend >= 0 ? '↗' : '↘'} {Math.abs(trend)}%
      </div>
    </div>
  )
}
