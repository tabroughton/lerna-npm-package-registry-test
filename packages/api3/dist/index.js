"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.invoke = void 0;
const lib_1 = require("@tabroughton/lib");
const invoke = async () => {
    let user = await (0, lib_1.helperFunction)();
    console.log(user);
    user.id = "1";
    user.name = "ben";
    console.log(user);
    return user;
};
exports.invoke = invoke;
(0, exports.invoke)();
//# sourceMappingURL=index.js.map