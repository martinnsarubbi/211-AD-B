import { getConnection, querys, sql } from "../database";


export const obtenerDesperfectos = async (req, res) => {
    const {idRubro } = req.params;
    
    try {
      const pool = await getConnection();
      const result = await pool.request()
      .input("idRubro", sql.Int, idRubro)
      .query(querys.obtenerDesperfectos);
      res.json(result.recordset);
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }
  };
