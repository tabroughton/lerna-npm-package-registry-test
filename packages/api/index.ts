import {
    User,
    helperFunction
} from '@ben-poole/lib'

export const invoke = async (): Promise<User> => {
    
    let user: User = await helperFunction();

    console.log(user);
    
    user.id = "1";
    user.name = "ben";

    console.log(user);

    return user;
}

invoke();