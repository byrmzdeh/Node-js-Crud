import { UserModel } from '../model/UserModel.js'


export const getUser = async (req, res) => {
    try {
        const users = await UserModel.find({});
        res.send(200).json(users)
    } catch (error) {
        res.status(500).send(error.message)

    }
}

export const getByIdUser = async (req, res) => {
    try {
        const { id } = req.params
        const users = await UserModel.findById(id)
        res.send(users)
    } catch (error) {
        res.send(error.message)
    }
}

export const getPostUser = async (req, res) => {
    try {
        const { username, email, password, age, isMarried } = req.body
        const newUser = new UserModel({ username, email, password, age, isMarried });
        await newUser.save();
        res.send('User Yarandi !')
        console.log(process.env.PORT);
    } catch (error) {
        res.send(error.message)

    }
}


export const getDeleteUser = async (req, res) => {
    try {
        const { id } = req.params
        const users = await UserModel.findByIdAndDelete(id)
        res.send(users)

    } catch (error) {
        res.send(error.message)

    }
}


export const getPutUser = async (req, res) => {
    try {
        const { id } = req.params
        const { username, email, password, age, isMarried } = req.body
        const users = await UserModel.findByIdAndUpdate(id, { username, email, password, age, isMarried })
        res.send(users)
        
    } catch (error) {
        res.send(error.message)   
    }
}


