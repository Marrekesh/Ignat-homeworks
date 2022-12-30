
type stateType = {
    themeId: number
}

type actionType = {
    type: 'SET_THEME_ID'
    id: number
}

const initState: stateType = {
    themeId: 1,
}



export const themeReducer = (state: stateType = initState, action: actionType): stateType => { // fix any
    switch (action.type) {
        // дописать
        case "SET_THEME_ID":
           return {...state, themeId: action.id}
        default:
            return state
    }
}

export const changeThemeId = (id: number): actionType => ({ type: 'SET_THEME_ID', id }) // fix any
