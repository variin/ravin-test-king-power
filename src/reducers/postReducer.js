const postReducer =(state = [], action) => {
    switch (action.type) {
        case 'ADD_POST':
            return state.concat([action.data]);
        case 'DELETE_POST':
            return state.filter((post) => post.id !== action.id);
        case 'EDIT_POST':
            return state.map((post) => post.id === action.id? {...post, editing: !post.editing}: post);
        case 'UPDATE':
            return state.map((post) => {
                if(post.id === action.id){
                    return {
                        ...post,
                        title: action.data.newTitle,
                        fname: action.data.newFname,
                        lname: action.data.newLname,
                        birthday: action.data.newBirthday,
                        nationality: action.data.newNationality,
                        citizenID: action.data.newCitizenID,
                        gender: action.data.newGender,
                        mobilePhone: action.data.newMobilePhone,
                        passportNo: action.data.newPassportNo,
                        expectedSalary: action.data.newExpectedSalary,
                        editing: !post.editing   
                    }
                }else return post;
            });
        default:
           return state;
    }
}

export default postReducer;