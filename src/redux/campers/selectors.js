import { createSelector } from '@reduxjs/toolkit';
import { selectorFilter } from '../filter/selectors';

export const selectSelectedCamper = state => state.campers.selectedCamper;

export const selectQuery = state => state.campers.query;
export const selectCampType = state => state.campers.campType;

export const selectCampers = state => state.campers.items;

export const selectFilteredCampers = createSelector(
    [selectCampers, selectorFilter],
    (items, location) => {
        if (!location) {
            return items;
        }
        return items.filter(camp =>
            camp.location.toLowerCase().includes(location.toLowerCase()),
        );
    },
);
