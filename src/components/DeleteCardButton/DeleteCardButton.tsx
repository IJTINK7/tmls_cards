import "./DeleteCardButton.scss"
import React, {memo} from "react";
import trashIconPath from "../../assets/trash-icon.svg"
import {useAppDispatch} from "../../store/store.ts";
import {deleteCurrentCardActionCreator} from "../../reducers/card-reducer.ts";


type PropsType = {
	isCardActive: boolean
	cardId: string
}

export const DeleteCardButton: React.FC<PropsType> = memo(({isCardActive, cardId}) => {
	const dispatch = useAppDispatch()

	const deleteCurrentCardHandler = () => {
		dispatch(deleteCurrentCardActionCreator(cardId))
	}

	return isCardActive ? (
		<button className="deleteCardButton" onClick={deleteCurrentCardHandler}>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0,0,256,256" width="24px" height="24px">
    <g id="trash" fill="#d32b42" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt"
       stroke-linejoin="miter"
       stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="200"
       font-size="none" text-anchor="inherit" style="mix-blend-mode: normal">
        <g transform="scale(10.66667,10.66667)">
            <path d="M10,2l-1,1h-5v2h3h10h3v-2h-5l-1,-1zM5,7v13c0,1.1 0.9,2 2,2h10c1.1,0 2,-0.9 2,-2v-13z"></path>
        </g>
    </g>
</svg>
		</button>
	) : null
})
