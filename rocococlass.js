//=========================================================================================
//=============================Initializing Firebase=======================================
//=========================================================================================
  var config = {
    apiKey: "AIzaSyBYFOuocBhI3ZMa34HTQQ3OG5iDfItdSS4",
    authDomain: "mywebapp-7bc86.firebaseapp.com",
    databaseURL: "https://mywebapp-7bc86.firebaseio.com",
    projectId: "mywebapp-7bc86",
    storageBucket: "mywebapp-7bc86.appspot.com",
    messagingSenderId: "858961654254"
  };
  firebase.initializeApp(config);

//ALL ELEMENTS AND IDS
var firestore = firebase.firestore();

//=======================creating variables for every element on page

const header = document.getElementById("header");

var directionsHeader = document.getElementById("directions");

var createGameButton = document.getElementById("createGameButton");

var mainScreenYesButton = document.getElementById("mainScreenYesButton");

var mainScreenNoButton = document.getElementById("mainScreenNoButton");

var startACreatedGameButton = document.getElementById("startCreatedGameButton");

var startCreatedGameName = document.getElementById("gameName");

var playCreatedGame = document.getElementById("playCreatedGame");

var playGameOfWeek = document.getElementById("playGameOfWeek");

var joinAGameButton = document.getElementById("joinAGameButton");

var joinRoomButton = document.getElementById("joinRoomButton");

//var backToMainButton = document.getElementById("backToMainButton");
//
//var backButton = document.getElementById("backButton");

var playerNameOutput = document.getElementById("playerNameOutput");

var score = document.getElementById("score");

var startGameButton = document.getElementById("startGameButton")

//Output room# and Input room#
var roomIDOutput = document.getElementById("roomIDOutput");

var roomIDInput = document.getElementById("roomIDInput");

var playerNameInput = document.getElementById("playerNameInput");

var startGameButton = document.getElementById("startGameButton");

//Question Output header
const questionOutput = document.getElementById("questionOutput");

//const countdown = document.getElementById("countdown");

var createdGameName = document.getElementById("createdGameName");
var question1 = document.getElementById("question1");
var question1Input = document.getElementById("question1Input");
var question1OptionAInput = document.getElementById("question1OptionAInput");
var question1OptionBInput = document.getElementById("question1OptionBInput");
var question1OptionCInput = document.getElementById("question1OptionCInput");
var question1OptionDInput = document.getElementById("question1OptionDInput");
var question1Option1Input = document.getElementById("question1Option1Input");
var question1Option2Input = document.getElementById("question1Option2Input");
var question1CorrectAnswerAButton = document.getElementById("question1CorrectAnswerAButton");
var question1CorrectAnswerBButton = document.getElementById("question1CorrectAnswerBButton");
var question1CorrectAnswerCButton = document.getElementById("question1CorrectAnswerCButton");
var question1CorrectAnswerDButton = document.getElementById("question1CorrectAnswerDButton");
var question1CorrectAnswer1Button = document.getElementById("question1CorrectAnswer1Button");
var question1CorrectAnswer2Button = document.getElementById("question1CorrectAnswer2Button");
var question1CorrectAnswerInput = document.getElementById("question1CorrectAnswerInput");
var addQuestionButton = document.getElementById("addQuestionButton");
var doneCreatingGameButton = document.getElementById("doneCreatingGameButton");


var myProgress = document.getElementById("myProgress");

//Response Text Field   
const response1 = document.getElementById("response1");
const response2 = document.getElementById("response2");
const response3 = document.getElementById("response3");

//Submit response button
const submitResponseButton = document.getElementById("submitResponseButton");

//MC ABCD Buttons
const buttonA = document.getElementById("buttonA");
const buttonB = document.getElementById("buttonB");
const buttonC = document.getElementById("buttonC");
const buttonD = document.getElementById("buttonD");

//TF Buttons
const trueButton = document.getElementById("true");
const falseButton = document.getElementById("false");

//Additional Buttons

const buttonAdd0 = document.getElementById("buttonAdd0");
const buttonAdd1 = document.getElementById("buttonAdd1");

//Show buttons

const optionA = document.getElementById("optionA");
const optionB = document.getElementById("optionB");
const optionC = document.getElementById("optionC");
const optionD = document.getElementById("optionD");
const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");


const buttonAdd2 = document.getElementById("buttonAdd2");
const buttonAdd3 = document.getElementById("buttonAdd3");
const buttonAdd4 = document.getElementById("buttonAdd4");
const buttonAdd5 = document.getElementById("buttonAdd5");
const buttonAdd6 = document.getElementById("buttonAdd6");
const buttonAdd7 = document.getElementById("buttonAdd7");
const buttonAdd8 = document.getElementById("buttonAdd8");
const buttonAdd9 = document.getElementById("buttonAdd9");
const buttonAdd10 = document.getElementById("buttonAdd10");
const buttonAdd11 = document.getElementById("buttonAdd11");
const buttonAdd12 = document.getElementById("buttonAdd12");
const buttonAdd13 = document.getElementById("buttonAdd13");
const buttonAdd14 = document.getElementById("buttonAdd14");
const buttonAdd15 = document.getElementById("buttonAdd15");
const buttonAdd16 = document.getElementById("buttonAdd16");
const buttonAdd17 = document.getElementById("buttonAdd17");
const buttonAdd18 = document.getElementById("buttonAdd18");
const buttonAdd19 = document.getElementById("buttonAdd19");
const buttonAdd20 = document.getElementById("buttonAdd20");
const buttonAdd21 = document.getElementById("buttonAdd21");
const buttonAdd22 = document.getElementById("buttonAdd22");
const buttonAdd23 = document.getElementById("buttonAdd23");
const buttonAdd24 = document.getElementById("buttonAdd24");

var progressBar = document.getElementById("progressBar");


//HIDE/DISABLE ALL ELEMENTS TO START WITH
startGameHide();
////Hide all elements except header/directions/createGameButton and joinGameButton

function startGameHide(){
    
    joinRoomButton.style.display = "none";
    mainScreenYesButton.style.display = "none";
    mainScreenNoButton.style.display = "none";
    playerNameOutput.style.display = "none";
    score.style.display = "none";
     startGameButton.style.display = "none";
     roomIDOutput.style.display = "none";
     roomIDInput.style.display = "none";
     playerNameInput.style.display = "none";
     startGameButton.style.display = "none";
    questionOutput.style.display = "none";
    
    
    startCreatedGameName.style.display = "none";
    
    playCreatedGame.style.display = "none";
    playGameOfWeek.style.display = "none";
    
    createdGameName.style.display = "none";
    question1.style.display = "none";
    question1Input.style.display = "none";
    question1OptionAInput.style.display = "none";
    question1OptionBInput.style.display = "none";
    question1OptionCInput.style.display = "none";
    question1OptionDInput.style.display = "none";
    question1Option1Input.style.display = "none";
    question1Option2Input.style.display = "none";
    question1CorrectAnswerAButton.style.display = "none";
    question1CorrectAnswerBButton.style.display = "none";
    question1CorrectAnswerCButton.style.display = "none";
    question1CorrectAnswerDButton.style.display = "none";
    question1CorrectAnswer1Button.style.display = "none";
    question1CorrectAnswer2Button.style.display = "none";
    question1CorrectAnswerInput.style.display = "none";
    addQuestionButton.style.display = "none";
    doneCreatingGameButton.style.display = "none";
    
//    backToMainButton.style.display = "none";
//    backButton.style.display = "none";
    
    //countdown.style.display = "none";
    myProgress.style.display = "none";
    
    buttonA.style.display = "none";
     buttonB.style.display = "none";
     buttonC.style.display = "none";
     buttonD.style.display = "none";
     trueButton.style.display = "none";
     falseButton.style.display = "none";
    buttonAdd0.style.display = "none";
    buttonAdd1.style.display = "none";
    
    optionA.style.display = "none";
     optionB.style.display = "none";
     optionC.style.display = "none";
     optionD.style.display = "none";
     option1.style.display = "none";
     option2.style.display = "none";
    
    
    
    
    buttonAdd2.style.display = "none";
    buttonAdd3.style.display = "none";
    buttonAdd4.style.display = "none";
    buttonAdd5.style.display = "none";
    buttonAdd6.style.display = "none";
    buttonAdd7.style.display = "none";
    buttonAdd8.style.display = "none";
    buttonAdd9.style.display = "none";
    buttonAdd10.style.display = "none";
    buttonAdd11.style.display = "none";
    buttonAdd12.style.display = "none";
    buttonAdd13.style.display = "none";
    buttonAdd14.style.display = "none";
    buttonAdd15.style.display = "none";
    buttonAdd16.style.display = "none";
    buttonAdd17.style.display = "none";
    buttonAdd19.style.display = "none";
    buttonAdd18.style.display = "none";
    buttonAdd20.style.display = "none";
    buttonAdd21.style.display = "none";
    buttonAdd22.style.display = "none";
    buttonAdd23.style.display = "none";
    buttonAdd24.style.display = "none";
    
    response1.style.display = "none";
     response2.style.display = "none";
     response3.style.display = "none";
    
    submitResponseButton.style.display = "none";
    
    progressBar.style.display = "none";
    

    
}

////=============================Creating References to Database===============================
//DOC REFERENCES
var docRefRoom;
var docRefGameData;
var docRefResponseData;
var docRefPageNumber;

//Room Data Reference - total players, page number
var docRefRoomData;

//Player Reference inside room
var docRefPlayer;

//Question Reference
var docRefQuestion;

//REsponse Reference
var docRefResponseData;

//Response answer Ref
var docRefPlayerResponses;

//Ref to Created Game
var docRefCreatedGame;




//===================================CREATE GAME/START GAME/JOIN GAME======================================

//VARIABLES
// Question Input local variables
var currentQuestion = "question1Input";
var currentQuestionOptionA = "question1OptionAInput";
var currentQuestionOptionATF = "question1CorrectAnswerAButton";
var currentQuestionOptionB = "question1OptionBInput";
var currentQuestionOptionBTF = "question1CorrectAnswerBButton";
var currentQuestionOptionC = "question1OptionCInput";
var currentQuestionOptionCTF = "question1CorrectAnswerCButton";
var currentQuestionOptionD = "question1OptionDInput";
var currentQuestionOptionDTF = "question1CorrectAnswerDButton";
var currentQuestionOption1 = "question1Option1Input";
var currentQuestionOption1TF = "question1CorrectAnswer1Button";
var currentQuestionOption2 = "question1Option2Input";
var currentQuestionOption2TF = "question1CorrectAnswer2Button";
//var currentQuestionCorrectAnswer = "question1CorrectAnswerInput";

// Room Number
//const randomRoomID = "1234";
const randomRoomID = (Math.floor(Math.random() * 10000) + 10000).toString().substring(1);
console.log(randomRoomID); 
var roomID;

var joinedGameName;
const increment = firebase.firestore.FieldValue.increment(1);

var questionNumToAdd = 1;

var haveMainScreen = false;
var isMainScreen = false;

var docRefToGame;
var numGameQuestions = 0;


var localPlayerName;
var roomSize = 0;
//var roomID;
var playersInGame = 0;
var isGameCreator = false;

