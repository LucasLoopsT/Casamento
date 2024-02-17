const CommentServices = require("../services/comment.services"); 
const services = new CommentServices();

class CommentController {
    //Função de callback
    //async para dizer que é uma função assincrona
    create = async (req, res) => {
        try {//constante que verifica todos os campos
            const { userID, text} = req.body;

            if (!userID || !userName || !text) {
                res.status(400).send({ message: "Preencha todos os espaços" });
            }

            //await é usado junto com async
            const comment = await services.create(req.body);

            res.status(201).send({
                message: "Comentário criado com sucesso!",
                comment: comment
            });
        } catch (err) {
            res.status(500).send({ message: "Erro ao criar comentário"});
        }
    }

    findAll = async (req, res) => {
        try {
            const comment = await services.findAll();

            if (comment.length === 0) {
                return res.status(400).send({ message: "There are no registered comments" });
            }
            res.send(comment);
        } catch (err) {
            res.status(500).send({ message: err.message })
        }
    };

    findById = async (req, res) => {
        try {
            const id = req.params.id;
            const comment = await services.findById(id);

            if (!id) {
                res.status(400).send({ message: "Insira o ID"});
            }
            
            res.status(201).send({
                message: "Comentário encontrado:",
                comment: comment
            });
        } catch (err) {
            res.status(500).send({message: err.mensage, error: "Comentário não encontrado"})
        }
    }

    update = async (req, res) => {
        try {
            const id = req.params.id;
            const text = req.body;
    
            if (!id || !text) {
                return res.status(400).send({ message: "Preencha todos os espaços" });
            }
    
            const comment = await services.update(id, text);
    
            res.status(201).send({
                message: "Comentário atualizado com sucesso!",
                comment: comment
            });
        } catch (err) {
            res.status(500).send({ message: err.message, error: "Comentário não atualizado..." });
        }
    }

    delete = async (req, res) => {
        try {
            const id = req.params.id;
            const delcomment = await services.delete(id);

            if (!id) {
                res.status(400).send({ message: "Adicione um ID!" });
            }           

            res.status(201).send({
                message: "Comentário deletado com sucesso!",
                delcomment: delcomment
            });
        } catch (err) {
            res.status(500).send({ message: err.mensage, error: "Comentário não deletado..." })
        }
    }
}

module.exports = CommentController;