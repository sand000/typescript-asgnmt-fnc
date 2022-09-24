// function
var getName = function (_a) {
    var firstname = _a.firstname, lastname = _a.lastname;
    if (lastname) {
        return firstname + " " + lastname;
    }
    else {
        return firstname;
    }
};
var PhoneBook = function (_a) {
    var pre = _a.pre, phones = _a.phones, addresses = _a.addresses, email = _a.email, firstname = _a.firstname, lastname = _a.lastname, middlename = _a.middlename;
    return { pre: "mr", phones: 1234435345, addresses: "fertgrre", email: "a@gmail.com", firstname: "sand", lastname: "kush" };
};
