import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { RootState } from '@/store';
import { ReservationCard } from '@/components/redux';
import { addReservation } from '@/store/reservationSlice';
import CustomerFoodCard from '@/components/redux/CustomerFoodCard';

const Reservations = () => {
  const dispatch = useDispatch();
  const [reservationNameInput, setReservationNameInput] = useState('');

  const reservations = useSelector((state: RootState) => state.reservation.value);

  const customerFoods = useSelector((state: RootState) => state.customerFood.value);

  const handleAddReservations = () => {
    if (!reservationNameInput) return;
    dispatch(addReservation(reservationNameInput));
    setReservationNameInput('');
  };

  const handleAddOnEnter = event => {
    if (event.keyCode === 13) {
      handleAddReservations();
    }
  };

  return (
    <div className="App">
      <div className="container">
        <div className="reservation-container">
          <div>
            <h5 className="reservation-header">Reservations</h5>
            <div className="reservation-cards-container">
              {reservations.map((name, index) => {
                return <ReservationCard key={index} index={index} name={name} />;
              })}
            </div>
          </div>
          <div className="reservation-input-container">
            <input
              value={reservationNameInput}
              onChange={e => setReservationNameInput(e.target.value)}
              onKeyDown={handleAddOnEnter}
            />
            <button onClick={handleAddReservations}>예약자 추가</button>
          </div>
        </div>
        <div className="customer-food-container">
          {customerFoods.map((customer, index) => {
            return <CustomerFoodCard key={index} customer={customer} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Reservations;
