const DeliverStatusModel = require('../../../models/delivery/deliver_status.model')
const { Logger } = require('../../../util/logger')

const getAllDeliverStatusController = async (req, res, next) => {
    try {
        const dsm = await DeliverStatusModel.find({})
        if (dsm.length <= 0) {
            return res.status(200).json({ message: "no item found" })
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
        return res.status(200).json({ 'message': 'Deliver Status Created Successfully', data: dsm })
    } catch (error) {
        next(error)
    }
}

const updateDeliverStatusController = async (req, res, next) => {
    try {
        const dsm = await DeliverStatusModel.findByIdAndUpdate(req.params.id, req.body)
        if (!dsm) {
            return res.status(400).json({ 'message': 'Id Not Found' })
        }
        const updated = await DeliverStatusModel.find({ _id: req.params.id })
        return res.status(200).json({ 'message': 'Deliver Status Updated Successfully', data: { prior: dsm, new: updated } })
    } catch (error) {
        next(error)
    }
}

const deleteDeliverStatusController = async (req, res, next) => {
    try {
        const ids = req.params.ids.split("+")
        let dsm = await Promise.all(ids.map(async e => {
            const temp = await DeliverStatusModel.deleteMany({ _id: e })
            if (temp.deletedCount>0) {
                const logger = Logger("DeleteLog/DeliverStatus", "dsdel")
                logger.info(`${e} was deleted`)
                return temp
            } else {
                return null
            }
        }))

        dsm = dsm.filter(e => e != null)

        if (dsm.length <= 0) {
            return res.status(400).json({ message: "Id Not Found" })
        }

        return res.status(200).json({ message: "Deleted Successfully" })
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