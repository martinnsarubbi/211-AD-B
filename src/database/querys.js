export const querys = {
  obtenerVecinoPorDocumento: "SELECT * FROM vecinos Where documento = @documento",
  obtenerVecinoUsuarioPorDocumento: "SELECT * FROM vecinos LEFT JOIN usuarios on vecinos.documento = usuarios.documento where vecinos.documento = @documento",
  agregarVecino: "INSERT INTO usuarios (email, documento, habilitado) VALUES (@email,@documento,@habilitado)",
  generarPassword: "UPDATE usuarios SET password = @password WHERE documento = @documento",
  crearPromocion: "INSERT INTO promociones (tituloPromocion, direccion, desdeDia, hastaDia, desdeHora, hastaHora, descripcion, servicioProfesional, telefono, mail, nombre, apellido, documento, activa) VALUES (@tituloPromocion, @direccion, @desdeDia, @hastaDia, @desdeHora, @hastaHora, @descripcion, @servicioProfesional, @telefono, @mail, @nombre, @apellido, @documento, @activa)",
  obtenerPromocionesActivas: "SELECT * FROM promociones WHERE activa = 'Si'",
  crearDenuncia: "INSERT INTO denuncias (documento, idSitio, descripcion, estado, aceptaResponsabilidad) VALUES (@documento, @idSitio, @descripcion, @estado, @aceptaResponsabilidad); INSERT INTO detalleDenuncias (denunciadoNombre, denunciadoApellido, comercioDenunciado, denunciadoDireccion, denunciadoDocumento, idDenuncias) VALUES (@denunciadoNombre, @denunciadoApellido, @comercioDenunciado, @denunciadoDireccion, @denunciadoDocumento, (SELECT MAX(distribuidas.dbo.denuncias.idDenuncias) FROM distribuidas.dbo.denuncias)); (SELECT MAX(distribuidas.dbo.denuncias.idDenuncias) as idDenuncia FROM distribuidas.dbo.denuncias)",
  obtenerDenunciasGeneradas: "SELECT * FROM denuncias LEFT JOIN detalleDenuncias on denuncias.idDenuncias = detalleDenuncias.idDenuncias WHERE denuncias.documento = @documento",
  obtenerDenunciasGeneradasPorVecino: "SELECT * FROM denuncias LEFT JOIN detalleDenuncias on denuncias.idDenuncias = detalleDenuncias.idDenuncias WHERE detalleDenuncias.denunciadoDocumento = @documento",
  crearReclamo:"INSERT INTO reclamos (documento, idSitio, idDesperfecto, descripcion, estado, idReclamoUnificado) VALUES (@documento, @idSitio, @idDesperfecto, @descripcion, @estado, @idReclamoUnificado); INSERT INTO distribuidas.dbo.detalleReclamos (lugarReclamo, imagen1, imagen2, imagen3, imagen4, imagen5, imagen6, imagen7, idReclamo) VALUES (@lugarReclamo, @imagen1, @imagen2, @imagen3, @imagen4, @imagen5, @imagen6, @imagen7, (SELECT MAX(distribuidas.dbo.reclamos.idReclamo) FROM distribuidas.dbo.reclamos)); (SELECT MAX(distribuidas.dbo.reclamos.idReclamo) as idReclamo FROM distribuidas.dbo.reclamos)",
  obtenerReclamos:"SELECT * FROM reclamos LEFT JOIN detalleReclamos on reclamos.idReclamo = detalleReclamos.idReclamo WHERE reclamos.documento = @documento",
  obtenerUbicaciones:"SELECT * FROM barrios",
  obtenerRubros:"SELECT * FROM rubros",
  /* Los que cree yo */
  crearDesperfecto : "INSERT INTO desperfectos (descripcion, idRubro) VALUES (@descripcion, @idRubro)"
};
