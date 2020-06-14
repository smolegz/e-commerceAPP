import { createSelector } from "reselect";

const shopSelector = (state) => state.shopReducer;

export const collectionsSelector = createSelector(
	[shopSelector],
	(shopReducer) => shopReducer.collections
);

export const selectCollectionsOverview = createSelector(
	[collectionsSelector],
	(collections) =>
		collections
			? Object.keys(collections).map((collection) => collections[collection])
			: []
);

export const selectCollection = (collectionUrlParam) =>
	createSelector([collectionsSelector], (collections) =>
		collections ? collections[collectionUrlParam] : null
	);
