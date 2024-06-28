import { createSlice } from '@reduxjs/toolkit';

type WindowSliceInitialStateType = {
  modal: {
    isOpen: boolean;
  };
};

const initialState: WindowSliceInitialStateType = {
  modal: {
    isOpen: false,
  },
};

const windowSlice = createSlice({
  name: 'window',
  initialState,
  reducers: {
    openModal: (state) => {
      state.modal.isOpen = true;
    },
    closeModal: (state) => {
      state.modal.isOpen = false;
    },
  },
});

export const { openModal, closeModal } = windowSlice.actions;
export default windowSlice.reducer;
