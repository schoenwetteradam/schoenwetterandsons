export default function MachineCard({ machine }) {
  return (
    <div className="border p-4 rounded bg-white shadow">
      <h4 className="font-semibold mb-1">{machine.machine_id}</h4>
      <p className="text-sm">Status: {machine.status}</p>
      <p className="text-sm">Current Job: {machine.current_job}</p>
      <p className="text-sm">Utilization: {machine.utilization_percent}%</p>
    </div>
  )
}
