import dados from "../models/dados.js";
const { animes } = dados;

const getAllAnimes = (req, res) => {
    let resultado = animes;
    const { anime, classe, elemento, raridade} = req.query;

    if (anime) {
        resultado = resultado.filter(a =>
            a.anime.toLowerCase().includes(anime.toLowerCase())
        );
    }

    if (classe) {
        resultado = resultado.filter(a =>
            a.classe.toLowerCase() === classe.toLowerCase()
        );
    }

    if (elemento) {
        resultado = resultado.filter(a =>
            a.elemento.toLowerCase() === elemento.toLowerCase()
        );
    }
    if (raridade) {
        resultado = resultado.filter(a =>
            a.anime.toLowerCase() === anime.toLowerCase()
        );
    }

    res.status(200).json({
        total: resultado.length,
        data: resultado
    });
}


const getAnimeByld = (req, res) => {
    const id = parseInt(req.params.id);
    const anime = animes.find(a => a.id === id);

    if (!anime) {
        res.status(404).json({
            success: false,
            message: `Anime not found, ${id}`
        })
    }

    res.status(200).json({
        total: anime.length,
        data: anime
    })
}

const createAnime = (req, res) => {
    const { nome ,anime, classe, poder,nivel,elemento, raridade,habilidades} = req.body;

    const raridadeAnime = ["Mítico", "Lendário", "Épico", "Raro", "Comum"];

    if (!nome) {
        return res.status(400).json({
            success: false,
            message: "O campo 'nome' é obrigatório"
        });
    }

    if (!anime) {
        return res.status(400).json({
            success: false,
            message: "O campo 'anime' é obrigatório"
        });
    }

    if (!classe) {
        return res.status(400).json({
            success: false,
            message: "O campo 'classe' é obrigatório"
        });
    }

    if (!poder) {
        return res.status(400).json({
            success: false,
            message: "O campo 'poder' é obrigatório"
        });
    }

    if (!nivel) {
        return res.status(400).json({
            success: false,
            message: "O campo 'nivel' é obrigatório"
        });
    }

    if (!habilidades) {
        return res.status(400).json({
            success: false,
            message: "O campo 'habilidades' é obrigatório"
        });
    }
  

    monsters.push(novaMonster);

    res.status(201).json({
        success: true,
        message: "Novo Anime Cadastrado com sucesso",
        data: novoAnime
    })

}



export { getAllAnimes,getAnimeByld, createAnime};