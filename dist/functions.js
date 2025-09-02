var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var responseData = {
    id: 1,
    name: "Service CD",
    charge: "Developer",
    number: 10,
};
function handleResponse(_a) {
    var number = _a.number, other = __rest(_a, ["number"]);
    console.warn({ other: other });
    return number;
}
handleResponse(responseData);
