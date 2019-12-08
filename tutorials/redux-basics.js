// Cons:
// -----
// 1. state=> If value in state changes then the UI gets updated automatically.
// 2. but state is specific to class or component
// 3. We cannot get the value of state from another class

// Idea/Staergery:
// -----------------
// 4. Instead of storing varibale is "class state" we will store them in "global state"
// 5. To access global state we use REDUX

// Redux:
// -----------

// 1. store : It is a method which contains global state.


function testReducer(state = {}, actions) {
    // take the existing state change it and return new state

    switch (actions.type) {
        case "ADD_Name":

            return state['name'] = actions.name;
        case "DELETE_Name":

            return delete state['name'];
    }

    // if (actions.type === "ADD_Name){

    // }else if (actions.type == "DELETE_Name") {}
}


let store = createStore(testReducer);


var addAction = { type: "ADD_Name", "name": "pavan", email: "asdf" };
store.dispatch(addAction);



var addAction = { type: "ADD_Name", "name": "santosh", email: "asdf" };
store.dispatch(addAction);


var deleteName = { type: "DELETE_Name", "name": "santosh", email: "asdf" };
store.dispatch(deleteName);


function getActions(name) {
    actions = {
        addAction: {
            type: "ADD_Name",
            name: name
        },
        deleteAction: {
            type: "DELETE_Action"
        }
    };

    return actions;
}




store.dispatch(getActions("santosh").addAction)

