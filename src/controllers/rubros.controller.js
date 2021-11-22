import { getConnection, querys, sql } from "../database";

export const obtenerRubros = async (req, res) => {
  console.log('Llego rubros')
  try {
    const pool = await getConnection();
    const result = await pool.request().query(querys.obtenerRubros);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};