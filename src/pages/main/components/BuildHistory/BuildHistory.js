import React from 'react';
import BuildHistoryTemplate from './BuildHistoryTemplate';
import { useSelector } from 'react-redux';
import useActions from '../../../../hooks/useActions';
import { actions } from '../../../../store/buildHistory/buildHistorySlice';
import { 
  visibleCommitListSelector,  
  isFullVisibleCommitListSelector,
  commitListIsLoadingSelector,
} from '../../../../store/buildHistory/buildHistorySelectors';

export default function BuildHistory() {

  const visibleCommitList = useSelector(visibleCommitListSelector);
  const isFullVisibleCommitList = useSelector(isFullVisibleCommitListSelector);
  const commitListIsLoading = useSelector(commitListIsLoadingSelector);
  const { incrementVisibleCommitCount, addCommit, setPopupIsOpen } = useActions(actions);

  return (
    <BuildHistoryTemplate 
      commitList={visibleCommitList} 
      showMoreCommits={incrementVisibleCommitCount}  
      commitListIsLoading={commitListIsLoading}
      isNoMoreCommits={isFullVisibleCommitList}
      addNewCommit={addCommit}
      setPopupIsOpen={setPopupIsOpen}
    />
  )
}