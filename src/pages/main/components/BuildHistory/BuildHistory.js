import React from 'react';
import BuildHistoryTemplate from './BuildHistoryTemplate';
import { useSelector } from 'react-redux';
import useActions from '../../../../hooks/useActions';
import { actions } from '../../../../store/buildHistory/buildHistorySlice';
import { 
  visibleCommitListSelector,  
  isFullVisibleCommitListSelector
} from '../../../../store/buildHistory/buildHistorySelectors';
import { repositorySelector } from '../../../../store/settings/settingsSelectors';

export default function BuildHistory() {

  const visibleCommitList = useSelector(visibleCommitListSelector);
  const isFullVisibleCommitList = useSelector(isFullVisibleCommitListSelector);
  const repository = useSelector(repositorySelector);
  const { incrementVisibleCommitCount, addCommit } = useActions(actions);

  return (
    <BuildHistoryTemplate 
      commitList={visibleCommitList} 
      showMoreCommits={incrementVisibleCommitCount}  
      isNoMoreCommits={isFullVisibleCommitList}
      addNewCommit={addCommit}
      repositoryName={repository}
    />
  )
}