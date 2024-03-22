import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchCountApi } from "@/server/counter";

export const fetchCount = createAsyncThunk("counter/fetchCount", async () => {
  const counter = await fetchCountApi();
  return counter;
});

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
    status: "idle",
    error: null,
  },
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchCount.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchCount.fulfilled, (state, action) => {
        state.status = "succeeded";
        // Add any fetched posts to the array
        state.value = action.payload;
      })
      .addCase(fetchCount.rejected, (state, action) => {
        state.status = "failed";
      });
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