var localPlayerNumber;

//FUNCTIONS/BUTTONS

createGameButton.addEventListener("click", function(){
    
    //Hide create game and join game buttons
    startACreatedGameButton.style.display = "none";
    
    createGameButton.style.display = "none";
    
    joinAGameButton.style.display = "none";
    
    //Show all input options
     createdGameName.style.display = "block";
    question1.style.display = "block";
    question1Input.style.display = "block";
    question1OptionAInput.style.display = "block";
    question1OptionBInput.style.display = "block";
    question1OptionCInput.style.display = "block";
    question1OptionDInput.style.display = "block";
    question1Option1Input.style.display = "block";
    question1Option2Input.style.display = "block";
    //question1CorrectAnswerInput.style.display = "block";
    question1CorrectAnswerAButton.style.display = "block";
    question1CorrectAnswerAButton.onclick = addCorrectAnswers;
    question1CorrectAnswerBButton.style.display = "block";
    question1CorrectAnswerBButton.onclick = addCorrectAnswers;
    question1CorrectAnswerCButton.style.display = "block";
    question1CorrectAnswerCButton.onclick = addCorrectAnswers;
    question1CorrectAnswerDButton.style.display = "block";
    question1CorrectAnswerDButton.onclick = addCorrectAnswers;
    question1CorrectAnswer1Button.style.display = "block";
    question1CorrectAnswer1Button.onclick = addCorrectAnswers;
    question1CorrectAnswer2Button.style.display = "block";
    question1CorrectAnswer2Button.onclick = addCorrectAnswers;
    addQuestionButton.style.display = "block";
    doneCreatingGameButton.style.display = "block";
    //backButton.style.display = "block";
    
    console.log("Trying to create an element");
    //TESTING CREATING A NEW QUESTION
//  var x = document.createElement("INPUT");
//    x.setAttribute("type", "text");
////x.style.display = "block";
//document.body.appendChild(x);
// 
    
})

addQuestionButton.addEventListener("click", function(){
    
    questionNumToAdd++;
    console.log("calling method with " + questionNumToAdd);
    
    
    //add question function
    addQuestion(questionNumToAdd);
    //Create all new question, question options, and correct answer buttons
//    var question = document.createElement("INPUT");
//    x.setAttribute("type", "text");
//    //x.style.display = "block";
//    document.body.appendChild(x);
    
    
})

question1.addEventListener("click", function(){
    console.log("CLICKED1" + currentQuestion);
    console.log("Button ==== " + currentQuestionOptionATF);
    
    if(currentQuestion == "question1Input"){
        //do nothing
        
    }else{
        //HIDE CURRENT
        console.log(currentQuestion);
        document.getElementById(currentQuestion).style.display = "none";
        document.getElementById(currentQuestionOptionA).style.display = "none";
        document.getElementById(currentQuestionOptionB).style.display = "none";
        document.getElementById(currentQuestionOptionC).style.display = "none";
        document.getElementById(currentQuestionOptionD).style.display = "none";
        document.getElementById(currentQuestionOption1).style.display = "none";
        document.getElementById(currentQuestionOption2).style.display = "none";
        //document.getElementById(currentQuestionCorrectAnswer).style.display = "none";
        document.getElementById(currentQuestionOptionATF).style.display = "none";
        document.getElementById(currentQuestionOptionBTF).style.display = "none";
        document.getElementById(currentQuestionOptionCTF).style.display = "none";
        document.getElementById(currentQuestionOptionDTF).style.display = "none";
        document.getElementById(currentQuestionOption1TF).style.display = "none";
        document.getElementById(currentQuestionOption2TF).style.display = "none";
        
        //SHOW QUESTION1
        question1.style.display = "block";
        question1Input.style.display = "block";
        question1OptionAInput.style.display = "block";
        question1OptionBInput.style.display = "block";
        question1OptionCInput.style.display = "block";
        question1OptionDInput.style.display = "block";
        question1Option1Input.style.display = "block";
        question1Option2Input.style.display = "block";
        question1CorrectAnswerAButton.style.display = "block";
        question1CorrectAnswerBButton.style.display = "block";
        question1CorrectAnswerCButton.style.display = "block";
        question1CorrectAnswerDButton.style.display = "block";
        question1CorrectAnswer1Button.style.display = "block";
        question1CorrectAnswer2Button.style.display = "block";
        //question1CorrectAnswerInput.style.display = "block";
        
        //CHANGE Question1 back to current
        currentQuestion = "question1Input";
        currentQuestionOptionA = "question1OptionAInput";
        currentQuestionOptionB = "question1OptionBInput";
        currentQuestionOptionC = "question1OptionCInput";
        currentQuestionOptionD = "question1OptionDInput";
        currentQuestionOption1 = "question1Option1Input";
        currentQuestionOption2 = "question1Option2Input";
        //currentQuestionCorrectAnswer = "question1CorrectAnswerInput";
        currentQuestionOptionATF = "question1CorrectAnswerAButton";
         currentQuestionOptionBTF = "question1CorrectAnswerBButton";
         currentQuestionOptionCTF = "question1CorrectAnswerCButton";
         currentQuestionOptionDTF = "question1CorrectAnswerDButton";
         currentQuestionOption1TF = "question1CorrectAnswer1Button";
         currentQuestionOption2TF = "question1CorrectAnswer2Button";
        
    }
})

function makeCurrentQ(buttonID){
        currentQuestion = buttonID + "Input";
        currentQuestionOptionA = buttonID + "OptionAInput";
        currentQuestionOptionB = buttonID+ "OptionBInput";
        currentQuestionOptionC = buttonID+ "OptionCInput";
        currentQuestionOptionD = buttonID+ "OptionDInput";
        currentQuestionOption1 = buttonID+ "Option1Input";
        currentQuestionOption2 = buttonID+ "Option2Input";
        //currentQuestionCorrectAnswer = buttonID + "CorrectAnswerInput";
        currentQuestionOptionATF = buttonID + "CorrectAnswerAButton";
        currentQuestionOptionBTF = buttonID + "CorrectAnswerBButton";
        currentQuestionOptionCTF = buttonID + "CorrectAnswerCButton";
        currentQuestionOptionDTF = buttonID + "CorrectAnswerDButton";
        currentQuestionOption1TF = buttonID + "CorrectAnswer1Button";
        currentQuestionOption2TF = buttonID + "CorrectAnswer2Button";
}

function showQuestionInputs(buttonID){
    console.log("working" + buttonID);
    //HIDE
     document.getElementById(currentQuestion).style.display = "none";
    document.getElementById(currentQuestionOptionA).style.display = "none";
    document.getElementById(currentQuestionOptionB).style.display = "none";
    document.getElementById(currentQuestionOptionC).style.display = "none";
    document.getElementById(currentQuestionOptionD).style.display = "none";
    document.getElementById(currentQuestionOption1).style.display = "none";
    document.getElementById(currentQuestionOption2).style.display = "none";
    //document.getElementById(currentQuestionCorrectAnswer).style.display = "none";
    document.getElementById(currentQuestionOptionATF).style.display = "none";
        document.getElementById(currentQuestionOptionBTF).style.display = "none";
        document.getElementById(currentQuestionOptionCTF).style.display = "none";
        document.getElementById(currentQuestionOptionDTF).style.display = "none";
        document.getElementById(currentQuestionOption1TF).style.display = "none";
        document.getElementById(currentQuestionOption2TF).style.display = "none";
    
    
    //SHOW THIS ONE
    //var questionOptionA = buttonID + "OptionA";
    
    document.getElementById(buttonID + "Input").style.display = "block";
    document.getElementById(buttonID + "OptionAInput").style.display = "block";
    document.getElementById(buttonID+ "OptionBInput").style.display = "block";
    document.getElementById(buttonID + "OptionCInput").style.display = "block";
    document.getElementById(buttonID + "OptionDInput").style.display = "block";
    document.getElementById(buttonID + "Option1Input").style.display = "block";
    document.getElementById(buttonID + "Option2Input").style.display = "block";
    //document.getElementById(buttonID + "CorrectAnswerInput").style.display = "block";
    document.getElementById(buttonID + "CorrectAnswerAButton").style.display = "block";
    document.getElementById(buttonID + "CorrectAnswerBButton").style.display = "block";
    document.getElementById(buttonID + "CorrectAnswerCButton").style.display = "block";
    document.getElementById(buttonID + "CorrectAnswerDButton").style.display = "block";
    document.getElementById(buttonID + "CorrectAnswer1Button").style.display = "block";
    document.getElementById(buttonID + "CorrectAnswer2Button").style.display = "block";
    
    //MAKE IT CURRENT
    setTimeout(makeCurrentQ, 100, buttonID);
//        currentQuestion = buttonID + "Input";
//        currentQuestionOptionA = buttonID + "OptionAInput";
//        currentQuestionOptionB = buttonID+ "OptionBInput";
//        currentQuestionOptionC = buttonID+ "OptionCInput";
//        currentQuestionOptionD = buttonID+ "OptionDInput";
//        currentQuestionOption1 = buttonID+ "Option1Input";
//        currentQuestionOption2 = buttonID+ "Option2Input";
    
    
}

var doSomething = function()
{
    console.log("Button CLICKED id =  "+this.id+" button name = "+this.innerHTML);
    //save buttonid
    var buttonID = (this.id).toString();
    
    showQuestionInputs(buttonID);
    
}

var toggleColor = false;
var addCorrectAnswers = function()
{
    console.log("toggleColor = " + toggleColor);
    
    if(toggleColor == false){
    console.log("changing color to green on button: " + this.id);
    toggleColor = true;
    document.getElementById(this.id).style.background = 'lightgreen';
    }
    else{
        document.getElementById(this.id).style.background = '#7FDBFF'; 
        toggleColor = false;
    }
    
}

