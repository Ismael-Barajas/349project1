(function (window) {
    'use strict';
    var App = window.App || {};

    class Quiz {
        constructor(quizId, db) {
            this.quizId = quizId;
            this.db = db;
        }
        createQuiz(quiz) {
            console.log('Creating quiz named: ' + quiz.quizTitle/*Whatever the title is */);
            this.db.add(quiz.quizTitle , quiz);
        }
        //this should only take in quiz title
        deleteQuiz(quizTitle) {
            console.log('Deleting quiz called: ' + quizTitle);
            this.db.remove(quizTitle);
        }
        printQuizes() {
            var quizTitleArray = Object.keys(this.db.getAll());

            console.log('Quiz: ' + this.quizId);

            quizTitleArray.forEach((id) => {
                console.log(this.db.get(id));
            }).bind(this);
        }
    }

    App.Quiz = Quiz;
    window.App = App;

})(window);