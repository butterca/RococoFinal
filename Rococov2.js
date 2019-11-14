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




////=============================Creating References to Database===============================
//Room Reference -
var docRefRoom;
var docRefGameData;
var docRefResponseData;

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



////AUDIO
//
//var backmusic = document.getElementById("player");
//backmusic.play();




//===================================CREATE GAME/START GAME/JOIN GAME======================================



var currentQuestion = "question1Input";
var currentQuestionOptionA = "question1OptionAInput";
var currentQuestionOptionB = "question1OptionBInput";
var currentQuestionOptionC = "question1OptionCInput";
var currentQuestionOptionD = "question1OptionDInput";
var currentQuestionOption1 = "question1Option1Input";
var currentQuestionOption2 = "question1Option2Input";
var currentQuestionCorrectAnswer = "question1CorrectAnswerInput";

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
    question1CorrectAnswerInput.style.display = "block";
//    question1CorrectAnswerAButton.style.display = "block";
//    question1CorrectAnswerBButton.style.display = "block";
//    question1CorrectAnswerCButton.style.display = "block";
//    question1CorrectAnswerDButton.style.display = "block";
//    question1CorrectAnswer1Button.style.display = "block";
//    question1CorrectAnswer2Button.style.display = "block";
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

var questionNumToAdd = 1;


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
    console.log("CLICKED1");
    
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
        document.getElementById(currentQuestionCorrectAnswer).style.display = "none";
        
        //SHOW QUESTION1
        question1.style.display = "block";
        question1Input.style.display = "block";
        question1OptionAInput.style.display = "block";
        question1OptionBInput.style.display = "block";
        question1OptionCInput.style.display = "block";
        question1OptionDInput.style.display = "block";
        question1Option1Input.style.display = "block";
        question1Option2Input.style.display = "block";
        question1CorrectAnswerInput.style.display = "block";
        
        //CHANGE Question1 back to current
        currentQuestion = "question1Input";
        currentQuestionOptionA = "question1OptionAInput";
        currentQuestionOptionB = "question1OptionBInput";
        currentQuestionOptionC = "question1OptionCInput";
        currentQuestionOptionD = "question1OptionDInput";
        currentQuestionOption1 = "question1Option1Input";
        currentQuestionOption2 = "question1Option2Input";
        currentQuestionCorrectAnswer = "question1CorrectAnswerInput";
        
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
        currentQuestionCorrectAnswer = buttonID + "CorrectAnswerInput";
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
    document.getElementById(currentQuestionCorrectAnswer).style.display = "none";
    
    //SHOW THIS ONE
    //var questionOptionA = buttonID + "OptionA";
    
    document.getElementById(buttonID + "Input").style.display = "block";
    document.getElementById(buttonID + "OptionAInput").style.display = "block";
    document.getElementById(buttonID+ "OptionBInput").style.display = "block";
    document.getElementById(buttonID + "OptionCInput").style.display = "block";
    document.getElementById(buttonID + "OptionDInput").style.display = "block";
    document.getElementById(buttonID + "Option1Input").style.display = "block";
    document.getElementById(buttonID + "Option2Input").style.display = "block";
    document.getElementById(buttonID + "CorrectAnswerInput").style.display = "block";
    
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


function addQuestion(questionNumToAdd){
    console.log(currentQuestionCorrectAnswer);
    
    //HIDE CURRENT QUESTION STUFF
    document.getElementById(currentQuestion).style.display = "none";
    document.getElementById(currentQuestionOptionA).style.display = "none";
    document.getElementById(currentQuestionOptionB).style.display = "none";
    document.getElementById(currentQuestionOptionC).style.display = "none";
    document.getElementById(currentQuestionOptionD).style.display = "none";
    document.getElementById(currentQuestionOption1).style.display = "none";
    document.getElementById(currentQuestionOption2).style.display = "none";
    document.getElementById(currentQuestionCorrectAnswer).style.display = "none";
    
    
    
    
    //CREATE NEW QUESTION STUFF
    
    var questionSelector = document.createElement("BUTTON");
    questionSelector.innerText = "Question " + questionNumToAdd;
    questionSelector.id = "question" + questionNumToAdd;
    document.body.appendChild(questionSelector);
    
    //questionSelector.onclick = showQuestionInputs(this.id);
    
    document.getElementById("question" + questionNumToAdd).onclick = doSomething;
    
    
    var qInput = document.createElement("INPUT");
    qInput.setAttribute("type", "textfield");
    qInput.id = "question" + questionNumToAdd + "Input";
    qInput.placeholder = "Enter Question " + questionNumToAdd + " here";
    //x.style.display = "block";
    document.body.appendChild(qInput);
    
    var qOAInput = document.createElement("INPUT");
    qOAInput.setAttribute("type", "textfield");
    qOAInput.id = "question" + questionNumToAdd + "OptionAInput";
    qOAInput.placeholder = "Enter Option A here";
    document.body.appendChild(qOAInput);
    
     var qOBInput = document.createElement("INPUT");
    qOBInput.setAttribute("type", "textfield");
    qOBInput.id = "question" + questionNumToAdd + "OptionBInput";
    qOBInput.placeholder = "Enter Option B here";
    document.body.appendChild(qOBInput);
    
     var qOCInput = document.createElement("INPUT");
    qOCInput.setAttribute("type", "textfield");
    qOCInput.id = "question" + questionNumToAdd + "OptionCInput";
    qOCInput.placeholder = "Enter Option C here";
    document.body.appendChild(qOCInput);
    
     var qODInput = document.createElement("INPUT");
    qODInput.setAttribute("type", "textfield");
    qODInput.id = "question" + questionNumToAdd + "OptionDInput";
    qODInput.placeholder = "Enter Option D here";
    document.body.appendChild(qODInput);
    
     var qO1Input = document.createElement("INPUT");
    qO1Input.setAttribute("type", "textfield");
    qO1Input.id = "question" + questionNumToAdd + "Option1Input";
    qO1Input.placeholder = "Enter Option 1 here";
    document.body.appendChild(qO1Input);
    
     var qO2Input = document.createElement("INPUT");
    qO2Input.setAttribute("type", "textfield");
    qO2Input.id = "question" + questionNumToAdd + "Option2Input";
    qO2Input.placeholder = "Enter Option 2 here";
    document.body.appendChild(qO2Input);
    
    var qCAInput = document.createElement("INPUT");
    qCAInput.setAttribute("type", "textfield");
    qCAInput.id = "question" + questionNumToAdd + "CorrectAnswerInput";
    qCAInput.placeholder = "Enter correct answer here";
    document.body.appendChild(qCAInput);
    
    
    //RESET CURRENT QUESTION VARIABLES
    
    currentQuestion = qInput.id;
    currentQuestionOptionA = qOAInput.id;
    currentQuestionOptionB = qOBInput.id;
    currentQuestionOptionC = qOCInput.id;
    currentQuestionOptionD = qODInput.id;
    currentQuestionOption1 = qO1Input.id;
    currentQuestionOption2 = qO2Input.id;
    currentQuestionCorrectAnswer = qCAInput.id;
    
    console.log("ADD QUESTION" + currentQuestion);
    
    //questionNumToAdd++;
    
    console.log(questionNumToAdd);
    
    //Create a function
    
    
}



