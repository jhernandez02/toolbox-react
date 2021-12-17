export default (state = [], action = {}) => {
    switch (action.type) {
        case 'ADD_TEXT':
            return [action.value, ...state]
        case 'DEL_TEXT':
            return state.filter((item, index)=>index!=action.value)
        case 'DEL_ALL':
            return []
        default:
            return state
    }
}