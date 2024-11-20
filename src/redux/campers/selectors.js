export const selectSelectedCamper = state => state.campers.selectedCamper;

export const selectQuery = state => state.campers.query;
export const selectCampType = state => state.campers.campType;

export const selectCampers = state => state.campers.items;
export const selectFavorite = state => state.campers.favorite;
export const selectLocation = state => state.campers.location;
export const selectLoading = state => state.campers.loading;
export const selectError = state => state.campers.error;
export const selectPagesArr = state => state.campers.pagesArr;
export const selectPageIdx = state => state.campers.pageIdx;
