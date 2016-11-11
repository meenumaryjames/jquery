



var myApp = {}; //container object
myApp.appVersion = "1.0";
myApp.UserModule = {
    data: [{ userId: 1, username: 'admin', password: 'admin', email: 'satya@gmail.com' }, {userId:2,username:'satya',password:'satya',email:'dotnetsatya@gmail.com'}],
    validateUser: function (username, passsword) {
        var isValid = false;
        if (localStorage.userData != null && localStorage.userData != undefined) {
            this.data = JSON.parse(localStorage.userData);
        }
        for (var i = 0; i < this.data.length; i++) {
            if (this.data[i].username == username && this.data[i].password == passsword) {
                isValid = true;
                break;
            }
        }
        return isValid;
    },
    getUserById: function (userId) {
        var selectedUser = null;
        for (var i = 0; i < this.data.length; i++) {
            if (this.data[i].userId == userId) {
                selectedUser = this.data[i];
                break;
            }
        }
        return selectedUser;

    },
    registerUser: function (newUser) {
        if (this.data.length > 0) {
            newUser.userId = this.data.length + 1;
        }

        if (localStorage.userData != null && localStorage.userData != undefined) {
            var userData = JSON.parse(localStorage.userData);
            userData.push(newUser);
            localStorage.userData = JSON.stringify(userData);
        } else {
            this.data.push(newUser);
            localStorage.userData = JSON.stringify(this.data);
        }

        saveNewpass: function(currentPass,newPass)
        {
            if (localStorage.userData != null && localStorage.userData != undefined)
            {
                this.data = JSON.parse(localStorage.userData);
            }
            for (var i = 0; i < this.data.length; i++) {
                if (this.data[i].username == sessionStorage.loggedUser && this.data[i].password == currentPass)
                {
                    this.data[i].password=newPass;
                    break;
                }
            }
            localStorage.userData = JSON.stringify(this.data);
        }
        upUser:function (nusername,npassword,nemail) {
            if (localStorage.userData != null && localStorage.userData != undefined) {
                this.data = JSON.parse(localStorage.userData);
            }
            for (var i = 0; i < this.data.length; i++) {

                    this.data[i].username = nusername;
                    this.data[i].password=npassword;
                    this.data[i].email=nemail;
                    break;

            }
            localStorage.userData = JSON.stringify(this.data);
        }
    }};