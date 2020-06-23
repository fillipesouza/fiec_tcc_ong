import { SET_ONGS } from "./ongs_actions";

const initialState = {
    ongList : []
}

export default (state = initialState, action) => {
    switch(action.type){
        case SET_ONGS:
            const ongData = action.ongData;
            return { ...state, ongList: ongData };
    }
    return state;
};