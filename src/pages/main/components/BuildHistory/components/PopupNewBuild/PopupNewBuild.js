import React, { useState, useEffect, useRef } from 'react';
import Popup from '../../../../../../components/Popup/Popup';
import Input from '../../../../../../components/Input/Input';
import useInput from '../../../../../../hooks/useInput';
import useMedia from '../../../../../../hooks/useMedia';
import Button from '../../../../../../components/Button/Button';
import Spacer from '../../../../../../components/Spacer/Spacer';
import styles from './PopupNewBuild.module.css';
import { asyncRequest } from '../../../../../../utils/utils';

export default function PopupNewBuild({ isOpen, closePopup, onSubmit }) {

  const [commitHash, setCommitHash, clearCommitHash] = useInput('');
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef();

  useEffect(() => {
    if (isOpen) {
      clearCommitHash();
    }
  }, [isOpen, clearCommitHash])

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen])

  const isMobile = useMedia('(max-width: 520px)');

  const submitHandler = (e) => {
    e.preventDefault();

    setIsLoading(true);

    asyncRequest(false)
      .then(() => {
        onSubmit(commitHash);
        setIsLoading(false);
        closePopup();
      })
      .catch(() => {
        closePopup();
      })
  }

  return (
    <Popup isOpen={isOpen} closePopup={closePopup} width={485} height={188}>
      <form onSubmit={submitHandler} className={styles.wrapper}>
        <h3 className={styles.title}>New build</h3>
        <p className={styles.caption}>Enter the commit hash which you want to build.</p>
        <Input 
          placeholder='Commit hash' 
          value={commitHash} 
          changeHandler={setCommitHash}
          clearHandler={clearCommitHash}
          name='commitHash'
          width={!isMobile && 446}
          ref={inputRef}
        />
        <div className={styles.buttonContainer}>
          <Button 
            isFullWidth={isMobile} 
            type='submit'
            disabled={isLoading}
            color='primary'>
              Run build
          </Button>
          <Spacer width={10} height={10} />
          <Button 
            isFullWidth={isMobile} 
            clickHandler={closePopup} 
            disabled={isLoading}
            color='secondary'>
              Cancel
          </Button>
        </div>
      </form>
    </Popup>
  )
}