import React from 'react';
import BuildHistoryTemplate from './BuildHistoryTemplate';
import { useSelector } from 'react-redux';
import useActions from '../../../../hooks/useActions';
import { actions } from '../../../../store/buildHistory/buildHistorySlice';
import { 
  visibleCommitListSelector,  
  isFullVisibleCommitListSelector
} from '../../../../store/buildHistory/buildHistorySelectors';

export default function BuildHistory() {

  const visibleCommitList = useSelector(visibleCommitListSelector);
  const isFullVisibleCommitList = useSelector(isFullVisibleCommitListSelector);
  const { incrementVisibleCommitCount, addCommit } = useActions(actions);

  return (
    <BuildHistoryTemplate 
      commitList={visibleCommitList} 
      showMoreCommits={incrementVisibleCommitCount}  
      isNoMoreCommits={isFullVisibleCommitList}
      addNewCommit={addCommit}
    />
  )
}