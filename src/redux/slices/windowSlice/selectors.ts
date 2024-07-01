import { RootState } from '@redux/store';

export const isModalOpenSelector = (state: RootState) => state.window.modal.isOpen;
