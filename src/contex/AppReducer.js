export default (state, action) => {
    switch (action.type) {
        case "ADD_PEOPLE":
            return {
                ...state,
                openedPeople: [action.payload, ...state.openedPeople]
            };
        default:
            return state;
    }
}