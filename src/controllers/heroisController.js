import dados from "../models/dados.js";
const { herois } = dados;

// Dentro dos controllers é onde fica os verbos

const getAllHerois = (req, res) => {
    const { nome, universo, ativo } = req.query; 

    let resultado = herois;

    if(nome) {
        resultado = resultado.filter((h) => h.nome.toLowerCase().includes(nome.toLowerCase()));
    }

    if(universo) {
        resultado = resultado.filter((h) => h.universo.toLowerCase().includes(universo.toLowerCase()));
    }

    if(ativo !== undefined) {
        resultado = resultado.filter((h) => h.ativo ===(ativo === 'true'));
    }



    res.status(200).json({
        total: resultado.length,
        data: resultado
    })
};

const createHeroi = (req, res) => {
    const { nome, identidadeSecreta, poder, fraqueza, universo, ativo } = req.body;

    if (!nome || !universo) {
        return res.status(400).json({
            sucess: false,
            message: "Nome e universo são obrigatórios!"
        })
    }

    const novoHeroi = {
        id: herois.length + 1,
        nome,
        identidadeSecreta,
        poder,
        fraqueza,
        universo,
        ativo
    }

    herois.push(novoHeroi);

    res.status(201).json({
        sucess: true,
        message: "Criado com sucesso",
        data: novoHeroi
    })
}


export { getAllHerois, createHeroi };
