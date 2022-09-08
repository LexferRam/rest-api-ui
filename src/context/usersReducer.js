export const initialState = {
    usersLoaded: false,
    users: [],
    currentStepForm: 0,
    openDeleteUserDialog: false,
    openEditUserDialog: false,
    selectedUser: {},
    page: 0
}

const usersReducer = (state, action) => {

    const { type, payload } = action

    console.log(type)

    switch (type) {
        case 'GET_USERS':
            return { ...state, users: [...payload], usersLoaded: !state.usersLoaded }

        case 'RESET_USERS':
            return { ...state, users: [], usersLoaded: false }

        case 'SELECT_USER':
            const user = state.users.filter(user => user._id === payload)[0]
            console.log(user)
            return { ...state, selectedUser: { ...state.selectedUser, ...user } }

        case 'OPEN_DELETE_USER_DIALOG':
            return { ...state, openDeleteUserDialog: !state.openDeleteUserDialog }

        case 'CLOSE_DELETE_USER_DIALOG':
            return { ...state, openDeleteUserDialog: !state.openDeleteUserDialog }

        case 'OPEN_EDIT_USER_DIALOG':
            return { ...state, openEditUserDialog: !state.openEditUserDialog }

        case 'CLOSE_EDIT_USER_DIALOG':
            return { ...state, openEditUserDialog: !state.openEditUserDialog, selectedUser: {} }

        case 'NEXT_STEP_FORM':
            return { ...state, currentStepForm: state.currentStepForm + 1 }

        case 'RESET_STEP_FORM':
            return { ...state, currentStepForm: state.currentStepForm - 1 }

        case 'HANDLE_CHANGE_PAGE':
            return { ...state, page: payload }

        default:
            return state
    }

}

export default usersReducer;