const initialState = {
    employee: '',
    hr: '',
    login: '',
    open: false,
    assets: []
}

export const reducerFunc = (state=initialState, action) => {
    switch(action.type){
        case 'SHOW_HR':
            return{
                hr: "HR_Page"
            }
        case 'SHOW_EMPLOYEE':
            return{
                employee:"Employee_Page"
            }
        case 'SHOW_LOGIN':
            return{
                login:"Login_Page"
            }
        case 'TOGGLE_MODAL':
            return{
                ...state,
                open:!state.open
            }
        case 'ASSET_DATA_CALL':
            return{
                ...state,
                assets:action.assets

            }
        default:
            return state
    }
}