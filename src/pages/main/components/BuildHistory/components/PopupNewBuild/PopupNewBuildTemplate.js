import React, { useEffect, useRef } from 'react';
import Popup from '../../../../../../components/Popup/Popup';
import Input from '../../../../../../components/Input/Input';
import useInput from '../../../../../../hooks/useInput';
import useMedia from '../../../../../../hooks/useMedia';
import Button from '../../../../../../components/Button/Button';
import Spacer from '../../../../../../components/Spacer/Spacer';
import styles from './PopupNewBuild.module.css';
import { generateStatus } from '../../../../../../utils/utils';

export default function PopupNewBuildTemplate({
  isOpen,
  setPopupIsOpen,
  addCommit,
  addCommitIsLoading,
}) {
  const inputRef = useRef();
  const [commitHash, setCommitHash, clearCommitHash, isError, setIsError] =
    useInput('');

  useEffect(() => {
    if (isOpen) {
      clearCommitHash();
    }
  }, [isOpen, clearCommitHash]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const isMobile = useMedia('(max-width: 520px)');

  const submitHandler = (e) => {
    e.preventDefault();

    if (commitHash.length === 0) {
      setIsError(true);
      return;
    }

    addCommit({
      status: generateStatus(),
      commitMessage: 'commit message',
      commitHash,
      userName: 'rus',
      branchName: 'master',
      date: Date.now(),
      start: Date.now(),
      end: Date.now() + 60 * 40 * 1000,
    })
  };

  const changeHandler = (value) => {
    setIsError(false);
    setCommitHash(value);
  };

  const closePopup = () => {
    setPopupIsOpen(false);
  }

  return (
    <Popup isOpen={isOpen} closePopup={closePopup} width={485} height={188}>
      <form onSubmit={submitHandler} className={styles.wrapper}>
        <h3 className={styles.title}>New build</h3>
        <p className={styles.caption}>
          Enter the commit hash which you want to build.
        </p>
        <Input
          isError={isError}
          placeholder="Commit hash"
          value={commitHash}
          changeHandler={changeHandler}
          clearHandler={clearCommitHash}
          name="commitHash"
          width={!isMobile && 446}
          ref={inputRef}
        />
        <div className={styles.buttonContainer}>
          <Button
            isFullWidth={isMobile}
            type="submit"
            disabled={addCommitIsLoading}
            color="primary"
          >
            Run build
          </Button>
          <Spacer width={10} height={10} />
          <Button
            isFullWidth={isMobile}
            clickHandler={closePopup}
            disabled={addCommitIsLoading}
            color="secondary"
          >
            Cancel
          </Button>
        </div>
      </form>
    </Popup>
  );
}
