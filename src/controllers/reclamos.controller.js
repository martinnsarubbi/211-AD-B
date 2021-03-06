import { getConnection, querys, sql } from "../database";

export const crearReclamo = async (req, res) => {
    const { documento, 
            idDesperfecto, 
            idSitio, 
            idReclamoUnificado,
            lugarReclamo,
            estado,  
            descripcion,
            imagen1, 
            imagen2, 
            imagen3,
            imagen4, 
            imagen5, 
            imagen6, 
            imagen7 
          } = req.body;
    // validating
    if (documento == null) {
      return res.status(400).json({ msg: "Bad Request. Por favor llenar todos los campos." });
    }


    try {
        const pool = await getConnection();
        const result = await pool
          .request()
          .input("documento", sql.VarChar, documento)
          .input("idSitio", sql.Int, idSitio)
          .input("idDesperfecto", sql.Int, idDesperfecto)
          .input("estado", sql.VarChar, estado)
          .input("descripcion", sql.VarChar, descripcion)
          .input("idReclamoUnificado", sql.Int, idReclamoUnificado)
          .input("lugarReclamo", sql.VarChar, lugarReclamo)
          .input("imagen1", sql.VarBinary , imagen1)
          .input("imagen2", sql.VarBinary, imagen2)
          .input("imagen3", sql.VarBinary, imagen3)
          .input("imagen4", sql.VarBinary, imagen4)
          .input("imagen5", sql.VarBinary, imagen5)
          .input("imagen6", sql.VarBinary, imagen6)
          .input("imagen7", sql.VarBinary, imagen7)
          .query(querys.crearReclamo);
          res.send(result.recordset[0])

      } catch (error) {
        res.status(500);
        res.send(error.message);
      }
}


export const obtenerReclamos = async (req, res) => {
    
  const { documento } = req.params;
  console.log(documento)
  try {
      const pool = await getConnection();
      const result = await pool
        .request()
        .input("documento", sql.VarChar, documento)
        .query(querys.obtenerReclamos);
        res.send(result);
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }

}