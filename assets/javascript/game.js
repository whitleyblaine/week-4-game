  var randomizedScore;
  var wins;
  var losses;
  var crystalOneVal;
  var crystalTwoVal;
  var crystalThreeVal;
  var crystalFourVal;
  var currentScoreVal;

  function init() {
    randomizedScore = Math.floor(19 + (Math.random() * 101));
    wins = 0;
    losses = 0;
    crystalOneVal = Math.floor(1 + (Math.random() * 12));
    crystalTwoVal = Math.floor(1 + (Math.random() * 12));
    crystalThreeVal = Math.floor(1 + (Math.random() * 12));
    crystalFourVal = Math.floor(1 + (Math.random() * 12));
    currentScoreVal = 0;
  }

  function reset() {
    randomizedScore = Math.floor(19 + (Math.random() * 101));
    crystalOneVal = Math.floor(1 + (Math.random() * 12));
    crystalTwoVal = Math.floor(1 + (Math.random() * 12));
    crystalThreeVal = Math.floor(1 + (Math.random() * 12));
    crystalFourVal = Math.floor(1 + (Math.random() * 12));
    currentScoreVal = 0;
    $('#winsLosses').html("<p>Wins: " + wins + '<br>' + "<p>Losses: " + losses);
    $('#goalScore').html("Goal Score: " + randomizedScore);
    $('#currentScore').html('<p>Your total score is: ' + currentScoreVal);
  }


  function winLose() {
    if(currentScoreVal > randomizedScore) {
      alert("YOU LOSE!");
      losses += 1;
      reset();
    };
    if (currentScoreVal == randomizedScore) {
      alert("YOU WIN!!!");
      wins += 1;
      reset();
    };
  }


  // // random number checker
  // var sampleArr = [];
  // for(i=1; i < 200; i++) {
  //   var rando = Math.floor(19 + (Math.random() * 101));
  //   sampleArr.push(rando);
  // };
  // console.log(sampleArr);

  $(document).ready(function() {
    init();
    $('#goalScore').html("Goal Score: " + randomizedScore);
    $('#winsLosses').html("<p>Wins: " + wins + '<br>' + "<p>Losses: " + losses);
    $('#currentScore').html('<p>Your total score is: ' + currentScoreVal);
  });

  // Crystal click functions

  $('#crystal1').click(function() {
    currentScoreVal += crystalOneVal;
    $('#currentScore').html('<p>Your total score is: ' + currentScoreVal);
    winLose();
  });

  $('#crystal2').click(function() {
    currentScoreVal += crystalTwoVal;
    $('#currentScore').html('<p>Your total score is: ' + currentScoreVal);
    winLose();
  });

  $('#crystal3').click(function() {
    currentScoreVal += crystalThreeVal;
    $('#currentScore').html('<p>Your total score is: ' + currentScoreVal);
    winLose();
  });

  $('#crystal4').click(function() {
    currentScoreVal += crystalFourVal;
    $('#currentScore').html('<p>Your total score is: ' + currentScoreVal);
    winLose();
  });