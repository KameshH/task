import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Competition } from '../../screens/entities';
import { fetchCompetitionsApi } from '../../services/ApiServices/competitions';

type CompetitionsState = {
  data: Competition[];
  isLoading: boolean;
  isError: boolean;
  error: string | null;
};

const initialState: CompetitionsState = {
  data: [],
  isLoading: false,
  isError: false,
  error: null,
};

export const fetchCompetitionsThunk = createAsyncThunk(
  'competitions/fetchCompetitions',
  async (_, thunkAPI) => {
    try {
      const data = await fetchCompetitionsApi();
      console.log('data', data);
      return data.competitions || [];
    } catch (error: any) {
      return thunkAPI.rejectWithValue(
        error.message || 'Failed to fetch competitions',
      );
    }
  },
);

const competitionsSlice = createSlice({
  name: 'competitions',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchCompetitionsThunk.pending, state => {
        state.isLoading = true;
        state.isError = false;
        state.error = null;
      })
      .addCase(fetchCompetitionsThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchCompetitionsThunk.rejected, (state, action: any) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.payload;
      });
  },
});

export default competitionsSlice.reducer;
