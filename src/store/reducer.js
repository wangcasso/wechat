import {combineReducers} from "redux"
import weChatReducer from '../pages/wechat/root/store'
import addressListReducer from '../pages/addressList/root/store'
import discoveryReducer from '../pages/discovery/root/store'
import meReducer from '../pages/me/root/store'

export default combineReducers({
    wechat: weChatReducer,
    addressList: addressListReducer,
    discovery: discoveryReducer,
    me: meReducer,
});