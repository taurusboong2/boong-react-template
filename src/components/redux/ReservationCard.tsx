import React from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';

import { removeReservation } from '@/store/reservationSlice';
import { addCustomer } from '@/store/customerFoodSlice';

interface IResercationCard {
  name: string;
  index: number;
}

const ReservationCard = ({ name, index }: IResercationCard) => {
  const disPatch = useDispatch();

  return (
    <div
      onClick={() => {
        disPatch(removeReservation(index));
        disPatch(
          addCustomer({
            id: uuid(),
            name,
            food: [],
          })
        );
      }}
      className="reservation-card-container">
      {name}
    </div>
  );
};

export default ReservationCard;
