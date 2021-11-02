export const querys = {
  obtenerVecinoPorDocumento: "SELECT * FROM vecinos Where documento = @documento",
  obtenerVecinoUsuarioPorDocumento: "SELECT * FROM vecinos LEFT JOIN usuarios on vecinos.documento = usuarios.documento where vecinos.documento = @documento",
  agregarVecino: "INSERT INTO usuarios (email, documento, habilitado) VALUES (@email,@documento,@habilitado)",
  generarPassword: "UPDATE usuarios SET password = @password WHERE documento = @documento",
  crearPromocion: "INSERT INTO promociones (tituloPromocion, direccion, desdeDia, hastaDia, desdeHora, hastaHora, descripcion, servicioProfesional, telefono, mail, nombre, apellido, documento, activa) VALUES (@tituloPromocion, @direccion, @desdeDia, @hastaDia, @desdeHora, @hastaHora, @descripcion, @servicioProfesional, @telefono, @mail, @nombre, @apellido, @documento, @activa)",
  obtenerPromocionesActivas: "SELECT * FROM promociones WHERE activa = 'Si'",
  crearDenuncia: "INSERT INTO denuncias (documento, idSitio, descripcion, estado, aceptaResponsabilidad) VALUES (@documento, @idSitio, @descripcion, @estado, @aceptaResponsabilidad); INSERT INTO detalleDenuncias (denunciadoNombre, denunciadoApellido, comercioDenunciado, denunciadoDireccion, denunciadoDocumento, idDenuncias) VALUES (@denunciadoNombre, @denunciadoApellido, @comercioDenunciado, @denunciadoDireccion, @denunciadoDocumento, (SELECT MAX(distribuidas.dbo.denuncias.idDenuncias) FROM distribuidas.dbo.denuncias); (SELECT MAX(distribuidas.dbo.denuncias.idDenuncias) as idDenuncia FROM distribuidas.dbo.denuncias)",
  obtenerDenunciasGeneradas: "SELECT * FROM denuncias LEFT JOIN detalleDenuncias on denuncias.idDenuncias = detalleDenuncias.idDenuncias WHERE denuncias.documento = @documento",
  obtenerDenunciasGeneradasPorVecino: "SELECT * FROM denuncias LEFT JOIN detalleDenuncias on denuncias.idDenuncias = detalleDenuncias.idDenuncias WHERE detalleDenuncias.denunciadoDocumento = @documento",
  crearReclamo:"",
  obtenerReclamos:"",
  obtenerReclamosVecino:"",

  getProducById: "SELECT * FROM Products Where Id = @Id",
  deleteProduct: "DELETE FROM [distribuidas].[dbo].[Products] WHERE Id= @Id",
  getTotalProducts: "SELECT COUNT(*) FROM distribuidas.dbo.Products",
  updateProductById:
    "UPDATE [distribuidas].[dbo].[Products] SET Name = @name, Description = @description, Quantity = @quantity WHERE Id = @id",
};
