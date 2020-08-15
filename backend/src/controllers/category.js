const categoryService = require('../services/category')

const getAllCategory = async (req, res) => {
  const { data, metadata } = await categoryService.getAllCategory() 
  res.send({
    status: 1,
    data,
    metadata,
  })
}
const getCategoryById = async (req, res) => {
  const { id } = req.params;
  const data = await categoryService.getCategoryById(id)
  res.send({
      status: 1,
      data
    })
}
const createCategory = async (req, res) => {
  await categoryService.createCategory(req.body)
  res.send({
    status: 1,
  })
}
const updateCategory = async (req, res) => {
  const { id } = req.params;
  await categoryService.updateCategoryById(id, req.body)
  res.send({
    status: 1,// true - 1, false 0
  })
}
const deleteCategory = async (req, res) => {
  const { id } = req.params;
  await categoryService.deleteCategoryById(id)
  res.send({
    status: 1,// true - 1, false 0
  })
}

module.exports = {
  getAllCategory,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory
}