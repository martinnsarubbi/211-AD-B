import { getConnection, querys, sql } from "../database";

export const solicitudRegistroUsuario = async (req, res) => {
  const { documento, email } = req.body;
  // validating
  if (documento == null ||   email == null) {
    return res.status(400).json({ msg: "Bad Request. Por favor llenar todos los campos." });
  }

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

  try {
    const pool = await getConnection();
    const habilitado = 'No'
    await pool
      .request()
      .input("documento", sql.VarChar, documento)
      .input("email", sql.VarChar, email)
      .input("habilitado", sql.VarChar, habilitado)
      .query(querys.agregarVecino);

    res.send("Solicitud enviada correctamente para el documento " + documento);
  } catch (error) {
    res.status(500);  
    res.send(error.message);
  }
};


export const registroUsuario = async (req, res) => {
  const { documento, password } = req.body;
  // validating
  if (documento == null || password == null) {
    return res.status(400).json({ msg: "Bad Request. Por favor llenar todos los campos." });
  }

  let habilitado;
  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("documento", sql.VarChar, documento)
      .query(querys.obtenerVecinoUsuarioPorDocumento);
      habilitado = result.recordset[0].habilitado
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }

  if (habilitado == 'No') {
    return res.status(400).json({ msg: "El usuario no se encuentra habiltado" });
  }

  try {
    const pool = await getConnection();
    const habilitado = 'Si'
    await pool
      .request()
      .input("password", sql.VarChar, password)
      .input("documento", sql.VarChar, documento)
      .query(querys.generarPassword);
      res.send("Password generada correctamente para el documento " + documento);
  } catch (error) {
    res.status(500);  
    res.send(error.message);
  }
}


export const login = async (req, res) => {
  const { documento, password } = req.body;
  // validating
  if (documento == null || password == null) {
    return res.status(400).json({ msg: "Por favor llenar todos los campos." });
  }

  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("documento", sql.VarChar, documento)
      .query(querys.obtenerVecinoUsuarioPorDocumento);
      if(result.recordset[0].password == password) {
        res.send("Login exitoso")
      } else {
        res.status(400)
        res.send("Contraseña incorreta")
      }
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }

}