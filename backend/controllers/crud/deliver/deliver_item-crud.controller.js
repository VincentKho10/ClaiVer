const DeliverItemModel = require("../../../models/delivery/deliver_item.model");
const { Logger } = require("../../../util/logger");

const createDeliverItemController = async (req, res, next) => {
  try {
    const dim = new DeliverItemModel(req.body);
    await dim.save();
    return res.status(200).json({
      message: `Deliver Item Created Successfully`,
      data: dim,
    });
  } catch (error) {
    next(error);
  }
};

const getAllDeliverItemController = async (req, res, next) => {
  try {
    const dim = await DeliverItemModel.find({});
    res.status(200).json(dim);
  } catch (error) {
    next(error);
  }
};

const getDeliverItemController = async (req, res, next) => {
  try {
    const id = req.params.id;
    const dim = await DeliverItemModel.find({ _id: id });
    if (dim.length<=0){
      return res.status(404).json({message: "id not found"});
    }
    res.status(200).json(dim);
  } catch (error) {
    next(error);
  }
};

const updateDeliverItemController = async (req, res, next) => {
  try {
    const id = req.params.id;
    const cbody = req.body;
    const dim = await DeliverItemModel.findByIdAndUpdate(id, cbody);
    if (!dim) {
      return res.status(404).json({ message: "id not found" });
    }
    const updated = await DeliverItemModel.findById(id);
    return res.status(200).json({
      message: `Updated Successfully`,
      data: updated,
    });
  } catch (error) {
    next(error);
  }
};

const deleteDeliverItemController = async (req, res, next) => {
  try {
    const ids = req.params.ids.split("+");
    let ret = await Promise.all(ids.map( async element => {
      const dmid = await DeliverItemModel.deleteMany({_id: element})
      if(dmid.deletedCount > 0){
        const logger = Logger("DeleteLog/Deliver", "del")
        logger.info(`${element} was Deleted`)
        return element;
      }else{
        return null;
      }
    }))

    ret = ret.filter(e=>e!=null)
    
    if(!ret || ret.length<=0){
      return res.status(400).json({ message: "id not found" });
    }

    return res.status(200).json({
      message: `Deleted Successfully`,
    })
  } catch (error) {
    next(error)
  }
}

module.exports = {
  getDeliverItemController,
  getAllDeliverItemController,
  createDeliverItemController,
  updateDeliverItemController,
  deleteDeliverItemController,
};
