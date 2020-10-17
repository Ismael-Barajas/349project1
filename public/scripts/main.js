(function (window){
    'use strict';
    var form_selector = '[data-create-quiz = "form"]';
    var App = window.App;

    var Folder = App.Folder;
    var DataStore = App.DataStore;
    var FormHandler = App.FormHandler;
    var myFolder = new Folder('ncc-1701', new DataStore());
    window.myFolder = myFolder;
    var formHandler = new FormHandler(form_selector);

    formHandler.addSubmitHandler(function (data) {
        myFolder.newQuiz(myFolder, data);
    });

    console.log(formHandler);

})(window);