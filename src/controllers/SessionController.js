const User = require('../models/User')
// index, show, store, update, destroy

module.exports = {
    async store(req, res) {
        const { email, password } = req.body;

        let user = await User.findOne({email, password});

        if(!user) {
            const { name } = req.body;
            if(!name){
                user = await User.findOne({email});

                if(!user){
                    return res.status(404).json({ message: 'Usuário não existe'});
                } else {
                    return res.status(404).json({ message: 'Senha incorreta'});
                }
            }
            user = await User.create({ name, email, password });
        }

        return res.json(user);
    }
};