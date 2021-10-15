import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { asyncRequest } from '../../utils/utils';
import { initialCommitList } from './mocks/mocks';

const initialState = {
  commitList: initialCommitList,
  commitListIsLoading: false,
  visibleCommitCount: 3,
  addCommitIsLoading: false,
  popupIsOpen: false,
}

const addCommit = createAsyncThunk(
  'buildHistory/addCommit', 
  async (commit) => {
    await asyncRequest(false);
    return commit;
  }
)

const incrementVisibleCommitCount = createAsyncThunk(
  'buildHistory/incrementVisibleCommitCount',
  async () => {
    await asyncRequest(false);
    return {};
  }
)

const asyncActions = {
  addCommit,
  incrementVisibleCommitCount,
}

const defaultCardIncrement = 3;

const slice = createSlice({
  name: 'buildHistory',
  initialState,
  reducers: {
    setPopupIsOpen(state, { payload }) {
      state.popupIsOpen = payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(addCommit.pending, (state) => {
        state.addCommitIsLoading = true;
      })
      .addCase(addCommit.fulfilled, (state, { payload }) => {
        state.addCommitIsLoading = false;
        const { commitList } = state;
        const lastCommitNumber = Math.max(...commitList.map(({ commitNumber }) => commitNumber))
        state.commitList.unshift({
          ...payload,
          commitNumber: lastCommitNumber + 1,
        });
        state.popupIsOpen = false;
      })
      .addCase(incrementVisibleCommitCount.pending, (state) => {
        state.commitListIsLoading = true;
      })
      .addCase(incrementVisibleCommitCount.fulfilled, (state) => {
        state.commitListIsLoading = false;
        const newCommitCount = 
          Math.min(state.visibleCommitCount + defaultCardIncrement, 
            state.commitList.length);
        state.visibleCommitCount = newCommitCount;
      })
  }
})

export const actions = {
  ...slice.actions,
  ...asyncActions,
};

export default slice.reducer;