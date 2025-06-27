import { create } from "../Controllers/tickets/create.js"
import { index } from "../Controllers/tickets/index.js"
import { update } from "../Controllers/tickets/update.js"

export const tickets = [
    {
        method: 'POST',
        path: '/tickets',
        controller: create,
    },

    {
        method: 'GET',
        path: '/tickets',
        controller: index,
    },

    {
        method: 'PUT',
        path: '/tickets/:id',
        controller: update,
    }
]