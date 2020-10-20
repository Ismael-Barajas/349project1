(function (window){
    'use strict';
    var FORM_SELECTOR = '[data-create-quiz="form"]';
    var App = window.App;

    var Quiz = App.Quiz;
    var DataStore = App.DataStore;
    var FormHandler = App.FormHandler;
    var myQuiz = new Quiz('ncc-1701', new DataStore());
    window.myQuiz = myQuiz;
    var formHandler = new FormHandler(FORM_SELECTOR);

    formHandler.addSubmitHandler((data) => {
        myQuiz.createQuiz.call(myQuiz, data);
    });

    console.log(formHandler);

})(window);