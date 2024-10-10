import { createSelector } from "@reduxjs/toolkit"
import { selectorFilter } from "../filters/selectors"

export const selectSelectedCamper = state => {
 return state.campers.selectedCamper
}

export const selectCampers = state => {
  return state.campers.items
}
export const selectFilteredCampers = createSelector(
  [selectCamperss, selectorFilter], (items, name) => {
    if (!name) {
      return items
    }
    return items.filter(user =>
    user.name.toLowerCase().includes(name.toLowerCase())
  )
   }

)