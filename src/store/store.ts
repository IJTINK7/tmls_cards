import {combineReducers, applyMiddleware, createStore } from 'redux'
import {ThunkDispatch, ThunkAction, thunk} from 'redux-thunk'
import {useDispatch} from "react-redux";
import {cardReducer, CardsActionsType} from "./card-reducer.ts";
import {LoadingActionsType, loadingReducer} from "./loading-reducer.ts";
import {CardActivityActionsType, setActiveCardReducer} from "./activate-card-reducer.ts";
import {ChangeSearchTitleActionsType, changeSearchTitleReducer} from "./change-search-title.ts";

const rootReducer = combineReducers({
	cards: cardReducer,
	loading: loadingReducer,
	activeCardId: setActiveCardReducer,
	searchTitle: changeSearchTitleReducer
});

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
export const store = createStore(rootReducer, applyMiddleware(thunk))

export type AppRootStateType = ReturnType<typeof rootReducer>
export type ActionsType =   CardsActionsType | LoadingActionsType | CardActivityActionsType | ChangeSearchTitleActionsType
export type ThunkActionType = ThunkAction<void, AppRootStateType, unknown, ActionsType>;
export type AppThunkDispatch = ThunkDispatch<AppRootStateType, unknown, ActionsType>;



export const useAppDispatch = () => useDispatch<AppThunkDispatch>();


