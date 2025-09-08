import dados from "../models/dados.js"
const { viloes } = dados;

const getAllViloes = (req, res) => {
    let resultado = viloes;

    res.status(200).json({
        total: resultado.length,
        data: resultado
    })
}

export { getAllViloes }