import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  prompt: "",
  result: "",
  loading: false,
};

const aiSlice = createSlice({
  name: "ai",
  initialState,
  reducers: {
    setPrompt: (state, action) => {
      state.prompt = action.payload;
    },
    setResult: (state, action) => {
      state.result = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    reset: () => initialState,
  },
});

export const { setPrompt, setResult, setLoading, reset } = aiSlice.actions;
export default aiSlice.reducer;
