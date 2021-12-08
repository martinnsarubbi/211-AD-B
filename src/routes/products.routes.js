import { Router } from "express";
import {
  getProducts,
  createNewProduct,
  getProductById,
  deleteProductById,
  getTotalProducts,
  updateProductById,
} from "../controllers/products.controller";

import {
  solicitudRegistroUsuario,
  registroUsuario,
  login
 } from "../controllers/usuarios.controller";

 import {
   crearPromocion,
   obtenerPromocionesActivas
 } from "../controllers/promociones.controller.js";

 import {
  crearDenuncia,
  obtenerDenunciasRealizadas,
  obtenerDenunciasOtroVecino
 } from "../controllers/denuncias.controller.js";

 import { obtenerRubros } from "../controllers/rubros.controller";

 import { obtenerUbicaciones } from "../controllers/ubicaciones.controller";

 import { crearReclamo, obtenerReclamos } from "../controllers/reclamos.controller";

import { createNuevoDesperfecto } from "../controllers/desperfectos.controller";

const router = Router();

router.get("/products", getProducts);

router.post("/products", createNewProduct);

router.get("/products/count", getTotalProducts);

router.get("/products/:id", getProductById);

router.delete("/products/:id", deleteProductById);

router.put("/products/:id", updateProductById);

router.post("/usuario/solicitudRegistro", solicitudRegistroUsuario);
router.post("/usuario/registro", registroUsuario);
router.post("/usuario/login", login);
router.post("/promocion", crearPromocion);
router.get("/promocion", obtenerPromocionesActivas);
router.post("/denuncia", crearDenuncia);
router.get("/denuncia/:documento", obtenerDenunciasRealizadas);
router.get("/denuncia/generadasPorOtroVecino/:documento", obtenerDenunciasOtroVecino);
router.get("/rubros", obtenerRubros);
router.get("/ubicaciones", obtenerUbicaciones);
router.post("/reclamo/", crearReclamo);
router.get("/reclamo/:documento", obtenerReclamos);


//Los que agregue yo

router.post("/desperfecto", createNuevoDesperfecto);

export default router;
