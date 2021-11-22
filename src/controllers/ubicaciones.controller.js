import { getConnection, querys, sql } from "../database";

export const obtenerUbicaciones = async (req, res) => {
  console.log('Llego ubicaciones')
  try {
    const pool = await getConnection();
    const result = await pool.request().query(querys.obtenerUbicaciones);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};