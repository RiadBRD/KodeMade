// Tuple
let tuple;
tuple = [false, 20];
//Enum
const Roles = {
    JAVASCRIPT: 1,
    CSS: 2,
    REACT: 3,
};
console.log(Roles.JAVASCRIPT);
//Version avec Enum
var eRoles;
(function (eRoles) {
    eRoles[eRoles["JAVASCRIPT"] = 0] = "JAVASCRIPT";
    eRoles[eRoles["CSS"] = 1] = "CSS";
    eRoles[eRoles["REACT"] = 2] = "REACT";
})(eRoles || (eRoles = {}));
console.log(eRoles);
export {};
//# sourceMappingURL=script.js.map