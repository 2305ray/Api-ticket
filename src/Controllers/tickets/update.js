export function update({ req, res, database}){
    return res.end(JSON.stringify(req.params))
}