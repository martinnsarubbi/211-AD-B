import { getConnection, querys, sql } from "../database";

export const crearPromocion = async (req, res) => {
  const { tituloPromocion, direccion, desdeDia, hastaDia, desdeHora, hastaHora, descripcion,
    servicioProfesional, telefono, mail, nombre, apellido, documento, imagen1, imagen2, imagen3,
    imagen4, imagen5 } = req.body;
  // validating
  if (tituloPromocion == null || direccion == null || desdeDia == null || hastaDia == null || desdeHora == null ||
    hastaHora == null || descripcion == null ) {
    return res.status(400).json({ msg: "Bad Request. Por favor llenar todos los campos." });
  }

  if (servicioProfesional == null) { servicioProfesional = 'No'; }
  let activa = 'No';

  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("documento", sql.VarChar, documento)
      .query(querys.obtenerVecinoPorDocumento);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }

   telefono, mail, nombre, apellido, documento, activa

  try {
    const pool = await getConnection();
    await pool
      .request()
      .input("tituloPromocion", sql.VarChar, tituloPromocion)
      .input("direccion", sql.VarChar, direccion)
      .input("desdeDia", sql.VarChar, desdeDia)
      .input("hastaDia", sql.VarChar, hastaDia)
      .input("desdeHora", sql.VarChar, desdeHora)
      .input("hastaHora", sql.VarChar, hastaHora)
      .input("descripcion", sql.VarChar, descripcion)
      .input("servicioProfesional", sql.VarChar, servicioProfesional)
      .input("telefono", sql.VarChar, telefono)
      .input("mail", sql.VarChar, mail)
      .input("nombre", sql.VarChar, nombre)
      .input("apellido", sql.VarChar, apellido)
      .input("documento", sql.VarChar, documento)
      .input("activa", sql.VarChar, activa)
      .input("imagen1", sql.VarChar, imagen1)
      .input("imagen2", sql.VarChar, imagen2)
      .input("imagen3", sql.VarChar, imagen3)
      .input("imagen4", sql.VarChar, imagen4)
      .input("imagen5", sql.VarChar, imagen5)
      .query(querys.crearPromocion);
      res.send("Promocion creada exitosamente");
  } catch (error) {
    res.status(500);  
    res.send(error.message);
  }
}

export const obtenerPromocionesActivas = async (req, res) => {

    console.log("Llegue")
    try {
        const pool = await getConnection();
        const result = await pool
        .request()
        .query(querys.obtenerPromocionesActivas)
        res.send(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }

}