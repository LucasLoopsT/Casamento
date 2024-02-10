const UserServices = require("../services/user.services");
const services = new UserServices();

class UserController {

    create = async (req, res) => {
        try {//constante que verifica todos os campos
            const { name, email, password} = req.body;

            if (!name || !email || !password) {
                res.status(400).send({ message: "Preencha todos os espaços" });
            }

            //await é usado junto com async
            const user = await services.create(req.body);

            if (!user) {
                return res.status(400).send({ message: "Erro ao criar usuário" });
            }

            res.status(201).send({
                message: "Usuário criado com sucesso!",
                user: {
                    id: user._id,
                    name,
                    email,
                }
            });
        } catch (err) {
            res.status(500).send({ message: err.mensage });
        }
    }

    findAll = async (req, res) => {
        try {
            const users = await services.findAll();

            if (users.length === 0) {
                return res.status(400).send({ message: "There are no registered users" });
            }
            res.send(users);
        } catch (err) {
            res.status(500).send({ message: err.message })
        }
    };

    findById = async (req, res) => {
        try {
            const id = req.params.id;
            const user = await services.findById(id);

            if (!id) {
                res.status(400).send({ message: "Insira o ID"});
            }
            
            res.status(201).send({
                message: "Usuário encontrado:",
                user: user
            });
        } catch (err) {
            res.status(500).send({message: err.mensage, error: "Não encontrado"})
        }
    }
    
    update = async (req, res) => {
        try {
            const id = req.params.id;
            const { name, email } = req.body;
    
            if (!id || !name || !email) {
                return res.status(400).send({ message: "Preencha todos os espaços" });
            }
    
            const user = await services.update(id, {name, email});
    
            res.status(201).send({
                message: "Usuário atualizado com sucesso!",
                user: user
            });
        } catch (err) {
            res.status(500).send({ message: err.message, error: "Usuário não atualizado..." });
        }
    }

    delete = async (req, res) => {
        try {
            const id = req.params.id;
            const delUser = await services.delete(id);

            if (!id) {
                res.status(400).send({ message: "Adicione um ID!" });
            }           

            res.status(201).send({
                message: "Usuário deletado com sucesso!",
                delUser: delUser
            });
        } catch (err) {
            res.status(500).send({ message: err.mensage, error: "Usuário não deletado..." })
        }
    }
}

module.exports = UserController;