const DeliverPurchaseOrderModel = require('../../../models/delivery/po.model')
const { Logger } = require("../../../util/logger");

const getAllDeliverPurchaseOrderController = async (req, res, next) => {
    try {
        const ret = await DeliverPurchaseOrderModel.find({});
        
        if (!ret.length) {
            return res.status(400).json({ message: "nothing to show" })
        }
        
        res.status(200).json(ret);
    } catch (error) {
        next(error)
    }
}

const getAllPagedDeliverPurchaseOrderController = async (req, res, next)=>{
    try {
        const page = req.params.page;
        const pages = req.params.pages;

        const found = await DeliverPurchaseOrderModel.find({}).skip((page-1)*pages).limit(pages);

        if(!found.length){
            return res.status(400).json({ message: "nothing to show"})
        }
        
        res.status(200).json(found);
    } catch (error) {
        next(error)
    }
}

const getDeliverPurchaseOrderController = async (req, res, next) => {
    try {
        const id = req.params.id;
        const ret = await DeliverPurchaseOrderModel.findById(id);
        if (!ret) {
            return res.status(400).json({ message: "id not found" })
        }
        res.status(200).json(ret);
    } catch (error) {
        next(error)
    }
}

const createDeliverPurchaseOrderController = async (req, res, next) => {
    try {
        const body = req.body;
        const dm = await DeliverPurchaseOrderModel.create(body);
        const ret = await dm.save();
        res.status(200).json({ message: "Created Successfully", data: ret });
    } catch (error) {
        next(error)
    }
}

const updateDeliverPurchaseOrderController = async (req, res, next) => {
    try {
        const id = req.params.id
        const body = req.body
        const dmid = await DeliverPurchaseOrderModel.findByIdAndUpdate(id, body)

        if (!dmid) {
            return res.status(400).json({ message: "not found" })
        }

        return res.status(200).json({ message: "Updated Successfully", data: dmid });
    } catch (error) {
        next(error)
    }
}

const deleteDeliverPurchaseOrderController = async (req, res, next) => {
    try {
        const params = req.params.ids.split("+")

        let ret = await Promise.all(params.map(async element => {
            const dmid = await DeliverPurchaseOrderModel.deleteMany({ _id: element })
            if (dmid.deletedCount > 0) {
                logger = Logger("DeleteLog/DeleteDeliver", "del")
                logger.info(`${element} was deleted`)
                return element
            } else {
                return null;
            }
        }));
        
        ret = ret.filter(d => d != null)

        if (!ret || ret.length <= 0) {
            return res.status(400).json({
                message: "id not found"
            });
        }

        return res.status(200).json({ message: "Deleted Successfully" });
    } catch (error) {
        next(error)
    }
}

module.exports = {
    getAllDeliverPurchaseOrderController,
    getAllPagedDeliverPurchaseOrderController,
    getDeliverPurchaseOrderController,
    createDeliverPurchaseOrderController,
    updateDeliverPurchaseOrderController,
    deleteDeliverPurchaseOrderController
}