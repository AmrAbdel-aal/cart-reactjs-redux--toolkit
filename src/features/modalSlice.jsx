import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isActiveModal: false,
};

const ModalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    showModal: (state) => {
      state.isActiveModal = true;
    },
    hideModal: (state) => {
      state.isActiveModal = false;
    },
  },
});

export const { showModal, hideModal } = ModalSlice.actions;

export default ModalSlice.reducer;
