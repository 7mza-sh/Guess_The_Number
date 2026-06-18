// جميع المتغيرات العامة في المشروع
let num = 0;
let numLengthValue = 0;
let turnsLimitValue = 0;
let starOneLimit = 0;
let starTwoLimit = 0;
let starThreeLimit = 0;
let guessesTried = 0;

// دالة ما بعد تحديد المستوى
function levelSelected (level) {
  
  // الدوال المستدعاة حسب كل مستوى
  if (level === 'سهل') {
    numLengthCalc (2, 3);
  }
  else if (level === 'متوسط') {
    numLengthCalc (4, 5);
  }
  else if (level === 'صعب') {
    numLengthCalc (6, 7);
  }
  
  // دوال مستدعاة في كل الحالات
  function calledFunctions () {
    rate ('set');
    numGenerate ();
    startGame ();
    levelSelectedData (level);
  }
  calledFunctions ();
}

// حساب عدد خانات الرقم بناء على المستوى
function numLengthCalc (num1, num2) {
  let randomCheck = ( Math.floor(Math.random() * 2) === 0);
  if (randomCheck) {
    numLengthValue = num1;
  }
  else {
    numLengthValue = num2;
  }
}

// دالة التقييم
function rate (type) {
  
  // حساب حد الفرص لكل نجمة
  function starsLimits () {
    let number = ((numLengthValue * 3) + Math.ceil(numLengthValue / 3));
    starOneLimit = number + 1;
    starTwoLimit = Math.ceil(number / 2) + 1;
    starThreeLimit = Math.floor(number / 2) + 1;
  }
  
  // العرض في لوحة اللعب، ولوحة الفوز
  function ubdateRate () {
    if (starThreeLimit !== 0) {
      if (starOneLimit !== 1) {
        starOneLimit--;
        showRate ('starLevelIsOne');
      }
      else if (starTwoLimit !== 1) {
        starTwoLimit--;
        showRate ('starLevelIsTwo');
      }
      else if (starThreeLimit !== 0) {
        starThreeLimit--;
        showRate ('starLevelIsThree');
        
        // تصفير النجوم (المستوى الرابع)
        if (starThreeLimit === 0) {
          showRate ('starLevelIsFour');
        }
      }
    }
  }
  
  // استدعاء حسب نوع المناداة
  if (type === 'set') {
    starsLimits ();
  }
  else if (type === 'ubdateRate') {
    ubdateRate ();
  }
}

// دالة توليد الرقم
function numGenerate () {
  while (String(num).length !== numLengthValue) {
    num = Math.floor(Math.random() * Math.pow(10, numLengthValue));
  }
}

// دالة إرسال التخمين
function guessSubmit () {
  if (userGuessInp.value !== '') {
    guessesTried++;
    submitGuessData ('wastedTurnsShow');
    if (guessesTried === 1) {
      submitGuessData ('guessMessageShow');
    }
    if (userGuessInp.value == num) {
      submitGuessData ('winSecShow');
    }
    else {
      if (userGuessInp.value > num) {
        submitGuessData ('guessIsLowerOrHigher', 'guessIsLower');
      }
      else if (userGuessInp.value < num) {
        submitGuessData ('guessIsLowerOrHigher', 'guessIsHigher');
      }
    }
    rate ('ubdateRate');
    submitGuessData ('userGuessShow');
    submitGuessData ('clearInp');
  }
}
  
// دالة الانتقال
function startGame () {
  gameLevelSec.hidden = true;
  guessSec.hidden = false;
}

// دالة تنفذ بمجرد تحديد مستوى اللعبة
function levelSelectedData (level) {
  gameLevel.textContent = level;
  numLength.textContent = numLengthValue;
  turnsLimit.textContent = starOneLimit;
}

