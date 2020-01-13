import {
    User,
    helperFunction
} from '@lerna-test/lib'

export const invoke = async (): Promise<User> => {
    
    let user: User = await helperFunction();

    console.log(user);
    
    user.id = "1";
    user.name = "ben";

    return user;
}

invoke();