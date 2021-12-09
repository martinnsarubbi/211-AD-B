import { getConnection, querys, sql } from "../database";


export const obetenerSitios = async (req, res) => {
    console.log("Llegue")
    try {
        const pool = await getConnection();
        const result = await pool
        .request()
        .query(querys.obetenerSitios)
        res.send(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}