var docRefCreatedGame;
doneCreatingGameButton.addEventListener("click", function(){
    
    //Get all user input and store it in variables
    var createdGame = createdGameName.value;
    var question1 = question1Input.value;
    var question1OptionA = question1OptionAInput.value;
    var question1OptionB = question1OptionBInput.value;
    var question1OptionC = question1OptionCInput.value;
    var question1OptionD = question1OptionDInput.value;
    var question1Option1 = question1Option1Input.value;
    var question1Option2 = question1Option2Input.value;
    var question1CorrectAnswer = question1CorrectAnswerInput.value;
    
    
    
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
        var curQCATA = document.getElementById(currentQuestionCATA).value;
        
        //HERE IS WHERE YOU WOULD CHECK TO MAKE SURE ALL THE VALUES HAVE BEEN ENTERED RIGHT
        //AND THE GAME IS PLAYABLE, IF NOT, YOU GOTTA BREAK OUT AND LET THE USER KNOW TO FIX
        //THEIR FIELD
        
        
    docRefCreatedGame.doc(questionDoc).set({
        question: curQuestion,
        optionA: curQOATA,
        optionB: curQOBTA,
        optionC: curQOCTA,
        optionD: curQODTA,
        option1: curQO1TA,
        option2: curQO2TA,
        correctAnswer: curQCATA
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
    document.getElementById(currentQuestionCorrectAnswer).style.display = "none";
    
      for(var i = 1; i<=questionNumToAdd; i ++){
          
          document.getElementById("question" + i).style.display = "none";
          
          
    }
    
    directionsHeader.style.display = "block";
    
    directionsHeader.innerText = "Successfully Created Game!  To play game press Start A Game and Type in your game name: " + createdGame + " and you will be given a game code for other players to enter.";
    
    
})







//const randomRoomID = "1234";
const randomRoomID = (Math.floor(Math.random() * 10000) + 10000).toString().substring(1);
console.log(randomRoomID); 

var roomID;


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

var docRefToGame;
var numGameQuestions = 0;
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
    


// GLOBAL BOOLEAN FOR IF HAVE A MAIN SCREEN

var haveMainScreen = false;
var isMainScreen = false;
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

var localPlayerName;
var roomSize = 0;
//var roomID;
var playersInGame = 0;
var isGameCreator = false;

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
                playerInGame = roomData.players;
                
            }}).catch(function(error){
            console.log("error", error);
        });
    
    docRefGameData.update({
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

var joinedGameName;
const increment = firebase.firestore.FieldValue.increment(1);
joinRoomButton.addEventListener("click", function(){
    
    header.innerHTML = "Waiting for game to start...";
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
    docRefGameData.update({players: increment});
    docRefResponseData = firestore.collection(roomID).doc("ResponseData");
    
    docRefGameData.get().then(function(doc){
            if(doc.exists){
                const roomData = doc.data();
                if(roomData.haveMainScreen == true){
                    haveMainScreen = true;
                }
                
                joinedGameName = roomData.gameName;
                
                docRefToGame = firestore.collection(joinedGameName);
                

            }else{
                console.log("no such");
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


var localPlayerNumber;
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
                haveMainScreen = roomData.
                
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

//now just look for updates to the page number and call functions from there
//getRealTimeUpdates();
//====================================== UPDATING SCREEN ================================================
var testI = 0;


function updateScreen(doc){

    if(doc && doc.exists){
        const roomData = doc.data();
        
        //FOR NON MAIN SCREEN GAME
       console.log("PAGE IS = " + roomData.pageNumber + "and numQuestions are = " + numGameQuestions);
        console.log("Game Creator = " + isGameCreator);
        console.log("Has main screen? = " + haveMainScreen);
        console.log("is main screen = " + isMainScreen);
        
        
        if(haveMainScreen == false){
            // AFTER GAME IS STARTED
            if((roomData.pageNumber == 1) && (numGameQuestions >= 1)){
                playerScreenSetup();
                console.log("FIRST PAGE");
                
                getMCQuestion(1);
                
                startCountdown(300);
                
            }
            else if((roomData.pageNumber == 2)){
                
                
                changePlayerScore();
                //ADD IN A QUESTION FEEDBACK AND TIMER BEFORE NEXT QUESTIoN APPEARS
                
                if(isGameCreator == true){
                buttonAdd10.style.display = "block";
                }
                
                showClassAnswers();
                
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
                  
                  

            }
            else if(roomData.pageNumber ==3){
                     console.log("GAME OVER!!");
                    showScoringLeader();
                    
                    //addPlayerDataToCSV();
                    
                    if(isGameCreator){
                        
                        addPlayerDataToCSV();

                        setTimeout(showGetResultsButton, 2000);
                    }
                        
                
                
                }
             else if((roomData.pageNumber == 4)){
                
                
                changePlayerScore();
                //ADD IN A QUESTION FEEDBACK AND TIMER BEFORE NEXT QUESTIoN APPEARS
                
                 if(isGameCreator == true){
                buttonAdd10.style.display = "block";
                 }
                 
                 showClassAnswers();
                
                //changePlayerScore();
                //getMCQuestion(2);
                
                //startCountdown(100);

            }
              else if((roomData.pageNumber == 5) && (numGameQuestions >= 3)){
                
                //changePlayerScore();
                getMCQuestion(3);
                
                startCountdown(300);

            }
            else if(roomData.pageNumber ==5){
                     console.log("GAME OVER!!");
                    showScoringLeader();
                
                if(isGameCreator){
                        
                        addPlayerDataToCSV();

                        setTimeout(showGetResultsButton, 2000);
                    }
                }
             else if((roomData.pageNumber == 6)){
                
                
                changePlayerScore();
                //ADD IN A QUESTION FEEDBACK AND TIMER BEFORE NEXT QUESTIoN APPEARS
                if(isGameCreator == true){
                buttonAdd10.style.display = "block";
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
                
                
                
                }
            else if((roomData.pageNumber == 8)){
                
                
                changePlayerScore();
                //ADD IN A QUESTION FEEDBACK AND TIMER BEFORE NEXT QUESTIoN APPEARS
                if(isGameCreator == true){
                buttonAdd10.style.display = "block";
                }
                showClassAnswers();
                

            }
              else if((roomData.pageNumber == 9) && (numGameQuestions >= 5)){
                
                //changePlayerScore();
                getMCQuestion(5);
                
                startCountdown(300);

            }
            else if((roomData.pageNumber == 9)){
                    console.log("GAMEOVER");
                
                    console.log("showing leader function");
                    showScoringLeader();
                
                if(isGameCreator){
                        
                        addPlayerDataToCSV();

                        setTimeout(showGetResultsButton, 2000);
                    }
                
                }
             else if((roomData.pageNumber == 10)){
                
                
                changePlayerScore();
                //ADD IN A QUESTION FEEDBACK AND TIMER BEFORE NEXT QUESTIoN APPEARS
                if(isGameCreator == true){
                buttonAdd10.style.display = "block";
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
            
            //DISPLAY ON MAIN SCREEN
            if(isMainScreen == true){
                if((roomData.pageNumber == 1) && (numGameQuestions >= 1)){
                    
                    for(var i = 0; i<= 0; i++){
                        mainScreenSetup();
                        showMCQuestion(1);
                        showMCQuestionOptions(1);        
                        startCountdown(100);
                    }
                

                }

                else if((roomData.pageNumber == 2)){
                    
                    //showClassAnswers();
                    
                    buttonAdd10.style.display = "block";
                    
                    
                    
                    console.log("2ND PAGE");
                    
                    
                }
                else if((roomData.pageNumber == 3) && (numGameQuestions >= 2)){

                    console.log("3RD PAGE");
                    
                    for(var i = 0; i<= 0; i++){
                        showMCQuestion(2);
                        showMCQuestionOptions(2);
                        startCountdown(300);
                    }

                }
                else if(roomData.pageNumber ==3){
                     console.log("GAME OVER!!");
                    showScoringLeader();
                    addPlayerDataToCSV();
                    setTimeout(showGetResultsButton, 2000);
                    
                }
                else if((roomData.pageNumber == 4)){
                    
                    //========================================================
                    //DO SOMETHING LIKE SHOW WHAT EVERYONE GOT/ LEADERBOARD
                    //========================================================
                    
                    
                    showClassAnswers();
                    buttonAdd10.style.display = "block";
                    
                    
                    
                    console.log("2ND PAGE");
                    //showMCQuestion(2);
                    
                    //startCountdown(100);
            
                }
                else if((roomData.pageNumber == 5) && (numGameQuestions >= 3)){

                    console.log("3RD PAGE");
                    showMCQuestion(3);
                    showMCQuestionOptions(3);
                    
                    startCountdown(300);

                }
                else if(roomData.pageNumber ==5){
                     console.log("GAME OVER!!");
                    showScoringLeader();
                    addPlayerDataToCSV();
                    setTimeout(showGetResultsButton, 2000);
                }
                else if((roomData.pageNumber == 6)){
                    
                    showClassAnswers();
                    buttonAdd10.style.display = "block";
                    
                    
                    
                    console.log("2ND PAGE");
                    //showMCQuestion(2);
                    
                    //startCountdown(100);

                }
                else if((roomData.pageNumber == 7) && (numGameQuestions >= 4)){

                    console.log("3RD PAGE");
                    showMCQuestion(4);
                    showMCQuestionOptions(4);
                    
                    startCountdown(300);

                }
                else if((roomData.pageNumber == 7)){
                    console.log("GAMEOVER");
                    showScoringLeader();
                    addPlayerDataToCSV();
                    setTimeout(showGetResultsButton, 2000);
                    
                }
                else if((roomData.pageNumber == 8)){
                    
                    showClassAnswers();
                    buttonAdd10.style.display = "block";
                    
                    
                    
                    console.log("2ND PAGE");
                    //showMCQuestion(2);
                    
                    //startCountdown(100);

                }
                else if((roomData.pageNumber == 9) && (numGameQuestions >= 5)){

                    console.log("3RD PAGE");
                    showMCQuestion(5);
                    showMCQuestionOptions(5);
                    
                    startCountdown(300);

                }
                else if((roomData.pageNumber == 9)){
                    console.log("GAMEOVER");
                    showScoringLeader();
                    addPlayerDataToCSV();
                    setTimeout(showGetResultsButton, 2000);
                    
                }
                else if((roomData.pageNumber == 10)){
                    
                    showClassAnswers();
                    buttonAdd10.style.display = "block";
                    
                    
                    
                    console.log("2ND PAGE");
                    //showMCQuestion(2);
                    
                    //startCountdown(100);

                }
                else if((roomData.pageNumber == 11) && (numGameQuestions >= 6)){

                    console.log("3RD PAGE");
                    showMCQuestion(6);
                    showMCQuestionOptions(6);
                    
                    startCountdown(300);

                }
                else if((roomData.pageNumber == 11)){
                    console.log("GAMEOVER");
                    showScoringLeader();
                    addPlayerDataToCSV();
                    setTimeout(showGetResultsButton, 2000);
                    
                }
                else if((roomData.pageNumber == 12)){
                    
                    showClassAnswers();
                    buttonAdd10.style.display = "block";
                    
                    
                    
                    console.log("2ND PAGE");
                    //showMCQuestion(2);
                    
                    //startCountdown(100);

                }
                else if((roomData.pageNumber == 13) && (numGameQuestions >= 7)){

                    console.log("3RD PAGE");
                    showMCQuestion(7);
                    showMCQuestionOptions(7);
                    
                    startCountdown(300);

                }
                else if((roomData.pageNumber == 13)){
                    console.log("GAMEOVER");
                    showScoringLeader();
                    addPlayerDataToCSV();
                    setTimeout(showGetResultsButton, 2000);
                    
                }
                else if((roomData.pageNumber == 14)){
                    
                    showClassAnswers();
                    buttonAdd10.style.display = "block";
                    
                    
                    
                    console.log("2ND PAGE");
                    //showMCQuestion(2);
                    
                    //startCountdown(100);

                }
                else if((roomData.pageNumber == 15) && (numGameQuestions >= 8)){

                    console.log("3RD PAGE");
                    showMCQuestion(8);
                    showMCQuestionOptions(8);
                    
                    startCountdown(300);

                }
                else if((roomData.pageNumber == 15)){
                    console.log("GAMEOVER");
                    showScoringLeader();
                    addPlayerDataToCSV();
                    setTimeout(showGetResultsButton, 2000);
                    
                }
                else if((roomData.pageNumber == 16)){
                    
                    showClassAnswers();
                    buttonAdd10.style.display = "block";
                    
                    
                    
                    console.log("2ND PAGE");
                    //showMCQuestion(2);
                    
                    //startCountdown(100);

                }
                else if((roomData.pageNumber == 17) && (numGameQuestions >= 9)){

                    console.log("3RD PAGE");
                    showMCQuestion(9);
                    showMCQuestionOptions(9);
                    
                    startCountdown(300);

                }
                else if((roomData.pageNumber == 17)){
                    console.log("GAMEOVER");
                    showScoringLeader();
                    addPlayerDataToCSV();
                    setTimeout(showGetResultsButton, 2000);
                    
                }
                else if((roomData.pageNumber == 18)){
                    
                    showClassAnswers();
                    buttonAdd10.style.display = "block";
                    
                    
                    
                    console.log("2ND PAGE");
                    //showMCQuestion(2);
                    
                    //startCountdown(100);

                }
                else if((roomData.pageNumber == 19) && (numGameQuestions >= 10)){

                    console.log("3RD PAGE");
                    showMCQuestion(10);
                    showMCQuestionOptions(10);
                    
                    startCountdown(300);

                }
                else if((roomData.pageNumber == 19)){
                    console.log("GAMEOVER");
                    showScoringLeader();
                    addPlayerDataToCSV();
                    setTimeout(showGetResultsButton, 2000);
                    
                }
                else if(roomData.pageNumber ==20){
                    showClassAnswers();
                    buttonAdd10.style.display = "block";
                    
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
    docRefGameData.onSnapshot( function(doc){
        //console.log("MADE IT INTO update screen");
        updateScreen(doc);
    });
}



//=========================================================================================================
////=========================== ALL GAMES AND FUNCTIONALITY ============================================
//=========================================================================================================

//NEXT QUESTION BUTTON

function showGetResultsButton(){
    buttonAdd20.style.display = "block";
}


buttonAdd10.addEventListener("click", function(){
    
    
    buttonAdd10.style.display = "none";
    nextPage();
    
    
    
})

//GET RESULTS BUTTON

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

buttonAdd20.addEventListener("click", function(){
    // Example data given in question text
//var data = [
//  ['name1', 'city1', 'some other info'],
//  ['name2', 'city2', 'more info']
//];
    
    //CREATE PLAYER ARRAY
    
    
//                firestore.collection(roomID).get()
//                    .then(function(querySnapshot) {
//                        querySnapshot.forEach(function(doc) {
//                            // doc.data() is never undefined for query doc snapshots
//                            console.log(doc.id, " => ", doc.data());
//                            var playerData = doc.data();
//                            
//                            if(playerData.playerName != null){
//                            var player = playerData.playerName;
//                            
//                            console.log("player = " + player);
//                            
//                            data.push(player);
//                             console.log("array " + data);
//                            }
//                            
//                        });
//                    })
//                    .catch(function(error) {
//                        console.log("Error getting documents: ", error);
//                    });
    
  //  console.log("array has" + data);
    
    //setTimeout(addArray, 1000);
    
    
    
    
    
//const input = [
//  ["555","123","345"],
//  [1, 2, 3],
//  [true, false, "foo"]
//];
//
//const uniqueCounties = ["555","123","345"];
    
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

function startCountdown(seconds) {
    myProgress.style.display = "block";
    var intervalAmount = parseInt(seconds, 10);
  var elem = document.getElementById("myBar");
  var width = 1;
  var id = setInterval(frame, seconds);
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
    
    
//        if((isMainScreen == true) || (isGameCreator == true)){
            
        console.log("incrementing page numeb after countrdown");
            nextPage();
       // }
        
       
        
    } else {
      width++;
      elem.style.width = width + '%';
    }
  }
}

//SCORING
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
    
        if(latestScore == 1){
        header.innerText = "You're Correct! (1PT)";
        }
        else if(latestScore == -1){
        header.innerText = "Your're Wrong! (-1PT)";
        }
    
    
        
        
}


function showScoringLeader(){
            //KEEP TRACK OF LEADER
    header.style.display = "block";
    
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


//NEXT PAGE
function nextPage(){
    
        console.log("incrementing page numebr");
       docRefGameData.update({pageNumber: increment});
}

//END GAME
function endGame(){
       docRefGameData.update({pageNumber: 100});
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

//SHOW CLASS ANSWERS
function showClassAnswers(){
    
    questionOutput.innerText = questionOutput.innerText + "  " + "  The correct answer = " + correctMCAnswer;
    
    
    
    
    
    
    
}



var correctMCAnswer;
var currentMCAnswer;

//=========================================================================================================
//================================   REGULAR KAHOOT TRIVIA ================================================
//=========================================================================================================

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

    docRefTQ.get().then(function(doc){
            if(doc.exists){
                const questionData = doc.data();
                
                questionOutput.innerText = questionData.question;
                
                correctMCAnswer = questionData.correctAnswer;
    

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
    //docRefGameData.update({ responses: 0});
    

    docRefTQ.get().then(function(doc){
            if(doc.exists){
                const questionData = doc.data();
                
                correctMCAnswer = questionData.correctAnswer;
                
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
    //docRefGameData.update({ responses: 0});
    

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
    
    
    
    //CHECK ANSWER
    if(currentMCAnswer.innerText == correctMCAnswer){
        
        localPlayerScore++;
        latestScore = 1;
        //changePlayerScore();
        
        
    }else{
        latestScore = -1;
        localPlayerScore = localPlayerScore -1;
        //changePlayerScore();
    }

    //setTimeout(checkForAllResponses, 1000);
    
    
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
                    
                    const increment = firebase.firestore.FieldValue.increment(1);
                    docRefRoomData.update({ pageNumber: increment })
                    
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






//=========================================================================================================
//================================   TESTING EXPORT  ================================================
//=========================================================================================================

// Example data given in question text
//var items = [
//  ['name1', 'city1', 'some other info'],
//  ['name2', 'city2', 'more info']
//];
//
//// Building the CSV from the Data two-dimensional array
//// Each column is separated by ";" and new line "\n" for next row
//var csvContent = '';
//data.forEach(function(infoArray, index) {
//  dataString = infoArray.join(';');
//  csvContent += index < data.length ? dataString + '\n' : dataString;
//});
//
//// The download function takes a CSV string, the filename and mimeType as parameters
//// Scroll/look down at the bottom of this snippet to see how download is called
//var download = function(content, fileName, mimeType) {
//  var a = document.createElement('a');
//  mimeType = mimeType || 'application/octet-stream';
//
//  if (navigator.msSaveBlob) { // IE10
//    navigator.msSaveBlob(new Blob([content], {
//      type: mimeType
//    }), fileName);
//  } else if (URL && 'download' in a) { //html5 A[download]
//    a.href = URL.createObjectURL(new Blob([content], {
//      type: mimeType
//    }));
//    a.setAttribute('download', fileName);
//    document.body.appendChild(a);
//    a.click();
//    document.body.removeChild(a);
//  } else {
//    location.href = 'data:application/octet-stream,' + encodeURIComponent(content); // only this mime type is supported
//  }
//}
//
//download(csvContent, 'dowload.csv', 'text/csv;encoding:utf-8');


//var test_array = [["name1", 2, 3], ["name2", 4, 5], ["name3", 6, 7], ["name4", 8, 9], ["name5", 10, 11]];
//var csv = test_array.map(function(d){
//        return d.join();
//    }).join('\n');
//
//download(csv, 'download.csv', 'text/csv;encoding:utf-8');
//
//var csv;
//
//// Loop the array of objects
//for(let row = 0; row < items.length; row++){
//    let keysAmount = Object.keys(items[row]).length;
//    let keysCounter = 0;
//
//    // If this is the first row, generate the headings
//    if(row === 0){
//
//       // Loop each property of the object
//       for(let key in items[row]){
//
//                           // This is to not add a comma at the last cell
//                           // The '\r\n' adds a new line
//           csv += key + (keysCounter+1 < keysAmount ? ',' : '\r\n' );
//           keysCounter++;
//       }
//    }else{
//       for(let key in items[row]){
//           csv += items[row][key] + (keysCounter+1 < keysAmount ? ',' : '\r\n' );
//           keysCounter++;
//       }
//    }
//
//    keysCounter = 0;
//}
//
//
//
//
//// Once we are done looping, download the .csv by creating a link
//let link = document.createElement('a');
//link.id = 'download-csv';
//link.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(csv));
//link.setAttribute('download', 'yourfiletextgoeshere.csv');
//document.body.appendChild(link);
//document.querySelector('#download-csv').click();
//


//
//const input = [
//  ["555","123","345"],
//  [1, 2, 3],
//  [true, false, "foo"]
//];
//
//const uniqueCounties = ["555","123","345"];
//const csvAsSingleColumn = uniqueCounties.join('\r\n'); 
////Then you can do something like this:
//
//function toCsv(input) {
//  return input.map(row => row.join(',')).join('\n');
//}
//
//const csvString = toCsv(input);
//let link = document.createElement('a');
//link.id = 'download-csv';
//link.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(csvAsSingleColumn));
//link.setAttribute('download', 'yourfiletextgoeshere.csv');
//document.body.appendChild(link);
//document.querySelector('#download-csv').click();

//Resulting in this string:
//
//555,123,345
//1,2,3
//true,false,foo
//If you just want to convert a single 1d array to csv, like in the example then:

//const uniqueCounties = ["555","123","345"]
//
//// If you want each value as a column
//const csvAsSingleRow = uniqueCounties.join(',')
//
// If you want each value as a row
//const csvAsSingleColumn = uniqueCounties.join('\n'); 









































//========================================================================================================
//====================================== WHO SAID/HAS/DID/ETC ============================================
//============== Ask question, turn response into question with players as button options =================
//=========================================================================================================

//EX1: How many different schools have you attended in the last 10 years?












//========================================================================================================
//================== FOR GAME WHERE PLAYERS ENTER IN THEIR GUESSES AS POTENTIAL ANSWERS ==================
//========================================================================================================


//EX1: How many public universities are in the United States?






//========================================================================================================
//=================================== TWO TRUTHS AND A LIE =============================================
//========================================================================================================


//EX1: Most Ridiculous things that have happened to you at school.




//========================================================================================================
//=================================== LIST AS MANY AS YOU CAN =============================================
//========================================================================================================


//EX1: List as many unique college's as you can in 120 seconds...

















































//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
////=========================================================================================
////=============================Creating References to Database===============================
////=========================================================================================
////Room Reference - players in in
//var docRefRoom;
//
////Room Data Reference - total players, page number
//var docRefRoomData;
//
////Player Reference
//var docRefPlayer;
//
////Question Reference
//var docRefQuestion;
//
////REsponse Reference
//var docRefResponseData;
//
////Response answer Ref
//var docRefPlayerResponses;
//
////=========================================================================================
////=================================HTMLTEXTS/BUTTONS=======================================
////=========================================================================================
////Lives
////HEADER
//const header = document.getElementById("header");
//
//const lives = document.getElementById("lives");
//
////Output room# and Input room#
//const roomNumberShown = document.querySelector("#roomNumberShown");
//const roomID = document.querySelector("#roomID");
//
////Output playerName and Input playerName
//const playerNameShown = document.querySelector("#nicknameOutput");
//const playerName = document.querySelector("#playerName");
//
////Join Room Button
//const joinGameButton = document.getElementById("joinGame");
//
////Start Game Button
//const startGameButton = document.getElementById("startGame");
//

//
////Progress bar for timer
//const progressBar =document.getElementById("progressBar");
//
////Picture elements
//var fileButton = document.getElementById('fileButton');
//var fileButtonHolder = document.getElementById('fileButtonHolder');
//var uploader = document.getElementById('uploader');
//var profPic = document.getElementById('profPic');
//
////Additional picture elements
//var image1 = document.getElementById("img1");
//var image2 = document.getElementById("img2");
//var image3 = document.getElementById("img3");
//var image4 = document.getElementById("img4");
//var image5 = document.getElementById("img5");
//var image6 = document.getElementById("img6");
//var image7 = document.getElementById("img7");
//var image8 = document.getElementById("img8");
//var image9 = document.getElementById("img9");
//var image10 = document.getElementById("img10");
//var image11 = document.getElementById("img11");
//var image12 = document.getElementById("img12");
//var image13 = document.getElementById("img13");
//var image14 = document.getElementById("img14");
//var image15 = document.getElementById("img15");
//var image16 = document.getElementById("img16");
//var image17 = document.getElementById("img17");
//var image18 = document.getElementById("img18");
//var image19 = document.getElementById("img19");
//var image20 = document.getElementById("img20");
//var image21 = document.getElementById("img21");
//var image22 = document.getElementById("img22");
//var image23 = document.getElementById("img23");
//var image24 = document.getElementById("img24");
//
////Video elements
////var vid = document.getElementById("vid1");
////
////vid.addEventListener('ended',myHandler,false);
////
////    function myHandler(e) {
////        vid.style.display = "none";
////    }
//
//
////=========================================================================================
////========================================LOCAL/GLOBAL VARIABLES===================================
////=========================================================================================
//// SMART TO SAVE EACH PLAYERS DATA GLOBALLY AND RE-ACCESS IT
//// BETTER THAN COOKIES FOR SURE
//
////ROOM SIZE
//var roomSize;
//
////USERS PLAYERNAME
//var localPlayerName;
//
////USERS PLAYERNUMBER
//var localPlayerNumber;
//
////USERS LIVES
//var localPlayerLives = 1;
//var changePlayerLivesBool = false;
//
////USERS ROOM
//var playerRoom;
//
//// VARIABLE CURRENT PAGE = 0, then after they enter increment
//var currentPage = 0;
//
////ANSWERS
////for response question
//var currentResponseAnswer;
//var correctResponseAnswer;
//
////for trivia question
//var currentTriviaAnswer;
//var correctTriviaAnswer;
//
//
////NEW MC ANSWER
//var currentMCAnswer;
//var correctMCAnswer;
//
//
////CURRENT QUESTION
//var currentQuestion;
//
////SCORE
//var currentLeaderLives = 0;
//
////================================================================================================
////==========================================SETUP ROOM/GAME==========================================
////=================================================================================================
////JOIN ROOM BUTTON CLICK
////First - save the room# input and playerName input to firestore
////Second - put the room# and playerName at the top of the screen
////Third - erase the unneeded text field and buttons
////Fourth - call the changeQuestion function
////         ...this function gets a question from the database and displays it
////          ...this function also unblocks a text entry and button to collect responses
////var docRef1;
//
////Hide all question/game/pic stuff
//function startGameHide(){
//    startGameButton.style.display = "none";
//    header.style.display = "none";
//    buttonA.style.display = "none";
//     buttonB.style.display = "none";
//     buttonC.style.display = "none";
//     buttonD.style.display = "none";
//     trueButton.style.display = "none";
//     falseButton.style.display = "none";
//    buttonAdd0.style.display = "none";
//    buttonAdd1.style.display = "none";
//    buttonAdd2.style.display = "none";
//    buttonAdd3.style.display = "none";
//    buttonAdd4.style.display = "none";
//    buttonAdd5.style.display = "none";
//    buttonAdd6.style.display = "none";
//    buttonAdd7.style.display = "none";
//    buttonAdd8.style.display = "none";
//    buttonAdd9.style.display = "none";
//    buttonAdd10.style.display = "none";
//    buttonAdd11.style.display = "none";
//    buttonAdd12.style.display = "none";
//    buttonAdd13.style.display = "none";
//    buttonAdd14.style.display = "none";
//    buttonAdd15.style.display = "none";
//    buttonAdd16.style.display = "none";
//    buttonAdd17.style.display = "none";
//    buttonAdd19.style.display = "none";
//    buttonAdd18.style.display = "none";
//    buttonAdd20.style.display = "none";
//    buttonAdd21.style.display = "none";
//    buttonAdd22.style.display = "none";
//    buttonAdd23.style.display = "none";
//    buttonAdd24.style.display = "none";
//    
//    lives.style.display = "none";
//    
//    questionOutput.style.display = "none";
//    questionPic.style.display = "none";
//    
//    response1.style.display = "none";
//     response2.style.display = "none";
//     response3.style.display = "none";
//    
//    submitResponse.style.display = "none";
//    
//    progressBar.style.display = "none";
//    
//    fileButtonHolder.style.display = "none";
//    fileButton.style.display = "none";
//    
//    uploader.style.display = "none";
//    
//    profPic.style.display = "none";
//    
//    image1.style.display = "none";
//     image2.style.display = "none";
//     image3.style.display = "none";
//     image4.style.display = "none";
//     image5.style.display = "none";
//     image6.style.display = "none";
//     image7.style.display = "none";
//     image8.style.display = "none";
//     image9.style.display = "none";
//     image10.style.display = "none";
//     image11.style.display = "none";
//     image12.style.display = "none";
//     image13.style.display = "none";
//     image14.style.display = "none";
//     image15.style.display = "none";
//     image16.style.display = "none";
//     image17.style.display = "none";
//     image18.style.display = "none";
//     image19.style.display = "none";
//     image20.style.display = "none"
//     image21.style.display = "none"
//     image22.style.display = "none"
//     image23.style.display = "none"
//     image24.style.display = "none"
////    
////     vid.style.display = "none";
//}
//
//
//console.log("HIDE THIS SHIT");
//startGameHide();
//
// 
//
//
//joinGameButton.addEventListener("click", function(){
//    //Save room and player name
//    const roomToSave = roomID.value;
//    const playerToSave = playerName.value;
//    //console.log("I am going to save " + roomToSave + " and " + playerToSave + " to Firestore");
//    
//       
//    //Save Local Player Data
//    window.playerRoom = roomToSave;
//    window.localPlayerName = playerToSave;
//    
//    //create correct Data Refs
//    docRefRoom = firestore.collection(roomToSave);
//    docRefRoomData = firestore.collection("RoomData").doc(roomToSave);
//    docRefPlayer = docRefRoom.doc(window.localPlayerName);
//    docRefQuestion = firestore.collection("questions");
//    docRefResponseData = firestore.collection("responses").doc(playerRoom);
//    
//
//    
//    //console.log("WHAT THE FUCK IS THE PLAYER NUMBER GONNA BE? " + localPlayerNumber);
//    //SETTING PLAYER DATA
//    docRefPlayer.set({
//        playerName: playerToSave,
//        playerID: docRefPlayer.id,
//        roomNumber: roomToSave,
//        lives: 1
//        }).then(function(){
//        //console.log("Document written with Room ID: ", docRef1.id);
//        playerNameShown.innerHTML = "Name: " + playerToSave;
//        roomNumberShown.innerHTML = "Room#: " + roomToSave;
//
//        //need to change the way the page looks!
//        playerNameShown.style.fontSize = "12px";
//
//        //hiding playername entry
//        playerName.style.display = "none";
//
//        //showing room
//        roomNumberShown.style.fontSize = "12px";
//        //hiding room entry
//        roomID.style.display = "none";
//
//        //adding lives board
//        lives.style.fontSize = "12px";
//        lives.style.display = "block";
//        lives.innerText = "Lives: " + localPlayerLives;
//
//        //hiding join room button
//        joinGameButton.style.display = "none";
//
//
//         //Adding start button for first person that joins
//            docRefRoom.get().then(res => {
//                console.log(res.size);
//                if(res.size ==  1){
//                    startGameButton.style.display = "block";
//                }else{
//                    console.log("room size = " + res.size);
//                }
//                localPlayerNumber = res.size;
//                });
//        
//        //getting realtime updates
//        getRealtimeUpdates();
//
//        }).catch(function(error){
//        console.error("Got an error: ", error);
//    });
//
//    
//    //CAll to allow player to post pic as well
//    setProfilePic();
//
//
//})
//
//
////================================================================================================
////==============================================FUNCTIONS==========================================
////==============================================================================================
//
////add  player numbers
//
//function addPlayerNumbers(){
//    
//    docRefPlayer.update({
//                        playerNumber: localPlayerNumber
//            }).catch(function(error){
//                        console.error("got an error", error);
//            });
//    
//    
//    //update room size for players w/o start button 
//     
//    docRefRoom.get().then(res => {
//        
//        console.log("room size.... is .... " + res.size);
//        
//        roomSize = res.size;
//
//            
//     });
//    
//    console.log("players Number is " + localPlayerNumber + " and room size is " + roomSize);
//    
//    fileButtonHolder.style.display = "none";
//    
//    //nextPage();
//    
//    if(localPlayerNumber == 1){
//        
//        const increment = firebase.firestore.FieldValue.increment(1);
//        docRefRoomData.update({ pageNumber: increment })
//        
//    }
//    
//}
//
//startGame.addEventListener("click", function(){
//    
//    
//    console.log("GAME HAS BEEN STARTED");
//
//    docRefResponseData.set({ responses: 0 });
//    
//    docRefRoom.get().then(res => {
//        
//        roomSize = res.size;
//        
//            docRefRoomData.set({
//                roomNumber: playerRoom,
//                numberOfPlayers: roomSize,
//                pageNumber: 1
//            }).then(function(){
//
//            }).catch(function(error){
//                console.error("Got an error: ", error);
//            });
//            
//     });
//    
//    console.log("THE PLAYERS ROOM = " + playerRoom);
//    
//    startGameButton.style.display = "none";
//    
//    
//})
//
////CLEARING TEXT FIELD
//function ClearTextField() {
//     response.value = "";
//}
//
//
//
////=======================================TRIVIA QUESTION===================================
//// ======================= NEW GET/CHECK MC QUESTION ====================================
//function playVid(){
//    vid.play();
//}
//
//function getMCQuestion(i){
//    
//    
//    questionOutput.style.display = "block";
//    console.log("GETTING MC QUESTION");
//    //show ABCD Buttons
//    buttonA.style.display = "block";
//    buttonB.style.display = "block";
//    buttonC.style.display = "block";
//    buttonD.style.display = "block";
//    
//    
//    //Show and play video
////    vid.style.display = "block";
////    vid.play();
//    
//    //show lives
////    lives.style.display = "block";
////    lives.style.fontSize = "12px";
//
//    //Getting trivia questions
//    const qName = i.toString();
//
//    const docRefTQ = firestore.collection("questions").doc(qName);
//    //var correctAnswer;
//    
//    //RESET RESPONSE # BEFORE GETTING QUESTION
//    docRefResponseData.update({ responses: 0});
//
//    docRefTQ.get().then(function(doc){
//            if(doc.exists){
//                const questionData = doc.data();
//                
//                correctMCAnswer = questionData.correctAnswer;
//                //console.log("the doc data IS HERE= ", questionData.question);
//                
//                questionOutput.innerText = questionData.question;
//                buttonA.innerText = questionData.optionA;
//                buttonB.innerText = questionData.optionB;
//                buttonC.innerText = questionData.optionC;
//                buttonD.innerText = questionData.optionD;
//
//                //make sure its working
//                //console.log("the correct answer is saved as" + correctTriviaAnswer);
//
//
//            }else{
//                console.log("no such");
//            }
//        }).catch(function(error){
//            console.log("error", error);
//        });
//    
//}
//
//function checkMCAnswer(buttonID){
//    //console.log("option1 = " + option1.innerText + "and the correct option is " + correctMCAnswer);
//        const increment = firebase.firestore.FieldValue.increment(1);
//    
//    
//    docRefResponseData.update({ responses: increment });
//    
//    console.log("BUTTONID = " + buttonID);
//    
//    currentMCAnswer = document.getElementById(buttonID);
//    
//    
//    
//    //CHECK ANSWER
//    if(currentMCAnswer.innerText == correctMCAnswer){
//        
//        localPlayerLives += 1;
//        //changePlayerLivesBool = true;
//        //changePlayerLivese();
//        
//        
//    }else{
//        
//        localPlayerLives -= 1;
//        //changePlayerLivesBool = false;
//    }
//    
//    
//    
//    questionOutput.style.display = "none";
//    //HIDE STUFF
//    buttonA.style.display = "none"; 
//    buttonB.style.display = "none";
//    buttonC.style.display = "none";
//    buttonD.style.display = "none";
//    
//    header.style.display = "block";
//    header.innerText = "waiting for others to answer";
//    
//    
//    //CHANGE PAGE AFTER LAST PLAYER ANSWERS
//    
//
//    
//    //docRefRoomData.update({ responses: increment });
//      //var docRefResponseData = firestore.collection("responses").doc(playerRoom);
//    
//    
//    
//
//    setTimeout(checkForAllResponses, 1000);
//    
//    
//}
//
//function checkForAllResponses(){
//    
//    updateRoomSize();
//    
//      docRefResponseData.get().then(function(doc){
//            if(doc.exists){
//                const responseData = doc.data();
//                const currentResponses = responseData.responses;
//                //changePlayerLives();
//                
//                console.log("RESPONSES so far = " + currentResponses + "CURRENT room size = " + roomSize);
//                
//                 console.log(responseData.responses + " RESPONSES");
//                if(currentResponses == roomSize){
//                    
//                    console.log(responseData.responses + " RESPONSES");
//                    
//                    const increment = firebase.firestore.FieldValue.increment(1);
//                    docRefRoomData.update({ pageNumber: increment })
//                    
//                    //docRefResponseData.update({ responses: 0});
//                    
//                    console.log("RESET RESPONSEEEESSSS");
//                }
//
//
//            }else{
//                console.log("no such");
//            }
//        }).catch(function(error){
//            console.log("error", error);
//        });
//    
//}
//
//
////===================================RESPONSETOMCQUESTION==================================
//
//var buttonNumberArray;
//
//function getRMCQuestion(qNum){
//    
//    questionOutput.style.display = "block";
//    console.log("GETTING RMC QUESTION");
//    
//    //Getting trivia questions
//    const qName = qNum.toString();
//
//    const docRefRMC = firestore.collection("questions").doc(qName);
//    
//    console.log("question name = " + qName);
//    //var correctAnswer;
//    
//    currentQuestion = qName;
//    
//    //RESET RESPONSE # BEFORE GETTING QUESTION
//    docRefResponseData.update({ responses: 0});
//
//    //GETTING QUESTION
//    docRefRMC.get().then(function(doc){
//            if(doc.exists){
//                const questionData = doc.data();
//                
//                correctMCAnswer = questionData.correctAnswer;
//                //console.log("the doc data IS HERE= ", questionData.question);
//                
//                questionOutput.innerText = questionData.question;
//
//            }else{
//                console.log("no such");
//            }
//        }).catch(function(error){
//            console.log("error", error);
//        });
//    
//    //allowing player to submit response
//    
//    
//    response1.style.display = "block";
//    submitResponse.style.display = "block";
//    
//    
//    
//}
//
//
//submitResponse.addEventListener("click", function(){
//    
//    //const questionToSave = questionOutput.innerText;
//    
//    //currentQuestion = questionToSave.toString();
//    
////    const increment = firebase.firestore.FieldValue.increment(1);
////    
////    docRefResponseData.update({ responses: increment });
//    
//    
//    //check to make sure response is not the answer
//    //if it is the answer, tell user to enter a fake response
//    
//    const responseToSave = response1.value;
//    
//    if(responseToSave == correctMCAnswer){
//        header.style.display = "block";
//        header.innerText = "you were correct, enter a new answer to fool others";
//        getRMCQuestion();
//    }
//    
//    const buttonToSaveResponseTo = "buttonAdd" + localPlayerNumber;
//    
//    var playerNumString = localPlayerNumber.toString(); 
//    
//    //save response in database
//    docRefPlayerResponses = firestore.collection("responses").doc(playerRoom).collection(currentQuestion);
//    
//    
//    docRefPlayerResponses.doc(playerNumString).set({
//        response: responseToSave 
//    })
//    
//    
//    //HIDE STUFF
//    
//    response1.style.display = "none";
//    submitResponse.style.display = "none";
//    
//    //document.getElementById(buttonToSaveResponseTo).innerText = responseToSave;
//    
//    console.log("calling check RMC responses!!");
//    //place to increment the # of responses gotten
//    setTimeout(checkRMCResponses, 1000);
//    //getCreatedRMCQuestion();
//    
//    
//
//})
//
//function checkRMCResponses(){
//    
//    //track roomSize
//        docRefPlayerResponses.get().then(res => {
//            
//            var rss = res.size;
//            console.log("player responses = " + rss + "room size = " + roomSize);
//            
//            //set question up
////            setupRMCQuestion();
//            
//            
//
//            if(res.size == roomSize){
//                
//                console.log("THHEFUCKISTHEPAGENUMBER=====    " + currentPage);
//                //displaying RMCQuestion
//                //getCreatedRMCQuestion();
//                //currentPage++;
//                //nextPage();
//                //setTimeout(showRMCQuestion, 1000);
//                docRefRoomData.update({
//                        pageNumber: 7
//                    }).catch(function(error){
//                        console.error("got an error", error);
//                    });
//                
//            }
//            
//         });
//    
//    
//}
//
//function showRMCQuestion(){
//    //hide submit response and text field
//    response1.style.display = "none";
//    submitResponse.style.display = "none";
//    
//    
//      //show playerButtons
//    
//    for(var i = 1; i<= roomSize; i++){
//        var buttonIDsToShow = "buttonAdd" + i;
//        
//        //console.log("button id lookin for = " + buttonIDsToShow);
//        
//        document.getElementById(buttonIDsToShow).style.display = "block";
//        
//        //buttonIDsToShow.style.display = "block";
//        
//    }
//    
//    firestore.collection("questions").doc("104").get().then(function(doc){
//            if(doc.exists){
//                const questionData = doc.data();
//                
//                currentMCAnswer = questionData.correctAnswer;
//    
//                buttonAdd0.innerText = currentMCAnswer;
//                
//                
//                buttonAdd0.style.display = "block";
//
//            }else{
//                console.log("no such");
//            }
//        }).catch(function(error){
//            console.log("error", error);
//        });
//        
//    
//}
//
//function setupRMCQuestion(){
//
//    for(var i = 1; i<= roomSize; i++){
//        
//        var buttonIDsToShow = "buttonAdd" + i;
//        
//        console.log("button id lookin for = " + buttonIDsToShow);
//        
//        console.log("WHAT IS I.. " + i);
//        
//        //setandshow RMC
//        setShowRMC(i);
//        
//        //buttonIDsToShow.style.display = "block";
//        
//    }
//    
//}
//
//function setShowRMC(i){
//    
//        var docRefPR = firestore.collection("responses").doc(playerRoom).collection(currentQuestion).doc(i.toString());
//        
//        docRefPR.get().then(function(doc){
//            if(doc.exists){
//                const responseData = doc.data();
//                console.log("FUCKKKKKKKKKKKK");
//                
//                console.log("player # " + i + "'s response = " + responseData.response);
//                
//                var buttonIDsToShow = "buttonAdd" + i;
//                document.getElementById(buttonIDsToShow).innerText = responseData.response;
//
//            }else{
//                console.log("no such");
//            }
//        }).catch(function(error){
//            console.log("error", error);
//        });
//        
//        
//}
//
//function checkRMCAnswer(buttonID){
//    //console.log("option1 = " + option1.innerText + "and the correct option is " + correctMCAnswer);
//    const increment = firebase.firestore.FieldValue.increment(1);
//    
//    
//    docRefResponseData.update({ responses: increment });
//    
//    console.log("BUTTONID = " + buttonID);
//    
//    currentMCAnswer = document.getElementById(buttonID);
//    
//    
//    
//    //CHECK ANSWER
//    if(currentMCAnswer.innerText == correctMCAnswer){
//        
//        localPlayerLives += 1;
//        //changePlayerLivesBool = true;
//        //changePlayerLivese();
//        
//        
//    }else{
//        
//        localPlayerLives -= 1;
//        //changePlayerLivesBool = false;
//    }
//    
//    
//    
//    questionOutput.style.display = "none";
//    buttonAdd0.style.display = "none";
//    
//    //HIDE BUTTONS
//     for(var i = 1; i<= roomSize; i++){
//        
//        var buttonIDsToShow = "buttonAdd" + i;
//        
//        
//        document.getElementById(buttonIDsToShow).style.display = "none";
//        
//    }
//    
//    
//    header.style.display = "block";
//    header.innerText = "waiting for others to answer";
//    
//    
//    //CHANGE PAGE AFTER LAST PLAYER ANSWERS
//    
//
//    
//    //docRefRoomData.update({ responses: increment });
//      //var docRefResponseData = firestore.collection("responses").doc(playerRoom);
//    
//    
//    
//
//    setTimeout(checkForAllResponses, 1000);
//    
//    
//}
//
//
//
////======================================PLAYER Lives=============================================
//
//function changePlayerLives(){
//    
//        //change the player lives in database
//          firestore.collection(playerRoom).doc(localPlayerName).update({
//                        lives: localPlayerLives
//                    }).catch(function(error){
//                        console.error("got an error", error);
//                    });
//    
//        //change the player lives displayed on site
//        lives.innerText = "Score: " + localPlayerLives;
//        
//}
//
//
////==============================================PIC STUFF=========================================
//// UPLOADING PICS TO DATABASE
//
//function setProfilePic(){
//    fileButtonHolder.style.display = "block";
//}
//
//fileButton.addEventListener('change', function(e){
//    //get file
//
//    var file = e.target.files[0];
//
//    //create storage ref
//    var storageRef = firebase.storage().ref(playerRoom + '/' + localPlayerName + '/' + file.name);
//
//    //save file name
//    picName = file.name;
//    
//    //upload file
//
//    var task = storageRef.put(file);
//    //update progress bar
//    task.on('state_changed',
//
//            function progress(snapshot){
//        var percentage = snapshot.bytesTransferred / snapshot.totalBytes *100;
//        uploader.value = percentage;
//    },
//            function error(err){
//
//    },
//            function complete(){
//        addProfilePic();
//
//    }  
//           );          
//                            });
//
////adding function to immediantely upload profile pic
//function addProfilePic(){
//    
//   profPic.style.display = "block";
//    
//    var storage2 = firebase.storage();
//
//    var storage2Ref = storage2.ref();
//    var spaceRef = storage2Ref.child(playerRoom + '/' + localPlayerName + '/' + picName);
//
//    console.log("made it into showpic function");
//
//            // Get the download URL
//        storage2Ref.child(playerRoom + '/' + localPlayerName + '/' + picName).getDownloadURL().then(function(url) {
//          // Insert url into an <img> tag to "download"
//            var test = url;
//            document.getElementById('profPic').src = test;
//        }).catch(function(error) {
//            console.log("didn't work ");
//        });
//    
//    
//    //Adding pic file name to player data
//    console.log("ROOM IS " + playerRoom + "PLAYER IS " + localPlayerName);
//    firestore.collection(playerRoom).doc(localPlayerName).update({
//                        picFileName: picName
//                    }).catch(function(error){
//                        console.error("got an error", error);
//                    });
//    
//    fileButtonHolder.style.display = "none";
//    
//    header.style.display = "block";
//    
//    
//}
//
//
////================================END GAME / SHOW LEADERBOARDS ==============================
//
//function endGame(){
//    //window.location.href = "./mainscreen.html";
//    window.location.href = "./mainscreen.html";
//}
////
////function showLeaderboards(){
////    
////}
//
//function showScoreboard(){
//    
//    console.log("made it into scoreboard function");
//     docRefRoom.get().then(function(querySnapshot) {
//            querySnapshot.forEach(function(doc) {
//                const myData = doc.data();
//                // doc.data() is never undefined for query doc snapshots
//                //console.log("something");
//                //console.log("the players scores" + myData.playerName + "  " + myData.score);
//                //console.log(doc.id, " => ", doc.data());
//                
//                console.log("what is my score??" + myData.score);
//                
//                if(myData.lives > currentLeaderLives){
//                    
//                    currentLeaderLives = myData.lives;
//                    
//                    header.style.display = "block";
//                    header.innerText = "WINNER = " + myData.playerName;
//                    //get pic file name by adding pic file name to each player when upload pic
//                    
//                    var path = myData.roomNumber + '/' + myData.playerName + '/' + myData.picFileName;
//                    image1.style.display = "block";
//                    showLeaderPic(path);
//                   
//                }
//                
//            });
//        });
//}
//
//function showLeaderPic(path){
//    console.log("made it into showLeaderpic function");
//    
//    //var apath = path.toString();
//        var storage2 = firebase.storage();
//
//        var storage2Ref = storage2.ref();
//    
//    //console.log("PATH IS: " + path);
//    
//        // Get the download URL
//        storage2Ref.child(path).getDownloadURL().then(function(url) {
//          // Insert url into an <img> tag to "download"
//            var test = url;
//            document.getElementById('img1').src = test;
//        }).catch(function(error) {
//            console.log("didn't work ");
//        });
//    
//}
//
////=========================================================================================
//// ====================================PAGE UPDATING STUFF ================================
////=========================================================================================
//
////NEXT PAGE FUNCTION
//function nextPage(){
//  
//    //console.log("WHAT IS THE CURRENT PAGE FOR THIS PLAYER " + window.currentPage);
//    //console.log("WHAT IS THE LOCAL PLAYER NAMEEEE " + window.localPlayerName);
//    
//    window.currentPage += 1;
//    
//    console.log("THE PLAYERS ROOM dasgh= " + playerRoom);
//    //console.log("CHANGING CURRENT PAGE HEREEE TO " + window.currentPage);
//       docRefRoomData.update({
//                        pageNumber: currentPage
//                    }).catch(function(error){
//                        console.error("got an error", error);
//                    });
//    
//    getRealtimeUpdates();
//    
//}
//
////PROGRESS BAR
////============================= MC QUESTION TIMER ================================
//function startTimer(time){
//    var timeleft = parseInt(time);
//    var downloadTimer = setInterval(function(){
//        document.getElementById("progressBar").value = 10 - timeleft;
//        timeleft -= 1;
//        
//        console.log("TIME LEFT = " + timeleft);
//            if(timeleft <= 0){
//                //clearPage();
//               
//                    changePlayerLives();
//                
//                
//                nextPage();
//                clearInterval(downloadTimer);
//            }
//        }, 1000);
//}
//
//
//function removePlayers(){
//    
//        if(localPlayerLives ==0){
//                //DELETE PLAYER DOCUMENT
//                docRefPlayer.delete().then(function() {
//                    console.log("Document successfully deleted!");
//                }).catch(function(error) {
//                    console.error("Error removing document: ", error);
//                });
//                
//            //END GAME
//             endGame();
//        }
//}
//        
//function updateRoomSize(){
//        
//        //track roomSize
//        docRefRoom.get().then(res => {
//            
//            roomSize = res.size;
//
//            docRefRoomData.update({
//                    numberOfPlayers: res.size
//                    }).catch(function(error){
//                        console.error("got an error", error);
//                    });
//            
//         });
//    
//    console.log("THE ROOM SIZE IS NOWWW " + roomSize);
//}
//        
//        
//       
//
//
//
////CHANGING PAGE NUMBER
//function updateScreen(doc){
//    
//    //Try to go full screen
//    //document.body.requestFullscreen();
//    
//    //Commented out for simple Cincy Trivia
//    //check for players to remove everytime
//    //removePlayers();
//    
//    //make sure room size is updated everytime
//    updateRoomSize();
//    
//    
//    if(doc && doc.exists){
//        const myData = doc.data();
//        console.log("MADE IT INTO THE DOCUMENTTTTT " + myData.pageNumber);
//       
//        // AFTER GAME IS STARTED
//        if(myData.pageNumber == 1){
//            
//            //document.body.style.backgroundImage =  "url('probst.jpg')";
//            
//            setTimeout(addPlayerNumbers,1000);
//            
//            
//        }
//        else if(myData.pageNumber == 2){
//            
////            header.style.display = "none";
////            vid.style.display = "block";
////            vid.play();
//            console.log("CHANGIN BACKGROUND IMAGE");
//            document.body.style.backgroundImage = "url('spaceb.png')";
//            
//            getMCQuestion(200);
////            if(localPlayerNumber==1){
////            startTimer(10);
////            }
//            
//            //checkForAllResponses();
//    
//        }
//        else if(myData.pageNumber == 3){
//            
//            header.style.display = "none";
//             
//            changePlayerLives();
//            
//            getRMCQuestion("104");
//            
//        } 
//          else if(myData.pageNumber == 7){
//              
//            setupRMCQuestion();  
//             
//            setTimeout(showRMCQuestion, 1000);
//            
//        } 
//           else if(myData.pageNumber == 8){
//            
//            header.style.display = "none";
//            profPic.style.display = "none";
//               
//            changePlayerLives();
//               
//            showScoreboard();
//            
//        } 
//        
//    }
//}
//
//
//getRealtimeUpdates = function () {
//    //console.log("DocRefRoom = " + playerRoom);
//    docRefRoomData.onSnapshot( function(doc){
//        console.log("MADE IT INTO update screen");
//        updateScreen(doc);
//    });
//}
//
////console.log("heregha");
////console.log("player roommmmmmmmmmmm = " + playerRoom);
//
//if(playerRoom != null){
//getRealtimeUpdates();
//}
//
////RESET FIRESTORE TO PAGE 0 on EXIT
//window.onbeforeunload = confirmExit;
//
//function confirmExit(){
//    alert("confirm exit is being called");
//    firestore.collection("RoomData").doc(playerRoom).update({
//                        pageNumber: 0
//                    }).catch(function(error){
//                        console.error("got an error", error);
//                    });
//    return false;
//    
//    
//    
//    
//    //DELETE EVERYTHING!!!
//    //deleteCollection(playerRoom);
//    
//
//}
//