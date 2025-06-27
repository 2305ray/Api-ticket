import { randomUUID } from 'node:crypto'

export function create({ req, res, database }) {
    const { equipament, description, user_name } = req.body//recuperar as infos do body 

    const ticket = {
        id: randomUUID(),
        equipament,
        description,
        user_name,
        status: "open",
        create_at: new Date(),
        updated_at: new Date()
    }

    database.insert("tickets", ticket)

    return res.writeHead(201).end(JSON.stringify(ticket))
}
