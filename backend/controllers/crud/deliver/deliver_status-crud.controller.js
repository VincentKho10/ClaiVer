const DeliverStatusModel = require('../../../models/delivering/deliver_status.model')

const getAllDeliverStatusController = async (req, res, next) => {
    try {
        const dsm = await DeliverStatusModel.find({})
        console.log(dsm)
        if(dsm.length <= 0 ){
            return res.status(200).json({message: "no item found"})
        }
        return res.status(200).json(dsm)
    } catch (error) {
        next(error)
    }

}

const getDeliverStatusController = async (req, res, next) => {
    try {
        const id = req.params.id
        const dsm = await DeliverStatusModel.find({ _id: id })
        if (!dsm) {
            return res.status(400).json({ message: "id not found" })
        }
        return res.status(200).json(dsm)
    } catch (error) {
        next(error)
    }
}

const createDeliverStatusController = async (req, res, next) => {

    try {
        const dsm = await DeliverStatusModel.create(req.body)
        return res.status(200).json({'message': 'Deliver Status Created Successfully', data: dsm})
    } catch (error) {
        next(error)
    }
}

const updateDeliverStatusController = (req, res, next) => {

    try {

    } catch (error) {
        next(error)
    }
}

const deleteDeliverStatusController = (req, res, next) => {

    try {

    } catch (error) {
        next(error)
    }
}

module.exports = { 
    getAllDeliverStatusController, 
    getDeliverStatusController, 
    createDeliverStatusController,
    updateDeliverStatusController,
    deleteDeliverStatusController,
}