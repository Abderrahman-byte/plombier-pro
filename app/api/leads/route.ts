import { LeadBody, submitLead } from '@/lib/airtable'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
    try {
        const body = (await request.json()) as LeadBody

        console.log("received lead submittion")
        console.log(body)

        // Basic validation — improve as needed
        if (!body?.phone || !body?.name) {
            return NextResponse.json(
                { success: false, error: 'Missing required fields: name and email' },
                { status: 400 },
            )
        }

        await submitLead(body)

        return NextResponse.json({ success: true }, { status: 200 })
    } catch (err: any) {
        console.error('Server error', err)
        return NextResponse.json({ success: false }, { status: 500 })
    }
}
