import { NextResponse } from 'next/server'
 
export async function GET() {
  // const res = await fetch('https://data.mongodb-api.com/...', {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //     'API-Key': process.env.DATA_API_KEY,
  //   },
  //   body: JSON.stringify({ time: new Date().toISOString() }),
  // })
 
  // const data = await res.json()
 
  return NextResponse.json({ menu: 'ok'})
}