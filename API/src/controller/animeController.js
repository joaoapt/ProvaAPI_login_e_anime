import { inserirAnime,buscarAnime,buscarPorTodosAN  } from "../repository/animeRepositoty.js";

import { Router } from 'express'
const server = Router();


server.post('/anime', async (req, resp) =>{
    try{
        const novoAnime = req.body;

        if(!novoAnime.nome){
            throw new Error('nome do anime é OBRIGATORIO');
        }

        const animeInserir = await inserirAnime(novoAnime);
        resp.send(animeInserir)
    }
    catch(err){
        resp.status(404).send({
            erro:err.message
        })
    }
})

server.get('/anime/:id', async (req, resp) => {
    try {
        const id = req.params.id;
        const buscar = await buscarAnime(id);

        resp.send({
            anime:buscar
        })
    } 
    catch (err) {
        resp.status(404).send({
            erro:err.message
        })
    }
});

server.get('/anime/', async (resp) => {
    try {
        const buscar = await buscarPorTodosAN();

        resp.send({
            anime:buscar
        })
    } 
    catch (err) {
        resp.status(404).send({
            erro:err.message
        })
    }
});

export default server;