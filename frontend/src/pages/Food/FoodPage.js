import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Price from '../../components/Price/Price';
import Tags from '../../components/Tags/Tags';
import { getById } from '../../services/foodService';
import classes from './foodPage.module.css';
import { useCart } from '../../hooks/useCart';

export default function FoodPage() {
  const [food, setFood] = useState({});
  const { id } = useParams();
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const handleAddToCart = () => {
    addToCart(food);
    navigate('/cart');
  };


  useEffect(() => {
    getById(id).then(setFood);
  }, [id]);

  if (!food) {
    return <div>Food Not Found! <a href="/">Back To Homepage</a></div>;
  }

  return (
    <div className={classes.container}>
      <img
        className={classes.image}
        src={`${food.imageUrl}`}
        alt={food.name}
      />

      <div className={classes.details}>
        <div className={classes.header}>
          <span className={classes.name}>{food.name}</span>
          <span
            className={`${classes.favorite} ${
              food.favorite ? '' : classes.not
            }`}
          >
            ❤
          </span>
        </div>

        <div className={classes.origins}>
          {food.origins?.map(origin => (
            <span key={origin}>{origin}</span>
          ))}
        </div>

        <div className={classes.tags}>
          {food.tags && (
            <Tags
              tags={food.tags.map(tag => ({ name: tag }))}
              forFoodPage={true}
            />
          )}
        </div>

        <div className={classes.cook_time}>
          <span>
            Time to cook about <strong>{food.cookTime}</strong> minutes
          </span>
        </div>

        <div className={classes.price}>
          <Price price={food.price} />
        </div>

        <button onClick={handleAddToCart}>Сагсанд хийх</button>
      </div>
    </div>
  );
}
