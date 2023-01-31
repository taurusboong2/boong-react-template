import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { addFood } from '@/store/customerFoodSlice';

interface ICustomerCard {
  customer: {
    id: string;
    name: string;
    food: string[];
  };
}

const CustomerFoodCard = ({ customer }: ICustomerCard) => {
  const { id, name, food } = customer;

  const [customerFoodInput, setCustomerFoodInput] = useState('');
  const dispatch = useDispatch();

  const handleAddFoodToCustomer = () => {
    if (!customerFoodInput) return;
    dispatch(
      addFood({
        id,
        food: customerFoodInput,
      })
    );
    setCustomerFoodInput('');
  };

  const handleAddOnEnter = event => {
    if (event.keyCode === 13) {
      handleAddFoodToCustomer();
    }
  };

  return (
    <div className="customer-food-card-container">
      <p>{name}</p>
      <div className="customer-foods-container">
        <div className="customer-food">
          {food.map((food, index) => {
            return <p key={index}>{food}</p>;
          })}
        </div>

        <div className="customer-food-input-container">
          <input
            value={customerFoodInput}
            onChange={e => setCustomerFoodInput(e.target.value)}
            onKeyDown={handleAddOnEnter}
          />
          <button onClick={handleAddFoodToCustomer}>음식 추가</button>
        </div>
      </div>
    </div>
  );
};

export default CustomerFoodCard;
