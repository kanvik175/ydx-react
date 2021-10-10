import { createSlice } from '@reduxjs/toolkit';
import { initialCommitList } from './mocks/mocks';

const initialState = {
  commitList: initialCommitList,
  visibleCommitCount: 3,
}

const defaultCardIncrement = 3;

const slice = createSlice({
  name: 'buildHistory',
  initialState,
  reducers: {
    addCommit(state, { payload }) {
      const { commitList } = state;
      const lastCommitNumber = Math.max(...commitList.map(({ commitNumber }) => commitNumber))
      state.commitList.unshift({
        ...payload,
        commitNumber: lastCommitNumber + 1,
      });
    },
    incrementVisibleCommitCount(state) {
      const newCommitCount = 
        Math.min(state.visibleCommitCount + defaultCardIncrement, 
          state.commitList.length);
      state.visibleCommitCount = newCommitCount;
    },
  }
})

export const actions = {
  ...slice.actions
};

export default slice.reducer;