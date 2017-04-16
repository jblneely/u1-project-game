function onPageLoad() {
    $("#playerOneRollButton").on("click", playerOneRollDice); //change to key up
    console.log("player one button clicked");
    $("#playerTwoRollButton").on("click", playerTwoRollDice).hide(); //change to key up
    console.log("player two button clicked");
    // $("#geomancer").on("mouseenter", geomancer).fadeIn(500);
    // console.log("geomancer mouseenter");
    // $("#geomancer").on("mouseleave", geomancer).fadeOut(500);
    // console.log("geomancer mouseleave");


}
$(onPageLoad);




// function menu() {
//     console.log("menu");
// }
//     document.addEventListener("DOMContentLoaded", function() {
//     var hamburgerMenu = document.getElementById(".hamburger");
//     console.log(startButton);
//     hamburgerMenu.addEventListener("click", function() {
//         gameStarted = true;
//         console.log('clicked!')
//         var startMenu = document.getElementById("start-menu");
//         var game = document.getElementById("game");

//         startMenu.classList.add("hidden");
//         game.classList.remove("hidden");

//     });

function getRandomNumberUpTo(max) {
    return Math.floor(Math.random() * 6) + 1;
}

var p1Sum;
var p2Sum;

var p1Array;
var p2Array;

function playerOneRollDice() {
    var die1 = $("#die1");
    var die2 = $("#die2");
    var die3 = $("#die3");
    var die4 = $("#die4");
    var die5 = $("#die5");
    var d1 = getRandomNumberUpTo(6);
    var d2 = getRandomNumberUpTo(6);
    var d3 = getRandomNumberUpTo(6);
    var d4 = getRandomNumberUpTo(6);
    var d5 = getRandomNumberUpTo(6);
    p1Sum = d1 + d2 + d3 + d4 + d5;
    console.log(p1Sum);
    p1Array = [d1, d2, d3, d4, d5];
    console.log(p1Array);
    $("dice").removeClass("d1", "d2", "d3", "d4", "d5");
    die1.addClass("d" + d1);
    die2.addClass("d" + d2);
    die3.addClass("d" + d3);
    die4.addClass("d" + d4);
    die5.addClass("d" + d5);

    $("#player1Sum").html("FIRST PLAYER ROLLED " + p1Sum + ".");
    $("#playerTwoRollButton").show();
    $("#playerOneRollButton").hide();


}

function playerTwoRollDice() {
    var die6 = $("#die6");
    var die7 = $("#die7");
    var die8 = $("#die8");
    var die9 = $("#die9");
    var die10 = $("#die10");
    var d6 = getRandomNumberUpTo(6);
    var d7 = getRandomNumberUpTo(6);
    var d8 = getRandomNumberUpTo(6);
    var d9 = getRandomNumberUpTo(6);
    var d10 = getRandomNumberUpTo(6);
    p2Sum = d6 + d7 + d8 + d9 + d10;
    console.log(p2Sum);
    p2Array = [d6, d7, d8, d9, d10];
    console.log(p2Array);
    $("dice").removeClass("d6", "d7", "d8", "d9", "d10");
    die6.addClass("d" + d6);
    die7.addClass("d" + d7);
    die8.addClass("d" + d8);
    die9.addClass("d" + d9);
    die10.addClass("d" + d10);

    $("#player2Sum").html("SECOND PLAYER ROLLED " + p2Sum + ".");
    $("#playerTwoRollButton").hide();
    compareSums();
}

function compareSums() {
    $("#winnerMessage").hide()
    if (p1Sum > p2Sum) {
        $("#winnerMessage").text("PLAYER ONE IS THE HIGHROLLER");
    } else if (p1Sum === p2Sum) {
        $("#winnerMessage").text("Tie!  Re-roll please.");
    } else {
        $("#winnerMessage").text("PLAYER TWO IS THE HIGHROLLER");
    }
    $("#winnerMessage").fadeIn(1500);
}


//--------OF A KIND LOGIC - PUT THIS IN A FUNCTION ----------

// var ofAKind = new Object;
// for (var i = 0; i < p1Array.length; i++) {
//     var number = p1Array[i];
//     console.log(number)
//     if (ofAKind[number] === undefined) {
//         ofAKind[number] = 0;
//     }
//     ofAKind[number] += 1;
// }
// console.log(ofAKind);
// console.log('5 has ' + ofAKind[5] + ' occurrences');


//-----------------geomancer LOGIC ------------------
// var randomNumbergeomancer = Math.floor(Math.random() * 20);

// function geomancer = '';
// switch (randomNumbergeomancer) {
//     case 0:
//         geomancer = 'Do not count on it';
//         break;
//     case 1:
//         geomancer = 'My reply is no';
//         break;
//     case 2:
//         geomancer = 'My sources say no';
//         break;
//     case 3:
//         geomancer = 'Outlook not so good';
//         break;
//     case 4:
//         geomancer = 'Very doubtful';
//         break;
//     case 5:
//         geomancer = 'It is certain';
//         break;
//     case 6:
//         geomancer = 'It is decidedly so';
//         break;
//     case 7:
//         geomancer = 'Without a doubt';
//         break;
//     case 8:
//         geomancer = 'Yes definitely';
//         break;
//     case 9:
//         geomancer = 'You may rely on it';
//         break;
//     case 10:
//         geomancer = 'As I see it, yes';
//         break;
//     case 11:
//         geomancer = 'Most likely';
//         break;
//     case 12:
//         geomancer = 'Outlook good';
//         break;
//     case 13:
//         geomancer = 'Yes';
//         break;
//     case 14:
//         geomancer = 'Signs point to yes';
//         break;
//     case 15:
//         geomancer = 'Reply hazy try again';
//         break;
//     case 16:
//         geomancer = 'Ask again later';
//         break;
//     case 17:
//         geomancer = 'Better not tell you now';ß
//         break;
//     case 18:
//         geomancer = 'Cannot predict now';
//         break;
//     case 19:
//         geomancer = 'Signs point to yes';
//         break;
//     case 20:
//         geomancer = 'Concentrate and ask again';
//         break;
// }



// function BestOfAKind() {
//     p1Array.sort();

// }



// var resetButton = document.getElementById("resetButton") {
//     $("#resetButton").on("click").location.reload("body");
// };
