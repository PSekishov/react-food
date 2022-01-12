import {API_URL} from './cinfig';

const getMealById = async (mealId) => {
  const responce = await fetch(`${API_URL}/lookup.php?i=${mealId}`)
  return await responce.json();
};

const getAllCategories = async () => {
  const responce = await fetch(`${API_URL}/categories.php`)
  return await responce.json();
};

const getFilterCategory = async (catName) => {
  const responce = await fetch(`${API_URL}/filter.php?c=${catName}`)
  return await responce.json();
};

export{
  getMealById,
  getAllCategories,
  getFilterCategory,
}