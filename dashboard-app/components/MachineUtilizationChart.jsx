'use client'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts'

export default function MachineUtilizationChart({ data = [] }) {
  return (
    <BarChart width={300} height={200} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="machine" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="utilization" fill="#82ca9d" />
    </BarChart>
  )
}
