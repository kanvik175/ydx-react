import React, { useEffect } from 'react';
import Popup from '../../../../../../components/Popup/Popup';
import Input from '../../../../../../components/Input/Input';
import useInput from '../../../../../../hooks/useInput';
import useMedia from '../../../../../../hooks/useMedia';
import Button from '../../../../../../components/Button/Button';
import Spacer from '../../../../../../components/Spacer/Spacer';
import styles from './PopupNewBuild.module.css';

export default function PopupNewBuild({ isOpen, closePopup }) {

  const [commitHash, setCommitHash, clearCommitHash] = useInput('');

  useEffect(() => {
    if (isOpen) {
      clearCommitHash();
    }
  }, [isOpen, clearCommitHash])

  const isMobile = useMedia('(max-width: 520px)');

  const submitHandler = (e) => {
    e.preventDefault();

    closePopup();
  }

  return (
    <Popup isOpen={isOpen} width={485} height={188}>
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
        />
        <div className={styles.buttonContainer}>
          <Button 
            isFullWidth={isMobile} 
            type='submit'
            color='primary'>
              Run build
          </Button>
          <Spacer width={10} height={10} />
          <Button 
            isFullWidth={isMobile} 
            clickHandler={closePopup} 
            color='secondary'>
              Cancel
          </Button>
        </div>
      </form>
    </Popup>
  )
}