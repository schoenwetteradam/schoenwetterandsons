'use client'
import { useState } from 'react'
import KPICard from './KPICard'
import ProductionEfficiencyChart from './ProductionEfficiencyChart'
import MachineUtilizationChart from './MachineUtilizationChart'
import ProductionMonitor from './ProductionMonitor'
import { BarChart3, AlertTriangle } from 'lucide-react'

export default function Dashboard() {
  const [metrics] = useState({ oee: 0, scrapRate: 0 })
  return (
    <div className="space-y-6 p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <KPICard title="OEE" value={`${metrics.oee}%`} trend={5.2} icon={BarChart3} />
        <KPICard title="Scrap Rate" value={`${metrics.scrapRate}%`} trend={-2.1} icon={AlertTriangle} />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <ProductionEfficiencyChart />
        <MachineUtilizationChart />
      </div>
      <ProductionMonitor />
    </div>
  )
}
