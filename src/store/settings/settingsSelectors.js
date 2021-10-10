import { createSelector } from '@reduxjs/toolkit';

export const settingsSelector = (state) => state.settings;
export const isSettingsAppliedSelector = createSelector(settingsSelector, 
  (settings) => {
    return !!settings.repository;
  })