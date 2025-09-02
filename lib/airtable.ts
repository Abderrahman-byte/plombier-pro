export interface LeadBody {
    name: string
    phone: string
    email?: string
    address: string
    issueType: string
    description: string
}

export async function submitLead(data: LeadBody) {
    console.log("submitting lead to airtable")
    console.log(data)

    const airtableUrl = `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/Rappel`

    const payload = {
        fields: {
            Nom: data.name,
            Telephone: data.phone,
            Email: data.email,
            Adresse: data.address,
            'Type de probleme': data.issueType,
            Description: data.description,
            Status: 'Nouveau',
        },
    }

    try {
        const r = await fetch(airtableUrl, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        })

        const data = await r.json()

        if (!r.ok) {
            console.error(
                `Failed to submit form: status=${r.status} data=${JSON.stringify(data)}`,
            )
        }
    } catch (err) {
        console.error(err)
        throw err
    }
}
