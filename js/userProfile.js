var userProfile = {
    id: null,
    email: null,
    password: null,
    programingLanguage: null,
    printMe: function () {
        if (this.login) {
            document.writeln('I am ' + this.login+'<br>');
        }
        else {
            document.writeln('My email is ' + this.email+'<br>');
        }

        if (this.programingLanguage) {
            document.write('I program ' + this.programingLanguage);
        }
        else {
            document.write('Unknown programing language');
        }

    }
};