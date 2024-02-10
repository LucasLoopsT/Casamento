const GiftServices = require("../services/gift.services"); 
const services = new GiftServices();

class GiftController {
    //Função de callback
    //async para dizer que é uma função assincrona
    create = async (req, res) => {
        try {//constante que verifica todos os campos
            const { name, price, preview, link, status} = req.body;

            if (!name || !price || !preview || !link || !status) {
                res.status(400).send({ message: "Preencha todos os espaços" });
            }

            //await é usado junto com async
            const gift = await services.create(req.body);

            if (!gift) {
                return res.status(400).send({ message: "Erro ao criar presente" });
            }

            res.status(201).send({
                message: "Presente criado com sucesso!",
                gift: {
                    id: gift._id,
                    name,
                    price,
                }
            });
        } catch (err) {
            res.status(500).send({ message: err.mensage });
        }
    }

    findAll = async (req, res) => {
        try {
            const gifts = await services.findAll();

            if (gifts.length === 0) {
                return res.status(400).send({ message: "There are no registered gifts" });
            }
            res.send(gifts);
        } catch (err) {
            res.status(500).send({ message: err.message })
        }
    };

    findById = async (req, res) => {
        try {
            const id = req.params.id;
            const gift = await services.findById(id);

            if (!id) {
                res.status(400).send({ message: "Insira o ID"});
            }
            
            res.status(201).send({
                message: "Presente encontrado:",
                gift: gift
            });
        } catch (err) {
            res.status(500).send({message: err.mensage, error: "Presente não encontrado"})
        }
    }

    update = async (req, res) => {
        try {
            const id = req.params.id;
            const { name, email } = req.body;
    
            if (!id || !name || !email) {
                return res.status(400).send({ message: "Preencha todos os espaços" });
            }
    
            const gift = await services.update(id, {name, email});
    
            res.status(201).send({
                message: "Usuário atualizado com sucesso!",
                gift: gift
            });
        } catch (err) {
            res.status(500).send({ message: err.message, error: "Usuário não atualizado..." });
        }
    }

    delete = async (req, res) => {
        try {
            const id = req.params.id;
            const delGift = await services.delete(id);

            if (!id) {
                res.status(400).send({ message: "Adicione um ID!" });
            }           

            res.status(201).send({
                message: "Usuário deletado com sucesso!",
                delGift: delGift
            });
        } catch (err) {
            res.status(500).send({ message: err.mensage, error: "Usuário não deletado..." })
        }
    }
}

module.exports = GiftController;