// دالة عرض التقييم
function showRate (type) {
  
  // دالة المستوى الأول
  function starLevelIsOne () {
    turnsLimit.textContent = starOneLimit;
    filledStar.textContent = '★★★';
    emptyStar.textContent = '';
    winSecDataShow ('رائع', false);
  }
  
  // دالة المستوى الثاني
  function starLevelIsTwo () {
    turnsLimit.textContent = starTwoLimit;
    filledStar.textContent = '★★';
    emptyStar.textContent = '☆';
    winSecDataShow ('جيد', false);
  }
  
  // دالة المستوى الثالث
  function starLevelIsThree () {
    turnsLimit.textContent = starThreeLimit;
    filledStar.textContent = '★';
    emptyStar.textContent = '☆☆';
    winSecDataShow ('متوسط', false);
  }
  
  // دالة المستوى الرابع
  function starLevelIsFour () {
    filledStar.textContent = '';
    emptyStar.textContent = '☆☆☆';
    winSecDataShow ('😅 ضعيف', true);
  }
  
  // استدعاء الدوال
  if (type === 'starLevelIsOne') {
    starLevelIsOne ();
  }
  else if (type === 'starLevelIsTwo') {
    starLevelIsTwo ();
  }
  else if (type === 'starLevelIsThree') {
    starLevelIsThree ();
  }
  else if (type === 'starLevelIsFour') {
    starLevelIsFour ();
  }
}

// دالة إرسال التخمين
function submitGuessData (type1, type2) {
  
  // دالة عرض الفرض الضائعة
  function wastedTurnsShow () {
    wastedTurns.textContent = guessesTried;
  }
  
  // دالة عرض رسالة التخمين
  function guessMessageShow () {
    noGuessYetMessage.hidden = true;
    guessMessage.hidden = false;
  }
  
  // دالة عرض صفحة الفوز
  function winSecShow () {
    guessSec.hidden = true;
    userWinSec.hidden = false;
  }
  
  // دالة مقارنة التخمين
  function guessIsLowerOrHigher (type) {
    
    // دالة ("التخمين أقل")
    function guessIsLower () {
      lowerOrHigher.textContent = 'أقل';
    }
    
    // دالة ("التخمين أعلى")
    function guessIsHigher () {
      lowerOrHigher.textContent = 'أكثر';
    }
    
    // استدعاء الدوال
    if (type === 'guessIsLower') {
      guessIsLower();
    }
    else if (type === 'guessIsHigher') {
      guessIsHigher();
    }
  }
  
  // دالة عرض تخمين المستخدم
  function userGuessShow () {
    userGuess.textContent = userGuessInp.value;
  }
  
  // تفريغ حقل الإدخال
  function clearInp() {
    userGuessInp.value = '';
  }
  
  // تنفيذ الدوال
  if (type1 === 'wastedTurnsShow') {
    wastedTurnsShow();
  }
  else if (type1 === 'guessMessageShow') {
    guessMessageShow();
  }
  else if (type1 === 'winSecShow') {
    winSecShow();
  }
  else if (type1 === 'guessIsLowerOrHigher') {
    guessIsLowerOrHigher(type2);
  }
  else if (type1 === 'userGuessShow') {
    userGuessShow();
  }
  else if (type1 === 'clearInp') {
    clearInp();
  }
}

// دالة صفحة الفوز
function winSecDataShow (message, butMode) {
  winSecretNumber.textContent = num;
  winRatingLabelValue.textContent = message;
  winFilledStar.textContent = filledStar.textContent;
  winEmptyStar.textContent = emptyStar.textContent;
  winFailedTurns.textContent = guessesTried;
  but.hidden = !butMode;
}

// دالة صفحة الهزيمة
function loseSecDataShow () {
  loseSecretNumber.textContent = num;
  loseFailedTurns.textContent = guessesTried;
}

// دالة الاستسلام
function giveUp (type) {
  
  // دالة عرض صفحة تأكيد الاستسلام
  function go () {
    guessSec.hidden = true;
    giveUpConfirmSes.hidden = false;
  }
  
  // دالة تأكيد الاستسلام
  function yes () {
    // دالة عرض صفحة الهزيمة
    function loseSecShow () {
      userLoseSec.hidden = false;
      giveUpConfirmSes.hidden = true;
    }
    loseSecShow ();
    loseSecDataShow ();
  }
  
  // دالة استكمال المباراة
  function no () {
    guessSec.hidden = false;
    giveUpConfirmSes.hidden = true;
  }
  
  // استدعاء الدوال
  if (type === 'go') {
    go ();
  }
  else if (type === 'yes') {
    yes ();
  }
  else if (type === 'no') {
    no ();
  }
}