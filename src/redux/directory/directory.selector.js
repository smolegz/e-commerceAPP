import { createSelector } from "reselect";

const selectDirectory = (state) => state.directoryReducer;

export const selectSections = createSelector(
	[selectDirectory],
	(directoryReducer) => directoryReducer.sections
);
