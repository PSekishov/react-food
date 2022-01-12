import React, { useEffect, useState } from 'react';
import './singlePage.css';

import { useParams, useNavigate } from 'react-router-dom';

import { getMealById } from '../../api';
import Preloader from '../../components/Preloader';

const SinglePage = () => {

  const [recipe, setRecipe] = useState({});

  const { id } = useParams();

  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  useEffect(() => {
    getMealById(id).then(data => setRecipe(data.meals[0]));
  }, [id]);



  return (

    <div className="container">
      <div className="row">
        <div className="col-md-12">

          {
            !recipe.idMeal ?
              <Preloader /> :
              (
                <>
                  <button onClick={goBack} type="button" className="btn btn-light">Go To Back</button>
                  <hr />
                  <img src={recipe.strMealThumb} alt={recipe.strMeal} title={recipe.strMeal} />
                  <h2>{recipe.strMeal}</h2>
                  <h5>{recipe.strTags}</h5>
                  <h3>Category: {recipe.strCategory}</h3>
                  {recipe.strArea ? <h6>Area: {recipe.strArea}</h6> : null}
                  <p>{recipe.strInstructions}</p>

                  <table class="table table-hover">
                    <thead>
                      <tr>
                        <th scope="col">Ingredient</th>
                        <th scope="col">Measure</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        Object.keys(recipe).map(key => {
                          if (key.includes('Ingredient') && recipe[key]) {
                            return (
                              <tr key={key}>
                                <td>{recipe[key]}</td>
                                <td>
                                  {
                                    recipe[`strMeasure${key.slice(13)}`]
                                  }
                                  </td>
                              </tr>
                            )
                          };
                          return null;
                        })
                      }


                    </tbody>
                  </table>

                  {recipe.strYoutube ? <iframe style={{ width: '100%', height: 600 }} src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(-11)}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> : null}

                </>
              )

          }

        </div>
      </div>
    </div>
  );
};

export default SinglePage;
