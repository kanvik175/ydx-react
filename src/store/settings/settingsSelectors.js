import { createSelector } from '@reduxjs/toolkit';

export const repositorySelector = (state) => state.settings.repository;
export const isSettingsAppliedSelector = createSelector(repositorySelector, 
  (repository) => {
    return !!repository;
  })