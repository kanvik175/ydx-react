import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  repository: '',
  command: '',
  branch: '',
  syncPeriod: '',
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
  }
})

export const actions = {
  ...slice.actions
};

export default slice.reducer;