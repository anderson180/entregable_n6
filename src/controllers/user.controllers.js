const catchError = require('../utils/catchError');
const model = require('../models/model');
const User = require('../models/User')

const getAll = catchError(async(req, res) => {
    const results = await model.findAll();
    return res.json(results);
});

const create = catchError(async(req, res) => {
    const result = await model.create(req.body);
    return res.status(201).json(result);
});

const remove = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await model.destroy({ where: {id} });
    if(!result) return res.sendStatus(404);
    return res.sendStatus(204);
});

const update = catchError(async (req, res) => {

    const doNotUpdate = ['password', 'email'];
    doNotUpdate.forEach((field) => delete req.body[field]);
  
    const { id } = req.params;
  
    const result = await User.update(
      req.body,
      { where: { id }, returning: true }
    );
    if (result[0] === 0) return res.sendStatus(404);
    return res.json(result[1][0]);
  });

  const login = catchError(async (req, res) => {
    const { email, password } = req.body

    const user = await User.findOne({ where: { email } })
    if (!user) return res.status(401).json({ error: 'Invalid credentials' })
    const isValid = bcrypt.compareSync(password, user.password)
    if (!isValid) return res.status(401).json({ error: 'Invalid credentials' })
    delete user.dataValues.password
//Para contraseñas incriptadas seiempre debemos generar un token con la libreria: JWT
    const token = jwt.sign(
        { user },
        process.env.TOKEN_SECRET,
        { expiresIn: '1d' }
    )

    return res.status(201).json({user, token})
});

module.exports = {
    getAll,
    create,
    getOne,
    remove,
    update,
    login
}