function addQuestion(questionNumToAdd){
    //console.log(currentQuestionCorrectAnswer);
    
    //HIDE CURRENT QUESTION STUFF
    document.getElementById(currentQuestion).style.display = "none";
    document.getElementById(currentQuestionOptionA).style.display = "none";
    document.getElementById(currentQuestionOptionB).style.display = "none";
    document.getElementById(currentQuestionOptionC).style.display = "none";
    document.getElementById(currentQuestionOptionD).style.display = "none";
    document.getElementById(currentQuestionOption1).style.display = "none";
    document.getElementById(currentQuestionOption2).style.display = "none";
    //document.getElementById(currentQuestionCorrectAnswer).style.display = "none";
        document.getElementById(currentQuestionOptionATF).style.display = "none";
        document.getElementById(currentQuestionOptionBTF).style.display = "none";
        document.getElementById(currentQuestionOptionCTF).style.display = "none";
        document.getElementById(currentQuestionOptionDTF).style.display = "none";
        document.getElementById(currentQuestionOption1TF).style.display = "none";
        document.getElementById(currentQuestionOption2TF).style.display = "none";
    
    
    
    
    //CREATE NEW QUESTION STUFF
    
    var questionSelector = document.createElement("BUTTON");
    questionSelector.innerText = "Question " + questionNumToAdd;
    questionSelector.id = "question" + questionNumToAdd;
    document.getElementById("q1a").appendChild(questionSelector);
    
    //questionSelector.onclick = showQuestionInputs(this.id);
    
    document.getElementById("question" + questionNumToAdd).onclick = doSomething;
    
    
    var qInput = document.createElement("INPUT");
    qInput.setAttribute("type", "textfield");
    qInput.id = "question" + questionNumToAdd + "Input";
    qInput.placeholder = "Enter Question " + questionNumToAdd + " here";
    //x.style.display = "block";
    document.getElementById("q1a").appendChild(qInput);
    
    var qOAInput = document.createElement("INPUT");
    qOAInput.setAttribute("type", "textfield");
    qOAInput.id = "question" + questionNumToAdd + "OptionAInput";
    qOAInput.placeholder = "Enter Option A here";
    document.getElementById("q1a").appendChild(qOAInput);
    
    var qOAButton = document.createElement("BUTTON");
    qOAButton.id = "question" + questionNumToAdd + "CorrectAnswerAButton";
    qOAButton.innerText = "Correct Answer";
    document.getElementById("q1a").appendChild(qOAButton);
    
    document.getElementById("question" + questionNumToAdd + "CorrectAnswerAButton").onclick = addCorrectAnswers;
    
     var qOBInput = document.createElement("INPUT");
    qOBInput.setAttribute("type", "textfield");
    qOBInput.id = "question" + questionNumToAdd + "OptionBInput";
    qOBInput.placeholder = "Enter Option B here";
    document.getElementById("q1a").appendChild(qOBInput);
    
      var qOBButton = document.createElement("BUTTON");
    qOBButton.id = "question" + questionNumToAdd + "CorrectAnswerBButton";
     qOBButton.innerText = "Correct Answer";
    document.getElementById("q1a").appendChild(qOBButton);
    document.getElementById("question" + questionNumToAdd + "CorrectAnswerBButton").onclick = addCorrectAnswers;
    
     var qOCInput = document.createElement("INPUT");
    qOCInput.setAttribute("type", "textfield");
    qOCInput.id = "question" + questionNumToAdd + "OptionCInput";
    qOCInput.placeholder = "Enter Option C here";
    document.getElementById("q1a").appendChild(qOCInput);
    
      var qOCButton = document.createElement("BUTTON");
    qOCButton.id = "question" + questionNumToAdd + "CorrectAnswerCButton";
     qOCButton.innerText = "Correct Answer";
    document.getElementById("q1a").appendChild(qOCButton);
    document.getElementById("question" + questionNumToAdd + "CorrectAnswerCButton").onclick = addCorrectAnswers;
    
    var qODInput = document.createElement("INPUT");
    qODInput.setAttribute("type", "textfield");
    qODInput.id = "question" + questionNumToAdd + "OptionDInput";
    qODInput.placeholder = "Enter Option D here";
    document.getElementById("q1a").appendChild(qODInput);
    
      var qODButton = document.createElement("BUTTON");
    qODButton.id = "question" + questionNumToAdd + "CorrectAnswerDButton";
     qODButton.innerText = "Correct Answer";
    document.getElementById("q1a").appendChild(qODButton);
    document.getElementById("question" + questionNumToAdd + "CorrectAnswerDButton").onclick = addCorrectAnswers;
    
     var qO1Input = document.createElement("INPUT");
    qO1Input.setAttribute("type", "textfield");
    qO1Input.id = "question" + questionNumToAdd + "Option1Input";
    qO1Input.placeholder = "Enter Option 1 here";
    document.getElementById("q1a").appendChild(qO1Input);
    
      var qO1Button = document.createElement("BUTTON");
    qO1Button.id = "question" + questionNumToAdd + "CorrectAnswer1Button";
     qO1Button.innerText = "Correct Answer";
    document.getElementById("q1a").appendChild(qO1Button);
    document.getElementById("question" + questionNumToAdd + "CorrectAnswer1Button").onclick = addCorrectAnswers;
    
     var qO2Input = document.createElement("INPUT");
    qO2Input.setAttribute("type", "textfield");
    qO2Input.id = "question" + questionNumToAdd + "Option2Input";
    qO2Input.placeholder = "Enter Option 2 here";
    document.getElementById("q1a").appendChild(qO2Input);
    
      var qO2Button = document.createElement("BUTTON");
    qO2Button.id = "question" + questionNumToAdd + "CorrectAnswer2Button";
     qO2Button.innerText = "Correct Answer";
    document.getElementById("q1a").appendChild(qO2Button);
    document.getElementById("question" + questionNumToAdd + "CorrectAnswer2Button").onclick = addCorrectAnswers;
    
//    var qCAInput = document.createElement("INPUT");
//    qCAInput.setAttribute("type", "textfield");
//    qCAInput.id = "question" + questionNumToAdd + "CorrectAnswerInput";
//    qCAInput.placeholder = "Enter correct answer here";
//    document.getElementById("q1a").appendChild(qCAInput);
    
    
    //RESET CURRENT QUESTION VARIABLES
    
    currentQuestion = qInput.id;
    currentQuestionOptionA = qOAInput.id;
    currentQuestionOptionB = qOBInput.id;
    currentQuestionOptionC = qOCInput.id;
    currentQuestionOptionD = qODInput.id;
    currentQuestionOption1 = qO1Input.id;
    currentQuestionOption2 = qO2Input.id;
    currentQuestionOptionATF = qOAButton.id;
    currentQuestionOptionBTF = qOBButton.id;
    currentQuestionOptionCTF = qOCButton.id;
    currentQuestionOptionDTF = qODButton.id;
    currentQuestionOption1TF = qO1Button.id;
    currentQuestionOption2TF = qO2Button.id;
    //currentQuestionCorrectAnswer = qCAInput.id;
    
    console.log("ADD QUESTION" + currentQuestion);
    
    //questionNumToAdd++;
    
    console.log(questionNumToAdd);
    
    //Create a function
    
    
}

doneCreatingGameButton.addEventListener("click", function(){
    
    //Get all user input and store it in variables
    var createdGame = createdGameName.value;
    var question1 = question1Input.value;
    var question1OptionA = question1OptionAInput.value;
    var question1ButtonA = question1CorrectAnswerAButton.style.backgroundColor;
    var question1ButtonB = question1CorrectAnswerBButton.style.backgroundColor;
    var question1ButtonC = question1CorrectAnswerCButton.style.backgroundColor;
    var question1ButtonD = question1CorrectAnswerDButton.style.backgroundColor;
    var question1Button1 = question1CorrectAnswer1Button.style.backgroundColor;
    var question1Button2 = question1CorrectAnswer2Button.style.backgroundColor;
    var question1OptionB = question1OptionBInput.value;
    var question1OptionC = question1OptionCInput.value;
    var question1OptionD = question1OptionDInput.value;
    var question1Option1 = question1Option1Input.value;
    var question1Option2 = question1Option2Input.value;
    //var question1CorrectAnswer = question1CorrectAnswerInput.value;
    
    console.log("Question 1 color = " + question1ButtonA);
    
    
    //Add it all to firestore
    docRefCreatedGame = firestore.collection(createdGame);
    
    docRefCreatedGame.doc("GameData").set({
        numQuestions: questionNumToAdd
    })
    
    for(var i = 1; i <= questionNumToAdd; i++){
        var questionDoc = "Question" + i;
        var currentQuestionToAdd = "question" + i + "Input";
        var currentQuestionOptionATA = "question" + i + "OptionAInput"; 
        var currentQuestionOptionBTA = "question" + i + "OptionBInput";
        var currentQuestionOptionCTA = "question" + i + "OptionCInput";
        var currentQuestionOptionDTA = "question" + i + "OptionDInput";
        var currentQuestionOption1TA = "question" + i + "Option1Input";
        var currentQuestionOption2TA = "question" + i + "Option2Input";
        var currentQuestionCATA = "question" + i + "CorrectAnswerInput";
        
        //ALL CURRENT QUESTION OPTIONS AND CORRECT ANSWER!!!
        var curQuestion = document.getElementById(currentQuestionToAdd).value;
        var curQOATA = document.getElementById(currentQuestionOptionATA).value;
        var curQOBTA = document.getElementById(currentQuestionOptionBTA).value;
        var curQOCTA = document.getElementById(currentQuestionOptionCTA).value;
        var curQODTA = document.getElementById(currentQuestionOptionDTA).value;
        var curQO1TA = document.getElementById(currentQuestionOption1TA).value;
        var curQO2TA = document.getElementById(currentQuestionOption2TA).value;
        //var curQCATA = document.getElementById(currentQuestionCATA).value;
        
        //HERE IS WHERE YOU WOULD CHECK TO MAKE SURE ALL THE VALUES HAVE BEEN ENTERED RIGHT
        //AND THE GAME IS PLAYABLE, IF NOT, YOU GOTTA BREAK OUT AND LET THE USER KNOW TO FIX
        //THEIR FIELD
        
        var optionAToggle = false;
        var optionBToggle = false;
        var optionCToggle = false;
        var optionDToggle = false;
        var option1Toggle = false;
        var option2Toggle = false;
        if(question1ButtonA == "lightgreen"){
            optionAToggle = true;
        }
         if(question1ButtonB == "lightgreen"){
            optionBToggle = true;
        }
         if(question1ButtonC == "lightgreen"){
            optionCToggle = true;
        }
         if(question1ButtonD == "lightgreen"){
            optionDToggle = true;
        }
         if(question1Button1 == "lightgreen"){
            option1Toggle = true;
        }
         if(question1Button2 == "lightgreen"){
            option2Toggle = true;
        }
        
        
    docRefCreatedGame.doc(questionDoc).set({
        question: curQuestion,
        optionA: curQOATA,
        optionATF: optionAToggle,
        optionB: curQOBTA,
        optionBTF: optionBToggle,
        optionC: curQOCTA,
        optionCTF: optionCToggle,
        optionD: curQODTA,
        optionDTF: optionDToggle,
        option1: curQO1TA,
        option1TF: option1Toggle,
        option2: curQO2TA,
        option2TF: option2Toggle
    })
        
        
    }
    
    
    //Tell user they've successfully created game and send them back to home screen
    createdGameName.style.display = "none";
    addQuestionButton.style.display = "none";
    doneCreatingGameButton.style.display = "none";
    
     document.getElementById(currentQuestion).style.display = "none";
    document.getElementById(currentQuestionOptionA).style.display = "none";
    document.getElementById(currentQuestionOptionB).style.display = "none";
    document.getElementById(currentQuestionOptionC).style.display = "none";
    document.getElementById(currentQuestionOptionD).style.display = "none";
    document.getElementById(currentQuestionOption1).style.display = "none";
    document.getElementById(currentQuestionOption2).style.display = "none";
    document.getElementById(currentQuestionOptionATF).style.display = "none";
    document.getElementById(currentQuestionOptionBTF).style.display = "none";
    document.getElementById(currentQuestionOptionCTF).style.display = "none";
    document.getElementById(currentQuestionOptionDTF).style.display = "none";
    document.getElementById(currentQuestionOption1TF).style.display = "none";
    document.getElementById(currentQuestionOption2TF).style.display = "none";
    
    //document.getElementById(currentQuestionCorrectAnswer).style.display = "none";
    
      for(var i = 1; i<=questionNumToAdd; i ++){
          
          document.getElementById("question" + i).style.display = "none";
          
          
    }
    
    directionsHeader.style.display = "block";
    
    directionsHeader.innerText = "Successfully Created Game!  To play game press Start A Game and Type in your game name: " + createdGame + " and you will be given a game code for other players to enter.";
    
    
})

