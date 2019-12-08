// export function mainReducer(state = {}, actions) {

//     switch (actions.type) {
//         default:
//             return state;
//     }


// }


// // step-1 ==================================
// var state = {}
// var obj = state; // {}

// obj = {
//     userlist: ["one"]
// }
// return obj; 


// // ===================================
// var state = {
//     userlist: ["one"]
// }
// var obj = state;
// obj = {
//     userlist: [...state.userlist, "two"]
// }
// return obj;
// // ===================================




// export function userReducer(state = {}, action) {
//     switch (action.type) {
//         case "ADD_USER":
//             return Object.assign({}, state, {
//                 userlist: state.userlist == undefined ? [action.userDetails] : [...state.userlist, action.userDetails]
//             })
//         default:
//             return state
//     }
// }


// // state['userList'] = state.userList == null ? [actions.userDetails] : [...state.userList, actions.userDetails];

// // if(state.userList == null){
// //     state['userList'] = [actions.userDetails];
// // }else{
// //     state['userList'] = state.userList.push(userDetails);
// // }