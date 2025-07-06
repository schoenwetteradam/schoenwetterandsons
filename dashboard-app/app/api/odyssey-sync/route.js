import { NextResponse } from 'next/server'
import { supabase } from '../../../lib/supabase'

export async function POST(request) {
  try {
    const data = await request.json()
    const records = transformOdysseyData(data)
    await supabase.from('production_metrics').insert(records)
    return NextResponse.json({ success: true })
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}

function transformOdysseyData(list) {
  return list.map(r => ({
    timestamp: new Date(r.Date),
    machine_id: r.Equipment,
    pieces_produced: parseInt(r.Quantity, 10)
  }))
}
