import React from 'react';
import FormTemplate from './FormTemplate';
import useActions from '../../../../hooks/useActions';
import { useSelector } from 'react-redux';
import { actions } from '../../../../store/settings/settingsSlice';
import { 
  isErrorSelector, 
  isLoadingSelector 
} from '../../../../store/settings/settingsSelectors';

export default function Form() {

  const { setSettings } = useActions(actions);
  const isError = useSelector(isErrorSelector);
  const isLoading = useSelector(isLoadingSelector);

  return (
    <FormTemplate 
      setSettings={setSettings} 
      isError={isError} 
      isLoading={isLoading}
    />
  )
}