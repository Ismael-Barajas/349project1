(function (window) {
    'use strict';
    var App = window.App || {};
  
    function Folder(quizId, db) {
        this.quizId = quizId;
        this.db = db;
    }

    Folder.prototype.newQuiz = function (quiz) {
        console.log('A new quiz has been created ' + quiz.quizTitle);
        this.db.add(quiz.quizTitle, quiz);
    };
  
    App.Folder = Folder;
    window.App = App;
  
  })(window);