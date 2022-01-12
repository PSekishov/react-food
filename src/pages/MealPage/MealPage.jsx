import React, { useEffect, useState } from 'react';
import './mealPage.css';

import { useParams, useNavigate } from 'react-router-dom';

import { getMealById } from '../../api';
import Preloader from '../../components/Preloader';


const MealPage = () => {

  const [mails, setMeals] = useState({});

  const { id } = useParams();

  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  useEffect(() => {
    getMealById(id).then(data => setMeals(data.meals[0]));
  }, [id]);

  return (

    <div className="container">
      <div className="row">
        <div className="col-md-12">
          
          {
            !mails.idMeal ?
              <Preloader /> : 
              (
                <>
                <button onClick={goBack} type="button" className="btn btn-light">Go To Back</button>
                <hr />
                <h4>Page Meal ID:&nbsp;{id}</h4>
                </>
              )
              
          }

        </div>
      </div>
    </div>


  );
};

export default MealPage;
