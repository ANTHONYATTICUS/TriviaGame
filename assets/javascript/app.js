var questions = [{
    ques: "Where is ol' faithful located?",
    ans: ["Yellowstone", "Zion", "Yosemite", "Grand Canyon"],
    name: "faithful",
    correct: "Yellowstone",
 
},
{
    ques: "What is the tallest mountin in North America?",
    ans: ["Mt. Whitney", "Denali", "Mt. Baldy",  "St Helen"],
    name: "tallest",
    correct: "Denali",
   
},
{
    ques: "Where is Angels Landing?",
    ans: ["Yellowstone", "Zion", "Yosemite", "Grand Canyon"],
    name: "Angels",
    correct: "Zion",
 
}
]

// display quesions
var startGame = $("#start-btn").on('click', function() {
    $(this).parent().hide();
    $('.container').show();
    countdown(60);
    questionDisplay();
});

// function for displaying questions
var questionDisplay = function() {
    $(".questions :not('#sub-but')").empty(); 
    for (var q = 0; q < 3; q++) {
        $('.questions').prepend('<div class="' + questions[q].name + '"></div>');
        $(questions[q].divClass).append('<div class ="ques-title">' + questions[q].ques + '</div>');
        for (var i = 0; i <= 3; i++) {
            $(questions[q].divClass).append('<input type="radio"  name="' + questions[q].name + '" value="' + questions[q].ans[i] + '"/><label for="' + labels[i] + '">' + questions[q].ans[i] + '</label>');
        }
        $('.questions').prepend('<hr />');
    }
}