startCreatedGameButton.addEventListener("click", function(){
    
    //BACKGROUND MUSIC
    document.getElementById("backM").play();
    
    
    directionsHeader.innerHTML =  "Enter a unique Game Name and play it or play the GAME OF THE WEEK!";
    
    //Hide create game and join game buttons
    startACreatedGameButton.style.display = "none";
    
    createGameButton.style.display = "none";
    
    joinAGameButton.style.display = "none";
    
    
    //TYPE IN YOUR UNIQUE GAME NAME!!
    //Enter Game Name
    startCreatedGameName.style.display = "block";
    
    playCreatedGame.style.display = "block";
    playGameOfWeek.style.display = "block";
    
    // backButton.style.display = "block";
    
    //Press Play this game if you typed in a game or play game of the week (curated content and game)
    
})

playCreatedGame.addEventListener("click", function(){
    
    var gameToPlay = startCreatedGameName.value;
    console.log("GAME TO PLAY IS " + gameToPlay);
    
    docRefToGame = firestore.collection(gameToPlay);
    
    docRefToGame.get().then(snap => {
        
        numGameQuestions = snap.size - 1 // will return the collection size
        
        console.log("there are " + numGameQuestions + " questions");

        if(numGameQuestions > 0){
            
            //hide stuff
            startCreatedGameName.style.display = "none";
    
            playCreatedGame.style.display = "none";

            playGameOfWeek.style.display = "none";
            
        //ASK IF THEY ARE USING THE MAIN SCREEN(RECOMMENDED TO CREATE GAME)
    
            directionsHeader.innerHTML =  "Are you using the main screen to start " + gameToPlay + "? (RECOMMENDED)";

            mainScreenYesButton.style.display = "block";

            mainScreenNoButton.style.display = "block";

            //create correct Data Refs
            roomID = randomRoomID;
            docRefRoom = firestore.collection(randomRoomID);
            docRefGameData = docRefRoom.doc("GameData");
            docRefGameData.set({
                gameName: gameToPlay,
                players: 0,
                pageNumber: 0,
                responses: 0
            });
            
            docRefResponseData = docRefRoom.doc("ResponseData");
            docRefResponseData.set({
                responses: 0
            });
            
            docRefPageNumber = docRefRoom.doc("PageNumber");
            docRefPageNumber.set({
                pageNumber: 0
            });
            
        }else{
            directionsHeader.innerHTML =  "Enter an existing game name";
        }
        
        
    });
    
    
})

playGameOfWeek.addEventListener("click", function(){
    
    //hide stuff
    startCreatedGameName.style.display = "none";
    playCreatedGame.style.display = "none";
    playGameOfWeek.style.display = "none";
    
     //ASK IF THEY ARE USING THE MAIN SCREEN(RECOMMENDED TO CREATE GAME)
    
            directionsHeader.innerHTML =  "Are you using the main screen to start the Facial Recognition Game Of The Week? (RECOMMENDED)";

            mainScreenYesButton.style.display = "block";

            mainScreenNoButton.style.display = "block";

            //create correct Data Refs
    
    
            docRefToGame = firestore.collection("FacialRecognitionGame");
    
            roomID = randomRoomID;
    
            docRefRoom = firestore.collection(randomRoomID);
            docRefGameData = docRefRoom.doc("GameData");
            docRefGameData.set({
                gameName: "FacialRecognitionGame",
                players: 0,
                pageNumber: 0,
                responses: 0
            });
            
            docRefResponseData = docRefRoom.doc("ResponseData");
            docRefResponseData.set({
                responses: 0
            });
    
            docRefPageNumber = docRefRoom.doc("PageNumber");
            docRefPageNumber.set({
                pageNumber: 0
            });
    
        //Add numQuestions
    
        firestore.collection("FacialRecognitionGame").doc("GameData").get().then(function(doc){
            if(doc.exists){
                const roomData = doc.data();
                numGameQuestions = roomData.numQuestions;
            
            }}).catch(function(error){
            console.log("error", error);
        });
    
    console.log("numGameQuestions = " + numGameQuestions);
    
    
})

mainScreenYesButton.addEventListener("click", function(){
    
    //hide yes/no buttons
    mainScreenYesButton.style.display = "none";
    
    mainScreenNoButton.style.display = "none";
    
    haveMainScreen = true;
    docRefGameData.update({
        haveMainScreen: true
    })
    
    isMainScreen = true;
    //Show Room ID
    
    
   header.innerHTML =  "Enter this Room ID __" + randomRoomID + "__ on player Devices to join game";
    
    directionsHeader.innerHTML =  "Once all players have joined start your Game!";
    
    setTimeout(function(){ startGameButton.style.display = "block"; }, 3000);
    
    
    //ADD PLAYER NAMES ON SCREEN
    
    getRealTimeUpdates();
    
    
    
})

mainScreenNoButton.addEventListener("click", function(){
    
    //hide yes/no buttons
    mainScreenYesButton.style.display = "none";
    
    mainScreenNoButton.style.display = "none";
    
    haveMainScreen = false;
    
    //Show RoomID
        
    directionsHeader.innerHTML =  "Are you using a main screen to create the game? (RECOMMENDED)";
    
    header.innerHTML =  "Enter this ID __" + randomRoomID + "__ on other players Devices to join game";
    
    directionsHeader.innerHTML =  "Wait for other players to join then enter your nickname below and Start the Game!";
    
    setTimeout(function(){ startGameButton.style.display = "block"; }, 3000);
    
    
    playerNameInput.style.display = "block";
    
    
    
    
})

startGameButton.addEventListener("click", function(){
    
      
    header.innerHTML = "Waiting for game to start...";
    directionsHeader.style.display = "none";
    playerNameInput.style.display = "none";
    startGameButton.style.display = "none";
    
    
    //CHANGE THE PAGE NUMBER HERE AND GET THE GAME GOING!!!
    //SET REFS
    
    if(haveMainScreen == false){
        
        isGameCreator = true;
        
        localPlayerName = playerNameInput.value;
        
        docRefRoom.doc(localPlayerName).set({
            playerName: localPlayerName,
            roomNumber: randomRoomID,
            score: 0
        })
        
        docRefGameData.update({players: increment});
        setTimeout(setPlayerNumber, 3000);
        
        docRefPlayer = firestore.collection(randomRoomID).doc(localPlayerName);
        
    }
    
    

    setTimeout(startTheGame, 5000);
    
    
})

function startTheGame(){
    
    
    
    
    docRefGameData.get().then(function(doc){
            if(doc.exists){
                const roomData = doc.data();
//                console.log("setting numGameQuestions to " + roomData.numQuestions);
//                numGameQuestions = roomData.numQuestions;
                playersInGame = roomData.players;
                
            }}).catch(function(error){
            console.log("error", error);
        });
    
    docRefPageNumber.update({
        pageNumber: 1
    })
    
    
    getRealTimeUpdates();
    
}

joinAGameButton.addEventListener("click", function(){
    
    //BACKGROUND MUSIC
    document.getElementById("backM").play();
    
    directionsHeader.innerHTML = "Enter your Room ID and nickname below and join the room!";
    
    //Hide create game and join game buttons
    startACreatedGameButton.style.display = "none";
    
    createGameButton.style.display = "none";
    
    joinAGameButton.style.display = "none";
    
    
    //Let player enter name and join room
    roomIDInput.style.display = "block";
    playerNameInput.style.display = "block"
    
    joinRoomButton.style.display = "block";
     //backButton.style.display = "block";
    
    
    
})

joinRoomButton.addEventListener("click", function(){
    
   // header.innerHTML = "Waiting for game to start...";
    directionsHeader.style.display = "none";
    
    //hide text fields and join room button
    roomIDInput.style.display = "none";
    playerNameInput.style.display = "none";
    
    joinRoomButton.style.display = "none";
    
    
    //Add player to room
    
    roomID = roomIDInput.value;
    
    
    localPlayerName = playerNameInput.value;
    
    docRefPlayer = firestore.collection(roomID).doc(localPlayerName);
    
    docRefPlayer.set({
            playerName: localPlayerName,
            roomNumber: roomID,
            score: 0
        })
    
    
    
    
    //const increment = firebase.firestore.FieldValue.increment(1);
    //console.log("what is room data" + docRefRoomData);
    docRefGameData = firestore.collection(roomID).doc("GameData");
    docRefPageNumber = firestore.collection(roomID).doc("PageNumber");
    docRefGameData.update({players: increment});
    docRefResponseData = firestore.collection(roomID).doc("ResponseData");
    
    docRefGameData.get().then(function(doc){
            if(doc.exists){
                
                header.innerHTML = "Waiting for game to start...";
                
                const roomData = doc.data();
                if(roomData.haveMainScreen == true){
                    haveMainScreen = true;
                }
                
                joinedGameName = roomData.gameName;
                
                docRefToGame = firestore.collection(joinedGameName);
                

            }else{
                console.log("no such");
                header.innerHTML = "The room entered does not exist...";
                
            }
        }).catch(function(error){
            console.log("error", error);
        });
    
//    firestore.collection(joinedGameName).doc("GameData").get().then(function(doc){
//        if(doc.exists){
//            const gameData = doc.data();
//            
//            numGameQuestions = gameData.numQuestions;
//        }
//    });
    
    
    
    setTimeout(setGameData, 1000);
    
    setTimeout(setPlayerNumber, 1000);
        
    setTimeout(getRealTimeUpdates, 5000);
    
    
})

function setGameData(){
        firestore.collection(joinedGameName).doc("GameData").get().then(function(doc){
        if(doc.exists){
            const gameData = doc.data();
            
            numGameQuestions = gameData.numQuestions;
        }
    });
}

function setPlayerNumber(){
    
    console.log("set the player number");
    docRefGameData.get().then(function(doc){
            if(doc.exists){
                const roomData = doc.data();
                localPlayerNumber = roomData.players;
                console.log("WTF");
                docRefPlayer.update({
                    playerNumber: localPlayerNumber
                })
                

            }else{
                console.log("no such");
            }
        }).catch(function(error){
            console.log("error", error);
        });
        
}

function checkIfMainScreen(){
    docRefGameData.get().then(function(doc){
            if(doc.exists){
                const roomData = doc.data();
                haveMainScreen = roomData.haveMainScreen;
                
                docRefPlayer.update({
                    playerNumber: localPlayerNumber
                })
                

            }else{
                console.log("no such");
            }
        }).catch(function(error){
            console.log("error", error);
        });
        
}

function playerScreenSetup(){
    
    header.style.display = "none";
    //set roomID, playername, and score
    roomIDOutput.innerText = "RoomID: " + roomID;
    playerNameOutput.innerText = "Player: " + localPlayerName;
    score.innerText = "Score: " + localPlayerScore;
    //show the roomID, playerName, and score
    roomIDOutput.style.display = "block";
    playerNameOutput.style.display = "block";
    score.style.display = "block";
    
    
    
}

