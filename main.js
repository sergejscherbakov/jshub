//var bmw=Object();
var PI = 3.14;
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
            document.write('Unknow programing language');
        }

    }
}
var vlad = {
    firstName: 'Vad',
    'secondName': 'Hvorostianiy',
    'age': 20,
    'city': 'Kiev'
};
var anya = Object.create(userProfile);

anya.firstName = 'Anna';
anya.hobbies = ['JavaScript', 'swimming', 'children'];
anya.programingLanguage = 'JavaScript';
anya.email = 'eamil@eamil.com';
anya.printMe();

var sergii = Object.create(userProfile);
sergii.email = 'sergii@mail.com';
sergii.login = 'sergio';
sergii.programingLanguage = ['JavaScript', 'Java'];
sergii.printMe= function(){
    document.write('<h1>Hi! My name is '+ sergii.login + '!<//h1> <br>');

};
sergii.printMe();

