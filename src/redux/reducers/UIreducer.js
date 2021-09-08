const initialState = {
    showSidebar: false,
    displayMethod: 'board'
}

const UIreducer = (state = initialState, action) => {
    switch(action.type) {
        case 'TOGGLE_SIDEBAR':
            console.log(action)
            return {...state, showSidebar: !state.showSidebar}
        case 'CHANGE_DISPLAY_METHOD':
            return {...state, displayMethod: action.payload}
        default:
            return state
    }
}

export default UIreducer;