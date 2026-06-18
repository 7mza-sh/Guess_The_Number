// صفحة تحديد نوع اللعبة
let gameTypeSec = document.getElementById('gameModeSelectionScreen');
let computerBtn = document.getElementById('computerGuessesBtn');
let userBtn = document.getElementById('userGuessesBtn');

// صفحة تحديد مستوى اللعبة (مستخدم)
let gameLevelSec = document.getElementById('difficultySelectionScreen');
let easyBtn = document.getElementById('easyDifficultyBtn');
let mediumBtn = document.getElementById('mediumDifficultyBtn');
let hardBtn = document.getElementById('hardDifficultyBtn');

// صفحة التخمين
let guessSec = document.getElementById('playerGuessScreen');
let gameLevel = document.getElementById('selectedDifficultyValue');
let numLength = document.getElementById('numberDigitsValue');
let wastedTurns = document.getElementById('attemptsCountValue');
let filledStar = document.getElementById('currentRatingFilledStar');
let emptyStar = document.getElementById('currentRatingEmptyStar');
let turnsLimit = document.getElementById('attemptsUntilStarLossValue');
let noGuessYetMessage = document.getElementById('noGuessYetMessage');
let guessMessage = document.getElementById('guessDirectionMessage');
let lowerOrHigher = document.getElementById('guessDirectionValue');
let userGuess = document.getElementById('lastComparedNumberValue');
let userGuessInp = document.getElementById('playerGuessInput');
let userGuessInpBtn = document.getElementById('submitGuessBtn');
let giveUpBtn = document.getElementById('giveUpBtn');

// صفحة تأكيد الاستسلام
let giveUpConfirmSes = document.getElementById('giveUpConfirmScreen');
let continueBtn = document.getElementById('continuePlayingBtn');
let giveUpConfirmBtn = document.getElementById('confirmGiveUpBtn');

// صفحة الفوز
let userWinSec = document.getElementById('winScreen');
let winSecretNumber = document.getElementById('winSecretNumberValue')
let winFailedTurns = document.getElementById('winFailedAttemptsValue');
let winFilledStar = document.getElementById('winRatingFilledStar');
let winEmptyStar = document.getElementById('winRatingEmptyStar');
let winRatingLabelValue = document.getElementById('winRatingLabelValue');
let but = document.getElementById('but');
let newGameBtn = document.getElementById('playAgainFromWinBtn');

// صفحة الهزيمة
let userLoseSec = document.getElementById('loseScreen');
let loseSecretNumber = document.getElementById('loseSecretNumberValue');
let loseFailedTurns = document.getElementById('loseAttemptsValue');
let newGameBtn2 = document.getElementById('playAgainFromLoseBtn');

// الصفحة الأولى (كومبيوتر)
let computerSec1 = document.getElementById('digitCountScreen');
let computerInp = document.getElementById('digitCountInput');
let computerInpBtn = document.getElementById('startGameBtn');

// الصفحة الثانية (كومبيوتر)
let computerSec2 = document.getElementById('guessScreen');
let computerGuess = document.getElementById('currentComputerGuess');
let computerTurns = document.getElementById('remainingGuessCount');
let higherBtn = document.getElementById('higherGuessBtn');
let lowerBtn = document.getElementById('lowerGuessBtn');
let correctBtn = document.getElementById('correctGuessBtn');
let falseBtn = document.getElementById('falseGuessBtn');

// صفحة الفوز
let winSec = document.getElementById('computerVictoryScreen');
let newGameBtn3 = document.getElementById('newComputerVictoryGameBtn');

// صفحة الهزيمة
let loseSec = document.getElementById('userVictoryScreen');
let newGameBtn4 = document.getElementById('newUserVictoryGameBtn');

// اختيار الصفحة بناء على اختيار المستخدم
function gameSelect (type) {
  if (type === 'computer') {
    gameTypeSec.hidden = true;
    computerSec1.hidden = false;
  }
  else if (type === 'user') {
    gameTypeSec.hidden = true;
    gameLevelSec.hidden = false;
  }
}