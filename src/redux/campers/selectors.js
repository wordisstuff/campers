import { createSelector } from '@reduxjs/toolkit';
import { selectorFilter } from '../filter/selectors';

export const selectSelectedCamper = state => {
    return state.campers.selectedCamper;
};

export const selectCampers = state => {
    return state.campers.items;
};
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
