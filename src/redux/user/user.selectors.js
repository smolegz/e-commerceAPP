import { createSelector } from "reselect";
import userReducer from "./user.reducer";

const selectUser = (state) => state.userReducerState;

export const selectCurrentUser = createSelector(
	[selectUser],
	(userReducerState) => userReducerState.currentUser
);
