import React, {useEffect, useState} from 'react';
import './categoryPage.css';

import Preloader from '../../components/Preloader';
import MealList from '../../components/MealList';

import { useParams } from 'react-router-dom';

import {getFilterCategory} from '../../api';

const CategoryPage = () => {

  const {name} = useParams();

  const [meals, setMeals] = useState([]);

  useEffect(()=>{
    getFilterCategory(name).then(data => setMeals(data.meals));
  },[name]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">


          {/* <h4>Category: {name}</h4> */}
          {
            !meals.length ? 
              <Preloader /> :
              <MealList meals={meals}/>
          }


        </div>
      </div>
    </div>



  );
};

export default CategoryPage;
