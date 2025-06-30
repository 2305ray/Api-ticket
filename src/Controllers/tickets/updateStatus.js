export function updateStatus({ req, res, database }) {
    const { id } = req.params
    const { solution } = req.body

    database.update("tickets", id, { status: "close", solution })

    return res.end()
}