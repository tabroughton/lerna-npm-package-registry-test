import {
    User,
    helperFunction
} from '@tabroughton/lib'

export const invoke = async (): Promise<User> => {

    let user: User = await helperFunction();
    let foo = "foo";
    console.log(user);

    user.id = "1";
    user.name = "ben";

    console.log(user);

    return user;
}

invoke();
