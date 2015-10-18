var sergii = Object.create(userProfile);
sergii.email = 'sergii@mail.com';
sergii.login = 'sergio';
sergii.programingLanguage = ['JavaScript', 'Java'];
sergii.printMe= function(){
    document.write('<h1>Hi! My name is '+ sergii.login + '!<//h1> <br>');

};