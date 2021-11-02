import { getConnection, querys, sql } from "../database";

export const crearReclamo = async (req, res) => {
    const { documento, denunciadoNombre, denunciadoApellido, comercioDenunciado, denunciadoDireccion,
        denunciadoDocumento, aceptaResponsabilidad, descripcion, idSitio } = req.body;
    // validating
    if (documento == null) {
      return res.status(400).json({ msg: "Bad Request. Por favor llenar todos los campos." });
    }

    let estado = 'nueva denuncia'

    try {
        const pool = await getConnection();
        const result = await pool
          .request()
          .input("documento", sql.VarChar, documento)
          .input("idSitio", sql.Int, idSitio)
          .input("descripcion", sql.VarChar, descripcion)
          .input("estado", sql.VarChar, estado)
          .input("aceptaResponsabilidad", sql.Int, aceptaResponsabilidad)
          .input("denunciadoNombre", sql.VarChar, denunciadoNombre)
          .input("denunciadoApellido", sql.VarChar, denunciadoApellido)
          .input("comercioDenunciado", sql.VarChar, comercioDenunciado)
          .input("denunciadoDireccion", sql.VarChar, denunciadoDireccion)
          .input("denunciadoDocumento", sql.Int, denunciadoDocumento)
          .query(querys.crearDenuncia);
          res.send(result.recordset[0])

      } catch (error) {
        res.status(500);
        res.send(error.message);
      }
}
