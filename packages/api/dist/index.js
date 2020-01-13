"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lib_1 = require("@ben-poole/lib");
exports.invoke = async () => {
    let user = await lib_1.helperFunction();
    console.log(user);
    user.id = "1";
    user.name = "ben";
    console.log(user);
    return user;
};
exports.invoke();
//# sourceMappingURL=index.js.map