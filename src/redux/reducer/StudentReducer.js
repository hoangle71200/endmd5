export const studentReducer = (students = [], action) => {
    switch (action.type) {
        case "ADD_STUDENT":

            return [...students, action.payload];
        case "REMOVE_STUDENT":
    //
        case "REMOVE_ALL_STUDENT":
    //
        case "GET_ALL_STUDENT" :
            return action.payload;
        default :
            return students;

    }
}