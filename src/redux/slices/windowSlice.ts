import { createSlice, SliceCaseReducers } from '@reduxjs/toolkit';

type ModalType = {
  isOpen: boolean;
};

type WindowType = {
  modal: ModalType;
};

const initialState: WindowType = {
  modal: {
    isOpen: false,
  },
};

const windowSlice = createSlice<WindowType, SliceCaseReducers<WindowType>>({
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

export const isModalOpenSelector = (state) => state.window.modal.isOpen;

export const { openModal, closeModal } = windowSlice.actions;
export default windowSlice.reducer;
