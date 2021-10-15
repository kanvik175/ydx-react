import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { asyncRequest } from '../../utils/utils';

const initialState = {
  data: {
    repository: '',
    command: '',
    branch: '',
    syncPeriod: '',
  },
  isLoading: false,
  isError: false,
}

const setSettings = createAsyncThunk(
  'settings/setSettings',
  async (settings) => {
    await asyncRequest();
    return settings;
  }
)

const asyncActions = {
  setSettings,
}

const slice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setSettings(state, { payload }) {
      const { repository, command, branch, syncPeriod } = payload;
      return {
        repository, 
        command,
        branch,
        syncPeriod
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(setSettings.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(setSettings.fulfilled, (state, { payload }) => {
        state.data = payload;
        state.isLoading = false;
        state.isError = false;
      })
      .addCase(setSettings.rejected, (state) => {
        state.isError = true;
        state.isLoading = false;
      })
  }
})

export const actions = {
  ...slice.actions,
  ...asyncActions,
};

export default slice.reducer;