import React from 'react';
import FormTemplate from './FormTemplate';
import useActions from '../../../hooks/useActions';
import { actions } from '../../../store/settings/settingsSlice';

export default function Form() {

  const { setSettings } = useActions(actions);

  return <FormTemplate setSettings={setSettings} />
}