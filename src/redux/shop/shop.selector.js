import { createSelector } from "reselect";
import shopReducer from "./shop.reducer";

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

export const selectIsCollectionFetching = createSelector(
	[shopSelector],
	(shopReducer) => shopReducer.isFetching
);

export const selectIsCollectionsLoaded = createSelector(
	[shopSelector],
	(shopReducer) => !!shopReducer.collections
);
