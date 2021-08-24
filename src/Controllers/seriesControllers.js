const series = require("../models/series.json") // importando meu arquivo json dos filmes (que nesse projeto, são os meus dados)

// definir uma rota padrão
const home = (req, res) => {
    res.status(200).send(
        {
            "message": "hello world XD "
        })
};
const getAll = (req, res) => {
    res.status(200).send(series);
};
const getById = (req, res) => {
    // id solicitado na requição (request)
    const requestedId = req.params.id;
    // find((elemento) => elemento + a lógica)
    const filteredId = series.find(serie => serie.id == requestedId);
    //enviar reposta
    res.status(200).send(filteredId);
}
const getByTitle = (req, res) => {
    // acessando o título solicitado na request
    const requestedTitle = req.query.title.toLowerCase()
    // filtrar os títulos do json
    const filteredTitle = series.find(serie => serie.title.toLowerCase().includes(requestedTitle))

    // adicionar um condição para retornar o título
    if (requestedTitle === "" || filteredTitle === undefined) {
        res.status(404).send({
            "message": "Titulo invalido"
        })
    } else {
        res.status(200).send(filteredTitle)
    }
};
const getByGenre = (req, res) => {
    // acessar qual o gênero requisitado
    const requestedGenre = req.query.genre;

    // criar lista para armazenar dados do loop
    let serieList = [];
    // comparar todos os itens da lista que são daquele gênero
    series.forEach(serie => {
        // separar elementos
        let genreList = serie.genre.split(",")
        for (genre of genreList) {
            if (genre.includes(requestedGenre)) {
                serieList.push(serie)
            }
        }})
    res.status(200).send(serieList)
};
module.exports = {
    home,
    getAll,
    getById,
    getByTitle,
    getByGenre
}