function mainScreenSetup(){
      
    header.style.display = "none";
    //set roomID, playername, and score
    roomIDOutput.innerText = "RoomID: " + roomID;
    roomIDOutput.style.display = "block";
    
}


//=========================================================================================================
////====================================FUNCTIONALITY ============================================
//=========================================================================================================

//NEXT QUESTION BUTTON

buttonAdd10.addEventListener("click", function(){
    
    
    buttonAdd10.style.display = "none";
    nextPage();
    
    
    
})


//GO BACK BUTTON
function goBack() {
  window.history.go(-1);
}


//TIMER AND PROGRESS BAR
function startTimer(){
    //countdown.style.display = "block";
    var seconds = document.getElementById("countdown").textContent;
    var countdown = setInterval(function() {
        seconds--;
        document.getElementById("countdown").textContent = seconds;
        if (seconds <= 0){
            clearInterval(countdown);
            nextPage();
        }
    }, 1000);
}

var id;
function startCountdown(seconds) {
    myProgress.style.display = "block";
    var intervalAmount = parseInt(seconds, 10);
  var elem = document.getElementById("myBar");
  var width = 1;
  id = setInterval(frame, seconds);
  function frame() {
    if (width >= 100) {
        
         clearInterval(id);
      
        myProgress.style.display = "none";
        
        //MAKE SURE HIDE ALL EVEN IF DONT ANSWER QUESTION
            //questionOutput.style.display = "none";
            buttonA.style.display = "none"; 
            buttonB.style.display = "none";
            buttonC.style.display = "none";
            buttonD.style.display = "none";
            buttonAdd0.style.display = "none";
            buttonAdd1.style.display = "none";
            
               
            optionA.style.display = "none";
            optionB.style.display = "none";
            optionC.style.display = "none";
            optionD.style.display = "none";
            option1.style.display = "none";
            option2.style.display = "none";
    
    
        if((isMainScreen == true)){
            
        console.log("incrementing page numeb after countrdown");
            nextPage();
        }
        else if(haveMainScreen == false){
            if(isGameCreator==true){
                nextPage();
            }
            oneCall = 0;
        }
        
    } else {
      width++;
      elem.style.width = width + '%';
    }
  }
}

//NEXT PAGE
function nextPage(){
    
        console.log("incrementing page numebr");
       docRefPageNumber.update({pageNumber: increment});
        if(haveMainScreen == true){
            oneCall = 0;
        }
        if(isGameCreator==true){
            oneCall = 0;
        }
}

//END GAME
function endGame(){
       docRefPageNumber.update({pageNumber: 100});
}

//TIMES UP
function timesUp(){
            //questionOutput.style.display = "none";
            buttonA.style.display = "none"; 
            buttonB.style.display = "none";
            buttonC.style.display = "none";
            buttonD.style.display = "none";
            buttonAdd0.style.display = "none";
            buttonAdd1.style.display = "none";
}


//=========================================================================================================
//================================   REGULAR KAHOOT TRIVIA ================================================
//=========================================================================================================

var correctMCAnswerA;
var correctMCAnswerB;
var correctMCAnswerC;
var correctMCAnswerD;
var correctMCAnswer1;
var correctMCAnswer2;

var currentMCAnswer;

// FOR GAME WITHOUT A MAIN SCREEN
function getMCQuestion(id){
    header.style.display = "none";
    //Show question and buttons
    questionOutput.style.display = "block";
    //console.log("GETTING MC QUESTION");
    //show ABCD Buttons IFFFF
    
    
    
    
//    
//    buttonB.style.display = "block";
//    buttonC.style.display = "block";
//    buttonD.style.display = "block";
//    buttonAdd0.style.display = "block";
    //buttonAdd1.style.display = "block";
    
    console.log("docRefToGame = " + docRefToGame);

    //Getting trivia questions
    var questionNum = "Question" + (id.toString());

    var docRefTQ = docRefToGame.doc(questionNum);
    //var correctAnswer;
    
    //RESET RESPONSE # BEFORE GETTING QUESTION
    docRefResponseData.update({ responses: 0});

    docRefTQ.get().then(function(doc){
            if(doc.exists){
                const questionData = doc.data();
                
                correctMCAnswer = questionData.correctAnswer;
                //console.log("the doc data IS HERE= ", questionData.question);
                
                questionOutput.innerText = questionData.question;
                
                //All check if questionData.option == null before shwoing option
                
                if(questionData.optionA != "" && (questionData.optionA != null)){
                    buttonA.innerText = questionData.optionA;
                    buttonA.style.display = "block";
                }
                if(questionData.optionB != "" && (questionData.optionB != null)){
                    buttonB.innerText = questionData.optionB;
                    buttonB.style.display = "block";
                }
                if(questionData.optionC != "" && (questionData.optionC != null)){
                buttonC.innerText = questionData.optionC;
                     buttonC.style.display = "block";
                }
                if(questionData.optionD != "" && (questionData.optionD != null)){
                buttonD.innerText = questionData.optionD;
                     buttonD.style.display = "block";
                }
                if(questionData.option1 != "" && (questionData.option1 != null)){
                buttonAdd0.innerText = questionData.option1;
                 buttonAdd0.style.display = "block";
                }
                if(questionData.option2 != "" && (questionData.option2 != null)){
                    buttonAdd1.innerText = questionData.option2;
                    buttonAdd1.style.display = "block";
                }

                //make sure its working
                //console.log("the correct answer is saved as" + correctTriviaAnswer);


            }else{
                console.log("no such");
            }
        }).catch(function(error){
            console.log("error", error);
        });
    
    
      //=========================================================================================
    //======================================START TIMER========================================
    //=========================================================================================
    
    
}

//FOR GAME WITH MAIN SCREEN

function showMCQuestion(id){
    header.style.display = "none";
    //Show question and buttons
    questionOutput.style.display = "block";
    

    //Getting trivia questions
    const questionNum = "Question" + (id.toString());

    const docRefTQ = docRefToGame.doc(questionNum);
    //var correctAnswer;
    
    docRefResponseData.update({ responses: 0 });

    docRefTQ.get().then(function(doc){
            if(doc.exists){
                const questionData = doc.data();
                
                questionOutput.innerText = questionData.question;
                
                
                //CHECK ALL TRUE FALSES
                if(questionData.optionATF == true){
                    correctMCAnswerA = questionData.optionA;
                    
                    
                }
                if(questionData.optionBTF == true){
                    correctMCAnswerB = questionData.optionB;
                    
                }
                if(questionData.optionCTF == true){
                    correctMCAnswerC = questionData.optionC;
                    console.log("MADE IT IN");
                    
                }
                if(questionData.optionDTF == true){
                    correctMCAnswerD = questionData.optionD;
                    
                }
                if(questionData.option1TF == true){
                    correctMCAnswer1 = questionData.option1;
                    
                }
                if(questionData.option2TF == true){
                    correctMCAnswer2 = questionData.option2;
                    
                }
                
                
                
                
                
                //correctMCAnswer = questionData.correctAnswer;
    

            }else{
                console.log("no such");
            }
        }).catch(function(error){
            console.log("error", error);
        });
    
    
    console.log("the correct ansswer = " + correctMCAnswerA);   
    console.log("the correct ansswer = " + correctMCAnswerB); 
    console.log("the correct ansswer = " + correctMCAnswerC);
    console.log("the correct ansswer = " + correctMCAnswerD);  
    console.log("the correct ansswer = " + correctMCAnswer1);  
    console.log("the correct ansswer = " + correctMCAnswer2);
    
      //=========================================================================================
    //======================================START TIMER========================================
    //=========================================================================================
    
    
    
}

function showMCOptions(id){
    header.style.display = "none";
    
    console.log("GETTING INTO SHOW MC OPTIONSS");
   //show buttons
//    buttonA.style.display = "block";
//    buttonB.style.display = "block";
//    buttonC.style.display = "block";
//    buttonD.style.display = "block";
//    buttonAdd0.style.display = "block";
//    buttonAdd1.style.display = "block";

    //Getting trivia questions
    const questionNum = "Question" + (id.toString());

    const docRefTQ = firestore.collection(joinedGameName).doc(questionNum);
    //var correctAnswer;
    
    //RESET RESPONSE # BEFORE GETTING QUESTION
    docRefGameData.update({ responses: 0});
    

    docRefTQ.get().then(function(doc){
            if(doc.exists){
                const questionData = doc.data();
                
                //correctMCAnswer = questionData.correctAnswer;
                    //CHECK ALL TRUE FALSES
                if(questionData.optionATF == true){
                    correctMCAnswerA = questionData.optionA;
                    
                    
                }
                if(questionData.optionBTF == true){
                    correctMCAnswerB = questionData.optionB;
                    
                }
                if(questionData.optionCTF == true){
                    correctMCAnswerC = questionData.optionC;
                    console.log("MADE IT IN");
                    
                }
                if(questionData.optionDTF == true){
                    correctMCAnswerD = questionData.optionD;
                    
                }
                if(questionData.option1TF == true){
                    correctMCAnswer1 = questionData.option1;
                    
                }
                if(questionData.option2TF == true){
                    correctMCAnswer2 = questionData.option2;
                    
                }
                
                console.log("the doc data IS..." +  questionData.question + questionData.optionA + "option 1 = " + questionData.option1);
                
                questionOutput.style.display = "block";
                
                questionOutput.innerText = questionData.question;
                
                
                
                if(questionData.optionA != "" && (questionData.optionA != null)){
                    buttonA.innerText = questionData.optionA;
                    buttonA.style.display = "block";
                }
                if(questionData.optionB != ""  && (questionData.optionB != null)){
                    buttonB.innerText = questionData.optionB;
                    buttonB.style.display = "block";
                }
                if(questionData.optionC != ""  && (questionData.optionC != null)){
                buttonC.innerText = questionData.optionC;
                     buttonC.style.display = "block";
                }
                if(questionData.optionD != ""   && (questionData.optionD != null)){
                buttonD.innerText = questionData.optionD;
                     buttonD.style.display = "block";
                }
                if(questionData.option1 != "" && (questionData.option1 != null)){
                buttonAdd0.innerText = questionData.option1;
                 buttonAdd0.style.display = "block";
                }
                if(questionData.option2 != "" && (questionData.option2 != null)){
                    buttonAdd1.innerText = questionData.option2;
                    buttonAdd1.style.display = "block";
                }
                //make sure its working
                //console.log("the correct answer is saved as" + correctTriviaAnswer);


            }else{
                console.log("no such");
            }
        }).catch(function(error){
            console.log("error", error);
        });
    
}


