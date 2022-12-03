import {UserType} from '../HW8'



type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: Array<UserType>, action: ActionType): Array<UserType> => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            // const copyState = [...state]
            if (action.payload === 'up') {
                return [...state].sort((a, b) => a.name > b.name ? 1 : -1)
            }
            return [...state].sort((a, b) => a.name < b.name ? 1 : -1) // need to fix
        }
        case 'check': {

            return [...state].filter((item) => item.age > action.payload) // need to fix
        }
        default:
            return state
    }
}
