var sSergej = {
    login: "sSergej",
    firstName: "Sergej",
    secondName: "Scherbakov",
    email: "sergej.scherbakov.01@gmail.com",
    password: "passtest",
    city: "Kiev",
    programingLanguage: "JavaScript",
    courses: "JScourses",
    printMe: function () {
        if (this.login) {
            document.writeln('My name's ' + this.login+'<br>');
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