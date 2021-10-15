import React from 'react';
import { useSelector } from 'react-redux';
import useActions from '../../../../../../hooks/useActions';
import PopupNewBuildTemplate from './PopupNewBuildTemplate';
import { actions } from '../../../../../../store/buildHistory/buildHistorySlice';
import { 
  addCommitIsLoadingSelector,
  popupIsOpenSelector
} from '../../../../../../store/buildHistory/buildHistorySelectors';

export default function PopupNewBuild() {

  const addCommitIsLoading = useSelector(addCommitIsLoadingSelector);
  const popupIsOpen = useSelector(popupIsOpenSelector);
  const { addCommit, setPopupIsOpen } = useActions(actions);

  return (
    <PopupNewBuildTemplate 
      addCommit={addCommit} 
      addCommitIsLoading={addCommitIsLoading} 
      setPopupIsOpen={setPopupIsOpen}
      isOpen={popupIsOpen}
    />
  );
}