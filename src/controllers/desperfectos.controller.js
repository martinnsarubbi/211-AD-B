import { getConnection, querys, sql } from "../database";


export const createNuevoDesperfecto = async (req, res) => {
    const { descripcion, idRubro } = req.body;

    // validating
    if (descripcion == null || idRubro == null) {
        return res.status(400).json({ msg: "Bad Request. Please fill all fields" });
    }


    try {
        const pool = await getConnection();
        console.log(descripcion);
        console.log(idRubro);
        await pool
            .request()
            .input("descripcion", sql.Text, descripcion)
            .input("idRubro", sql.Int, idRubro)
            .query(querys.crearDesperfecto);

        res.json({ descripcion, idRubro });
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}