import { createSelector } from '@reduxjs/toolkit';

export const commitListSelector = (state) => state.buildHistory.commitList;
export const visibleCommitCountSelector = (state) => state.buildHistory.visibleCommitCount;

export const visibleCommitListSelector = createSelector(
  commitListSelector, visibleCommitCountSelector, (commitList, visibleCommitCount) => {
    return commitList.slice(0, visibleCommitCount);
  }
);

export const isFullVisibleCommitListSelector = createSelector(
  commitListSelector, visibleCommitCountSelector, (commitList, visibleCommitCount) => {
    return commitList.length === visibleCommitCount;
  }
)