//FOR MAIN SCREEN/INSTEAD OF BUTTONS, JUST VISUAL OPTIONS THAT LOOK SAME
function showMCQuestionOptions(id){
    header.style.display = "none";
    
    console.log("GETTING INTO SHOW MC OPTIONSS");
   //show buttons
//    buttonA.style.display = "block";
//    buttonB.style.display = "block";
//    buttonC.style.display = "block";
//    buttonD.style.display = "block";
//    buttonAdd0.style.display = "block";
//    buttonAdd1.style.display = "block";

    //Getting trivia questions
    const questionNum = "Question" + (id.toString());

    const docRefTQ = docRefToGame.doc(questionNum);
    //var correctAnswer;
    
    //RESET RESPONSE # BEFORE GETTING QUESTION
    docRefGameData.update({ responses: 0});
    

    docRefTQ.get().then(function(doc){
            if(doc.exists){
                const questionData = doc.data();
                
                correctMCAnswer = questionData.correctAnswer;
                
                console.log("the doc data IS..." +  questionData.question + questionData.optionA + "option 1 = " + questionData.option1);
                
                
                
                
                
                if(questionData.optionA != "" && (questionData.optionA != null)){
                optionA.innerText = questionData.optionA;
                    optionA.style.display = "block";
                }
                if(questionData.optionB != ""  && (questionData.optionB != null)){
                    optionB.innerText = questionData.optionB;
                    optionB.style.display = "block";
                }
                if(questionData.optionC != ""  && (questionData.optionC != null)){
                    optionC.innerText = questionData.optionC;
                     optionC.style.display = "block";
                }
                if(questionData.optionD != ""   && (questionData.optionD != null)){
                    optionD.innerText = questionData.optionD;
                     optionD.style.display = "block";
                }
                if(questionData.option1 != "" && (questionData.option1 != null)){
                    option1.innerText = questionData.option1;
                    option1.style.display = "block";
                }
                if(questionData.option2 != "" && (questionData.option2 != null)){
                    option2.innerText = questionData.option2;
                    option2.style.display = "block";
                }
                //make sure its working
                //console.log("the correct answer is saved as" + correctTriviaAnswer);


            }else{
                console.log("no such");
            }
        }).catch(function(error){
            console.log("error", error);
        });
}

//FOR checking click answer
function checkMCAnswer(buttonID){
    
    
       console.log("local score =====" + localPlayerScore);
    //HIDE STUFF
    //questionOutput.style.display = "none";
    buttonA.style.display = "none"; 
    buttonB.style.display = "none";
    buttonC.style.display = "none";
    buttonD.style.display = "none";
    buttonAdd0.style.display = "none";
    buttonAdd1.style.display = "none";
    
    optionA.style.display = "none";
    optionB.style.display = "none";
    optionC.style.display = "none";
    optionD.style.display = "none";
    option1.style.display = "none";
    option2.style.display = "none";
    
    header.style.display = "block";
    header.innerText = "waiting for others to answer";
    
    
    //console.log("option1 = " + option1.innerText + "and the correct option is " + correctMCAnswer);
    //const increment = firebase.firestore.FieldValue.increment(1);
    
    
    //docRefRoomData.update({ responses: increment });
    
    console.log("BUTTONID = " + buttonID);
    
    currentMCAnswer = document.getElementById(buttonID);
    
    console.log("currecnt Answer = " + currentMCAnswer.innerText + "the option answers are" + correctMCAnswerA + " " + correctMCAnswerB + " " + correctMCAnswerC + " " + correctMCAnswerD + " " + correctMCAnswer1 + " " + correctMCAnswer2)
    
    //CHECK ANSWER
    if((currentMCAnswer.innerText == correctMCAnswerA) || (currentMCAnswer.innerText == correctMCAnswerC) || (currentMCAnswer.innerText == correctMCAnswerC) || (currentMCAnswer.innerText == correctMCAnswerD) || (currentMCAnswer.innerText == correctMCAnswer1) || (currentMCAnswer.innerText == correctMCAnswer2)){
    
        docRefResponseData.get().then(function(doc){
            if(doc.exists){
                const responseData = doc.data();
                
                if(responseData.responses == 0){
                    latestScore = 100;
                    localPlayerScore +=100;
                    docRefResponseData.update({ responses: increment });
                } else{
                    latestScore = (90 - (responseData.responses));
                    localPlayerScore = localPlayerScore + latestScore;
                    docRefResponseData.update({ responses: increment });
                }
            }else{
                console.log("no such");
            }
        }).catch(function(error){
            console.log("error", error);
        });
        
        
        
    }else{
        latestScore = -1;
        //localPlayerScore = localPlayerScore -1;
        //changePlayerScore();
        //docRefResponseData.update({ responses: increment });
    }
                                      
//    docRefResponseData.update({ responses: increment });

    //setTimeout(checkForAllResponses, 1000);
    
    //CHECK FOR FASTING CORRECT ANSWER
    //if its correct and there are no responses yet/ they get +100,
    //if its correct and there are responses they get 100-responses
    
    
    
}

// FOR checking to see everyone answered
function checkForAllResponses(){

    
      docRefResponseData.get().then(function(doc){
            if(doc.exists){
                const responseData = doc.data();
                const currentResponses = responseData.responses;
                //const playersInGame = responseData.players;
                //changePlayerLives();
                
                console.log("RESPONSES so far = " + currentResponses + "CURRENT room size = " + roomSize);
                
                 console.log(responseData.responses + " RESPONSES");
                if(currentResponses == playersInGame){
                    
                    console.log(responseData.responses + " RESPONSES");
                    
                    //const increment = firebase.firestore.FieldValue.increment(1);
                    
                    clearInterval(id);
                    docRefPageNumber.update({ pageNumber: increment })
                    
                    //docRefResponseData.update({ responses: 0});
                    
                    console.log("RESET RESPONSEEEESSSS");
                }


            }else{
                console.log("no such");
            }
        }).catch(function(error){
            console.log("error", error);
        });
    
}

//SHOW CLASS ANSWERS
function showClassAnswers(){
        //CHECK ALL TRUE FALSES
    questionOutput.innerText = "The correct answer(s)... ";
        
                if(correctMCAnswerA != null){
                    questionOutput.innerText = questionOutput.innerText + correctMCAnswerA;
                    
                    
                }
                if(correctMCAnswerB != null){
                    questionOutput.innerText = questionOutput.innerText + correctMCAnswerB;
                    
                    
                }
    if(correctMCAnswerC != null){
                    questionOutput.innerText = questionOutput.innerText + correctMCAnswerC;
                    
                    
                }
    if(correctMCAnswerD != null){
                    questionOutput.innerText = questionOutput.innerText + correctMCAnswerD;
                    
                    
                }
    if(correctMCAnswer1 != null){
                    questionOutput.innerText = questionOutput.innerText + correctMCAnswer1;
                    
                    
                }
    if(correctMCAnswer2 != null){
                    questionOutput.innerText = questionOutput.innerText + correctMCAnswer2;
                    
                    
                }
//    questionOutput.innerText = "The correct answer(s)... " + correctMCAnswerA;
    
    
}


//=====================================  SCORING  ===================================
var localPlayerScore = 0;
var topScore = -100;
var topScorer;
var latestScore;

function changePlayerScore(){
    
    console.log("THE LOCAL SCORE ISSSSSS = " + localPlayerScore);
    
        //change the player score in database
          docRefPlayer.update({
                        score: localPlayerScore
                    }).catch(function(error){
                        console.error("got an error", error);
                    });
    
        //change the player lives displayed on site and tell whether right or wrong
        score.innerText = "Score: " + localPlayerScore;
    
        if(latestScore > 0){
        header.innerText = "You're Correct! (+" + latestScore + ")" ;
        }
        else if(latestScore < 0){
        header.innerText = "Your're Incorrect!";
        }
    
    
        
        
}

function showScoringLeader(){
            //KEEP TRACK OF LEADER
    header.style.display = "block";
    questionOutput.style.display = "none";
    
                firestore.collection(roomID).where("score", ">=", 0)
                    .get()
                    .then(function(querySnapshot) {
                        querySnapshot.forEach(function(doc) {
                            // doc.data() is never undefined for query doc snapshots
                            console.log(doc.id, " => ", doc.data());
                            var scoreData = doc.data();
                            
                            if(scoreData.score > topScore){
                                topScore = scoreData.score;
                                topScorer = scoreData.playerName;
                            }
                            
                            
                            console.log("player " + scoreData.playerName + " Score = " + topScore);
                            header.innerText = "WINNER IS " + topScorer + " with " + topScore + " points"
                            
                        });
                    })
                    .catch(function(error) {
                        console.log("Error getting documents: ", error);
                    });
    
    //header.innerText = "WINNER IS " + topScorer + " with " + topScore + " points";
    
    
}

//==================   GET RESULTS BUTTON

var playerNames = [];

function addPlayerDataToCSV(){
    firestore.collection(roomID).get()
                    .then(function(querySnapshot) {
                        querySnapshot.forEach(function(doc) {
                            // doc.data() is never undefined for query doc snapshots
                            console.log(doc.id, " => ", doc.data());
                            var playerData = doc.data();
                            
                            if(playerData.playerName != null){
                                var player = playerData.playerName;
                                console.log("player = " + player);
                                playerNames.push(player);
                                console.log("array " + playerNames);
                                
                            }
                            
                        });
                    })
                    .catch(function(error) {
                        console.log("Error getting documents: ", error);
                    });
}


function showGetResultsButton(){
    buttonAdd20.style.display = "block";
}

buttonAdd20.addEventListener("click", function(){
    
buttonAdd20.style.display = "none";    
    
const csvAsSingleColumn = playerNames.join('\r\n'); 
//Then you can do something like this:

//function toCsv(input) {
//  return input.map(row => row.join(',')).join('\n');
//}

//const csvString = toCsv(input);
let link = document.createElement('a');
link.id = 'download-csv';
link.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(csvAsSingleColumn));
link.setAttribute('download', 'playernames.csv');
document.body.appendChild(link);
document.querySelector('#download-csv').click();
    

    
})






//now just look for updates to the page number and call functions from there
//getRealTimeUpdates();
//====================================== UPDATING SCREEN ================================================
var oneCall = 0;


