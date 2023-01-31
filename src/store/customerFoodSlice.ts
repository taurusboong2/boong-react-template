import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type Customer = {
  id: string;
  name: string;
  food: string[];
};

type AddFoodToCustomerPayload = {
  food: string;
  id: string;
};

interface CustomerFoodState {
  value: Customer[];
}

const initialState: CustomerFoodState = {
  value: [],
};

export const customerFoodSlice = createSlice({
  name: 'customerFood',
  initialState,
  reducers: {
    addCustomer: (state, action: PayloadAction<Customer>) => {
      state.value.push(action.payload);
    },
    addFood: (state, action: PayloadAction<AddFoodToCustomerPayload>) => {
      state.value.forEach(customer => {
        if (customer.id === action.payload.id) {
          customer.food.push(action.payload.food);
        }
      });
    },
  },
});

export const { addCustomer, addFood } = customerFoodSlice.actions;

export default customerFoodSlice.reducer;
