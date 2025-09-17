const express = require("express");
const DeliverItemModel = require("../../../models/delivering/deliver_item.model");
const deliverModel = require("../../../models/delivering/deliver.model");

const createDeliveryController = async (req, res, next) => {
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

const getAllDeliveryController = async (req, res, next) => {
  try {
    const dim = await DeliverItemModel.find({});
    res.status(200).json(dim);
  } catch (error) {
    next(error);
  }
};

const getDeliveryController = async (req, res, next) => {
  try {
    const id = req.params.id;
    const dim = await DeliverItemModel.find({ _id: id });
    res.status(200).json(dim);
  } catch (error) {
    next(error);
  }
};

const updateDeliveryController = async (req, res, next) => {
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

module.exports = {
  createDeliveryController,
  updateDeliveryController,
  getDeliveryController,
  getAllDeliveryController,
};