function updateScreen(doc){

    if(doc && doc.exists){
        const roomData = doc.data();
        
        //FOR NON MAIN SCREEN GAME
       console.log("PAGE IS = " + roomData.pageNumber + "and numQuestions are = " + numGameQuestions);
        console.log("Game Creator = " + isGameCreator);
        console.log("Has main screen? = " + haveMainScreen);
        console.log("is main screen = " + isMainScreen);
        
        
        if(haveMainScreen == false && (oneCall == 0)){
            // AFTER GAME IS STARTED
            if((roomData.pageNumber == 1) && (numGameQuestions >= 1)){
                
                
                playerScreenSetup();
                console.log("FIRST PAGE");
                
                getMCQuestion(1);
                
                startCountdown(300);
                    
                    oneCall++;
                
                
            }
            else if((roomData.pageNumber == 2)){
                
                
                changePlayerScore();
                //ADD IN A QUESTION FEEDBACK AND TIMER BEFORE NEXT QUESTIoN APPEARS
                
                if(isGameCreator == true){
                buttonAdd10.style.display = "block";
                oneCall++;
                }
                
                showClassAnswers();
                //oneCall++;
                
                //buttonAdd20.style.display = "block";
                
                //changePlayerScore();
                //getMCQuestion(2);
                
                //startCountdown(100);
                console.log("HITTING HERE");


            }
              else if((roomData.pageNumber == 3) && (numGameQuestions >= 2)){
                
                //changePlayerScore();
                getMCQuestion(2);
                
                startCountdown(300);
                  oneCall++;
                  

            }
            else if(roomData.pageNumber ==3){
                     console.log("GAME OVER!!");
                    showScoringLeader();
                    
                    //addPlayerDataToCSV();
                    
                    if(isGameCreator){
                        
                        addPlayerDataToCSV();

                        setTimeout(showGetResultsButton, 2000);
                    }
                        oneCall++;
                
                
                }
             else if((roomData.pageNumber == 4)){
                
                
                changePlayerScore();
                //ADD IN A QUESTION FEEDBACK AND TIMER BEFORE NEXT QUESTIoN APPEARS
                
                 if(isGameCreator == true){
                buttonAdd10.style.display = "block";
                     oneCall++;
                 }
                 
                 showClassAnswers();
                 //oneCall++;
                
                //changePlayerScore();
                //getMCQuestion(2);
                
                //startCountdown(100);

            }
              else if((roomData.pageNumber == 5) && (numGameQuestions >= 3)){
                
                //changePlayerScore();
                getMCQuestion(3);
                
                startCountdown(300);
                  oneCall++;

            }
            else if(roomData.pageNumber ==5){
                     console.log("GAME OVER!!");
                    showScoringLeader();
                
                if(isGameCreator){
                        
                        addPlayerDataToCSV();

                        setTimeout(showGetResultsButton, 2000);
                    }
                oneCall++;
                }
             else if((roomData.pageNumber == 6)){
                
                
                changePlayerScore();
                //ADD IN A QUESTION FEEDBACK AND TIMER BEFORE NEXT QUESTIoN APPEARS
                if(isGameCreator == true){
                buttonAdd10.style.display = "block";
                    oneCall++;
                }
                 
                 showClassAnswers();
                
                //changePlayerScore();
                //getMCQuestion(2);
                
                //startCountdown(100);

            }
              else if((roomData.pageNumber == 7) && (numGameQuestions >= 4)){
                
                //changePlayerScore();
                getMCQuestion(4);
                
                startCountdown(300);
                  oneCall++;

            }
            else if((roomData.pageNumber == 7)){
                    console.log("GAMEOVER");
                
                    console.log("showing leader function");
                    showScoringLeader();
                
                if(isGameCreator){
                        
                        addPlayerDataToCSV();

                        setTimeout(showGetResultsButton, 2000);
                    }
                
                    //header.innerText = "WINNER IS " + topScorer + " with " + topScore + " points";
                
                oneCall++;
                
                }
            else if((roomData.pageNumber == 8)){
                
                
                changePlayerScore();
                //ADD IN A QUESTION FEEDBACK AND TIMER BEFORE NEXT QUESTIoN APPEARS
                if(isGameCreator == true){
                buttonAdd10.style.display = "block";
                    oneCall++;
                }
                showClassAnswers();
                

            }
              else if((roomData.pageNumber == 9) && (numGameQuestions >= 5)){
                
                //changePlayerScore();
                getMCQuestion(5);
                
                startCountdown(300);
                  oneCall++;

            }
            else if((roomData.pageNumber == 9)){
                    console.log("GAMEOVER");
                
                    console.log("showing leader function");
                    showScoringLeader();
                
                if(isGameCreator){
                        
                        addPlayerDataToCSV();

                        setTimeout(showGetResultsButton, 2000);
                    }
                
                oneCall++;
                
                }
             else if((roomData.pageNumber == 10)){
                
                
                changePlayerScore();
                //ADD IN A QUESTION FEEDBACK AND TIMER BEFORE NEXT QUESTIoN APPEARS
                if(isGameCreator == true){
                buttonAdd10.style.display = "block";
                    oneCall++;
                }
                 showClassAnswers();
                

            }
              else if((roomData.pageNumber == 11) && (numGameQuestions >= 6)){
                
                //changePlayerScore();
                getMCQuestion(6);
                
                startCountdown(300);

            }
            else if((roomData.pageNumber == 11)){
                    console.log("GAMEOVER");
                
                    console.log("showing leader function");
                    showScoringLeader();
                
                if(isGameCreator){
                        
                        addPlayerDataToCSV();

                        setTimeout(showGetResultsButton, 2000);
                    }
                
                }
             else if((roomData.pageNumber == 12)){
                
                
                changePlayerScore();
                //ADD IN A QUESTION FEEDBACK AND TIMER BEFORE NEXT QUESTIoN APPEARS
                if(isGameCreator == true){
                buttonAdd10.style.display = "block";
                }
                 showClassAnswers();
                

            }
              else if((roomData.pageNumber == 13) && (numGameQuestions >= 7)){
                
                //changePlayerScore();
                getMCQuestion(7);
                
                startCountdown(300);

            }
            else if((roomData.pageNumber == 13)){
                    console.log("GAMEOVER");
                
                    console.log("showing leader function");
                    showScoringLeader();
                
                if(isGameCreator){
                        
                        addPlayerDataToCSV();

                        setTimeout(showGetResultsButton, 2000);
                    }
                
                }
             else if((roomData.pageNumber == 14)){
                
                
                changePlayerScore();
                //ADD IN A QUESTION FEEDBACK AND TIMER BEFORE NEXT QUESTIoN APPEARS
                if(isGameCreator == true){
                buttonAdd10.style.display = "block";
                }
                 showClassAnswers();
                

            }
              else if((roomData.pageNumber == 15) && (numGameQuestions >= 8)){
                
                //changePlayerScore();
                getMCQuestion(8);
                
                startCountdown(300);

            }
            else if((roomData.pageNumber == 15)){
                    console.log("GAMEOVER");
                
                    console.log("showing leader function");
                    showScoringLeader();
                
                if(isGameCreator){
                        
                        addPlayerDataToCSV();

                        setTimeout(showGetResultsButton, 2000);
                    }
                
                }
            
             else if((roomData.pageNumber == 16)){
                
                
                changePlayerScore();
                //ADD IN A QUESTION FEEDBACK AND TIMER BEFORE NEXT QUESTIoN APPEARS
                if(isGameCreator == true){
                buttonAdd10.style.display = "block";
                }
                 showClassAnswers();
                

            }
              else if((roomData.pageNumber == 17) && (numGameQuestions >= 9)){
                
                //changePlayerScore();
                getMCQuestion(9);
                
                startCountdown(300);

            }
            else if((roomData.pageNumber == 17)){
                    console.log("GAMEOVER");
                
                    console.log("showing leader function");
                    showScoringLeader();
                
                if(isGameCreator){
                        
                        addPlayerDataToCSV();

                        setTimeout(showGetResultsButton, 2000);
                    }
                
                }
             else if((roomData.pageNumber == 18)){
                
                
                changePlayerScore();
                //ADD IN A QUESTION FEEDBACK AND TIMER BEFORE NEXT QUESTIoN APPEARS
                if(isGameCreator == true){
                buttonAdd10.style.display = "block";
                }
                 showClassAnswers();
                

            }
              else if((roomData.pageNumber == 19) && (numGameQuestions >= 10)){
                
                //changePlayerScore();
                getMCQuestion(10);
                
                startCountdown(300);

            }
            else if((roomData.pageNumber == 19)){
                    console.log("GAMEOVER");
                
                    console.log("showing leader function");
                    showScoringLeader();
                
                if(isGameCreator){
                        
                        addPlayerDataToCSV();

                        setTimeout(showGetResultsButton, 2000);
                    }
                
                }
            else if(roomData.pageNumber == 20){
                  changePlayerScore();
                //ADD IN A QUESTION FEEDBACK AND TIMER BEFORE NEXT QUESTIoN APPEARS
                if(isGameCreator == true){
                buttonAdd10.style.display = "block";
                }
                 showClassAnswers();
            }
             else if(roomData.pageNumber == 21){
                showScoringLeader();
                 
                 if(isGameCreator){
                        
                        addPlayerDataToCSV();

                        setTimeout(showGetResultsButton, 2000);
                    }
            }
             else if(roomData.pageNumber == 100){
                
             
                     //END OF GAME LEADERBOARD OR SOMETHING
                 
                    

            }
            else {
                console.log("GAME OVER");
                
                
                //changePlayerScore();
                //buttonAdd24.style.display = "block";
                
                
            }
            
        }
        
        //FOR MAIN SCREEN GAME
        else if(haveMainScreen == true){
            
            console.log("main screen gameee");
            //checkForAllResponses();
            
            //DISPLAY ON MAIN SCREEN
            if(isMainScreen == true && (oneCall == 0)){
                //oneCall++;
                
                if((roomData.pageNumber == 1) && (numGameQuestions >= 1)){
                    
//                    if(oneCall == 0){
                        mainScreenSetup();
                        showMCQuestion(1);
                        showMCQuestionOptions(1);        
                        startCountdown(300);
                        oneCall++;
                    //}
                

                }

                else if((roomData.pageNumber == 2)){
                    
                    showClassAnswers();
                    buttonAdd10.style.display = "block";
                    console.log("2ND PAGE");
                    oneCall++;
                    
                }
                else if((roomData.pageNumber == 3) && (numGameQuestions >= 2)){

                    console.log("3RD PAGE");
                    
                    //if(oneCall ==0){
                        showMCQuestion(2);
                        showMCQuestionOptions(2);
                        startCountdown(300);
                        oneCall++;
                    //}

                }
                else if(roomData.pageNumber ==3){
                     console.log("GAME OVER!!");
                    showScoringLeader();
                    addPlayerDataToCSV();
                    setTimeout(showGetResultsButton, 2000);
                    oneCall++;
                    
                }
                else if((roomData.pageNumber == 4)){

                    showClassAnswers();
                    buttonAdd10.style.display = "block";
                    oneCall++;
            
                }
                else if((roomData.pageNumber == 5) && (numGameQuestions >= 3)){

                    //if(oneCall == 0){
                    showMCQuestion(3);
                    showMCQuestionOptions(3);
                    startCountdown(300);
                    oneCall++;
                    //}

                }
                else if(roomData.pageNumber ==5){
                     console.log("GAME OVER!!");
                    showScoringLeader();
                    addPlayerDataToCSV();
                    setTimeout(showGetResultsButton, 2000);
                    oneCall++;
                }
                else if((roomData.pageNumber == 6)){
                    
                    showClassAnswers();
                    buttonAdd10.style.display = "block";
                    
                    oneCall++;
                    
                    console.log("2ND PAGE");
                    //showMCQuestion(2);
                    
                    //startCountdown(100);

                }
                else if((roomData.pageNumber == 7) && (numGameQuestions >= 4)){

                    console.log("3RD PAGE");
                    showMCQuestion(4);
                    showMCQuestionOptions(4);
                    
                    startCountdown(300);
                    oneCall++;

                }
                else if((roomData.pageNumber == 7)){
                    console.log("GAMEOVER");
                    showScoringLeader();
                    addPlayerDataToCSV();
                    setTimeout(showGetResultsButton, 2000);
                    oneCall++;
                    
                }
                else if((roomData.pageNumber == 8)){
                    
                    showClassAnswers();
                    buttonAdd10.style.display = "block";
                    
                    oneCall++;
                    
                    console.log("2ND PAGE");
                    //showMCQuestion(2);
                    
                    //startCountdown(100);

                }
                else if((roomData.pageNumber == 9) && (numGameQuestions >= 5)){

                    console.log("3RD PAGE");
                    showMCQuestion(5);
                    showMCQuestionOptions(5);
                    
                    startCountdown(300);
                    oneCall++;

                }
                else if((roomData.pageNumber == 9)){
                    console.log("GAMEOVER");
                    showScoringLeader();
                    addPlayerDataToCSV();
                    setTimeout(showGetResultsButton, 2000);
                    oneCall++;
                    
                }
                else if((roomData.pageNumber == 10)){
                    
                    showClassAnswers();
                    buttonAdd10.style.display = "block";
                    
                    oneCall++;
                    
                    console.log("2ND PAGE");
                    //showMCQuestion(2);
                    
                    //startCountdown(100);

                }
                else if((roomData.pageNumber == 11) && (numGameQuestions >= 6)){

                    console.log("3RD PAGE");
                    showMCQuestion(6);
                    showMCQuestionOptions(6);
                    
                    startCountdown(300);
                    oneCall++;

                }
                else if((roomData.pageNumber == 11)){
                    console.log("GAMEOVER");
                    showScoringLeader();
                    addPlayerDataToCSV();
                    setTimeout(showGetResultsButton, 2000);
                    oneCall++;
                    
                }
                else if((roomData.pageNumber == 12)){
                    
                    showClassAnswers();
                    buttonAdd10.style.display = "block";
                    
                    oneCall++;
                    
                    console.log("2ND PAGE");
                    //showMCQuestion(2);
                    
                    //startCountdown(100);

                }
                else if((roomData.pageNumber == 13) && (numGameQuestions >= 7)){

                    console.log("3RD PAGE");
                    showMCQuestion(7);
                    showMCQuestionOptions(7);
                    
                    startCountdown(300);
                    oneCall++;

                }
                else if((roomData.pageNumber == 13)){
                    console.log("GAMEOVER");
                    showScoringLeader();
                    addPlayerDataToCSV();
                    setTimeout(showGetResultsButton, 2000);
                    oneCall++;
                    
                }
                else if((roomData.pageNumber == 14)){
                    
                    showClassAnswers();
                    buttonAdd10.style.display = "block";
                    
                    
                    
                    console.log("2ND PAGE");
                    //showMCQuestion(2);
                    
                    //startCountdown(100);
                    oneCall++;

                }
                else if((roomData.pageNumber == 15) && (numGameQuestions >= 8)){

                    console.log("3RD PAGE");
                    showMCQuestion(8);
                    showMCQuestionOptions(8);
                    
                    startCountdown(300);
                    oneCall++;

                }
                else if((roomData.pageNumber == 15)){
                    console.log("GAMEOVER");
                    showScoringLeader();
                    addPlayerDataToCSV();
                    setTimeout(showGetResultsButton, 2000);
                    oneCall++;
                    
                }
                else if((roomData.pageNumber == 16)){
                    
                    showClassAnswers();
                    buttonAdd10.style.display = "block";
                    
                    oneCall++;
                    
                    console.log("2ND PAGE");
                    //showMCQuestion(2);
                    
                    //startCountdown(100);

                }
                else if((roomData.pageNumber == 17) && (numGameQuestions >= 9)){

                    console.log("3RD PAGE");
                    showMCQuestion(9);
                    showMCQuestionOptions(9);
                    
                    startCountdown(300);
                    oneCall++;

                }
                else if((roomData.pageNumber == 17)){
                    console.log("GAMEOVER");
                    showScoringLeader();
                    addPlayerDataToCSV();
                    setTimeout(showGetResultsButton, 2000);
                    oneCall++;
                    
                }
                else if((roomData.pageNumber == 18)){
                    
                    showClassAnswers();
                    buttonAdd10.style.display = "block";
                    
                    
                    
                    console.log("2ND PAGE");
                    oneCall++;
                    //showMCQuestion(2);
                    
                    //startCountdown(100);

                }
                else if((roomData.pageNumber == 19) && (numGameQuestions >= 10)){

                    console.log("3RD PAGE");
                    showMCQuestion(10);
                    showMCQuestionOptions(10);
                    
                    startCountdown(300);
                    oneCall++;

                }
                else if((roomData.pageNumber == 19)){
                    console.log("GAMEOVER");
                    showScoringLeader();
                    addPlayerDataToCSV();
                    setTimeout(showGetResultsButton, 2000);
                    
                    oneCall++;
                    
                }
                else if(roomData.pageNumber ==20){
                    showClassAnswers();
                    buttonAdd10.style.display = "block";
                    oneCall++;
                    
                }
                
                else{
                    
                    //buttonAdd10.display.style = "block";
                    
                    
                    console.log("update");
                    
                    //SHOW END OF GAME SOMETHING
                    //KEEP TRACK OF SCORING
                    
                }
                
                
            }
            //DISPLAY ON SIDE SCREEN
            else if(isMainScreen == false){
                
                if((roomData.pageNumber == 1) && (numGameQuestions >=1) ){
                    playerScreenSetup();
                    console.log("FIRST PAGE");
                    
                    showMCOptions(1);

                }
                else if((roomData.pageNumber == 2)){

                    changePlayerScore();
                    timesUp();
                    showClassAnswers();
                    console.log("2ND PAGE");
                    //showMCOptions(2);
                    
                    //buttonAdd10.style.display = "block";

                }
                else if((roomData.pageNumber == 3) && (numGameQuestions >=2) ){

                    //changePlayerScore();
                    showMCOptions(2);
                    
                    console.log("3RD PAGE");
                    //showMCOptions(3);

                }
                else if(roomData.pageNumber ==3){
                     console.log("GAME OVER!!");
                    showScoringLeader();
                }
                  else if((roomData.pageNumber == 4)){

                    changePlayerScore();
                    timesUp();
                      showClassAnswers();
                    console.log("2ND PAGE");
                    //showMCOptions(2);
                    
                    //buttonAdd10.style.display = "block";

                }
                else if((roomData.pageNumber == 5) && (numGameQuestions >=3) ){

                    //changePlayerScore();
                    showMCOptions(3);
                    
                    console.log("3RD PAGE");
                    //showMCOptions(3);

                }
                else if(roomData.pageNumber ==5){
                     console.log("GAME OVER!!");
                    showScoringLeader();
                }
                  else if((roomData.pageNumber == 6)){

                    changePlayerScore();
                    timesUp();
                      showClassAnswers();
                    console.log("2ND PAGE");
                    //showMCOptions(2);
                    
                    //buttonAdd10.style.display = "block";

                }
                else if((roomData.pageNumber == 7) && (numGameQuestions >=4) ){

                    //changePlayerScore();
                    showMCOptions(4);
                    
                    console.log("3RD PAGE");
                    //showMCOptions(3);

                }
                else if(roomData.pageNumber ==7){
                     console.log("GAME OVER!!");
                    showScoringLeader();
                }
                else if((roomData.pageNumber == 8)){

                    changePlayerScore();
                    timesUp();
                    showClassAnswers();
                    console.log("2ND PAGE");
                    //showMCOptions(2);
                    
                    //buttonAdd10.style.display = "block";

                }
                else if((roomData.pageNumber == 9) && (numGameQuestions >=5) ){

                    //changePlayerScore();
                    showMCOptions(5);
                    
                    console.log("3RD PAGE");
                    //showMCOptions(3);

                }
                else if(roomData.pageNumber ==9){
                     console.log("GAME OVER!!");
                    showScoringLeader();
                }
                  else if((roomData.pageNumber == 10)){

                    changePlayerScore();
                    timesUp();
                      showClassAnswers();
                    console.log("2ND PAGE");
                    //showMCOptions(2);
                    
                    //buttonAdd10.style.display = "block";

                }
                else if((roomData.pageNumber == 11) && (numGameQuestions >=6) ){

                    //changePlayerScore();
                    showMCOptions(6);
                    
                    console.log("3RD PAGE");
                    //showMCOptions(3);

                }
                else if(roomData.pageNumber ==11){
                     console.log("GAME OVER!!");
                    showScoringLeader();
                }
                else if((roomData.pageNumber == 12)){

                    changePlayerScore();
                    timesUp();
                    showClassAnswers();
                    console.log("2ND PAGE");
                    //showMCOptions(2);
                    
                    //buttonAdd10.style.display = "block";

                }
                else if((roomData.pageNumber == 13) && (numGameQuestions >=7) ){

                    //changePlayerScore();
                    showMCOptions(7);
                    
                    console.log("3RD PAGE");
                    //showMCOptions(3);

                }
                else if(roomData.pageNumber ==13){
                     console.log("GAME OVER!!");
                    showScoringLeader();
                }
                else if((roomData.pageNumber == 14)){

                    changePlayerScore();
                    timesUp();
                    showClassAnswers();
                    console.log("2ND PAGE");
                    //showMCOptions(2);
                    
                    //buttonAdd10.style.display = "block";

                }
                else if((roomData.pageNumber == 15) && (numGameQuestions >=8) ){

                    //changePlayerScore();
                    showMCOptions(8);
                    
                    console.log("3RD PAGE");
                    //showMCOptions(3);

                }
                else if(roomData.pageNumber ==15){
                     console.log("GAME OVER!!");
                    showScoringLeader();
                }
                else if((roomData.pageNumber == 16)){

                    changePlayerScore();
                    timesUp();
                    showClassAnswers();
                    console.log("2ND PAGE");
                    //showMCOptions(2);
                    
                    //buttonAdd10.style.display = "block";

                }
                else if((roomData.pageNumber == 17) && (numGameQuestions >=9) ){

                    //changePlayerScore();
                    showMCOptions(9);
                    
                    console.log("3RD PAGE");
                    //showMCOptions(3);

                }
                else if(roomData.pageNumber ==17){
                     console.log("GAME OVER!!");
                    showScoringLeader();
                }
                else if((roomData.pageNumber == 18)){

                    changePlayerScore();
                    timesUp();
                    showClassAnswers();
                    console.log("2ND PAGE");
                    //showMCOptions(2);
                    
                    //buttonAdd10.style.display = "block";

                }
                else if((roomData.pageNumber == 19) && (numGameQuestions >=10) ){

                    //changePlayerScore();
                    showMCOptions(10);
                    
                    console.log("3RD PAGE");
                    //showMCOptions(3);

                }
                else if(roomData.pageNumber ==19){
                     console.log("GAME OVER!!");
                    showScoringLeader();
                }
                else if(roomData.pageNumber = 100){
                    
                    //GAME OVER SCREEN
                    
                }
                else{
                    console.log("updat");
                    
                    //changePlayerScore();
                    //buttonAdd24.style.display = "block";
                    
                    
                }
            }
            
        }
        
        
    }
}


getRealTimeUpdates = function () {
    console.log("DocRefSNAPSHOT= " + (docRefGameData).toString());
    docRefPageNumber.onSnapshot( function(doc){
        //console.log("MADE IT INTO update screen");
        updateScreen(doc);
    });
}

