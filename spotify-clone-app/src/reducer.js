export const initialState = {
    user: null,
    playlist: [],
    playing: false,
    item: null,
    token: "BQAW6FDvQxh_O64DJd9mS5Kqkqb7r2yuM3wjw2cywlP2zxizhn…2IkHRSrQt2kvO9UNFNLdcpjcVZPj6ebANAkCCGrACE2oPiqcO"
}

const reducer = (state, action) => {
    console.log(action);
    switch(action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user,
            }
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token,
            }
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists,
            }
        default:
            return state;
    }
}

export default reducer;