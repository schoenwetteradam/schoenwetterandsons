'use client'
import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'
import MachineCard from './MachineCard'

export default function ProductionMonitor() {
  const [machines, setMachines] = useState([])

  useEffect(() => {
    const subscription = supabase
      .channel('machine_status')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'machine_status' }, payload => {
        setMachines(prev => {
          const index = prev.findIndex(m => m.machine_id === payload.new.machine_id)
          if (index !== -1) {
            const copy = [...prev]
            copy[index] = payload.new
            return copy
          }
          return [...prev, payload.new]
        })
      })
      .subscribe()
    return () => {
      subscription.unsubscribe()
    }
  }, [])

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {machines.map(m => (
        <MachineCard key={m.machine_id} machine={m} />
      ))}
    </div>
  )
}
