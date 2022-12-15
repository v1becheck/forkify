import 'regenerator-runtime/runtime';
import { API_URL } from './config';
import { getJson } from './helpers';

export const state = {
  recipe: {},
};

export const loadRecipe = async function (id) {
  try {
    const data = await getJson(`${API_URL}/${id}`);

    const { recipe } = data.data;
    state.recipe = {
      title: recipe.title,
      id: recipe.id,
      cookingTime: recipe.cooking_time,
      imageUrl: recipe.image_url,
      ingredients: recipe.ingredients,
      publisher: recipe.publisher,
      servings: recipe.servings,
      sourceUrl: recipe.source_url,
    };
    console.log(state.recipe);
  } catch (err) {
    console.error(`${err} 🤯🤯🤯`);
  }
};
