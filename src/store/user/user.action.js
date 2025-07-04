import { USER_ACTION_TYPES } from "./user.types";
import { createAction } from "../../utills/reducer/reducer.utils";

export const setCurrentUser = (user) => {
    return createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user);
}