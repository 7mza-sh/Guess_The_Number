// جميع المتغيرات العامة بالمشروع
let minValue = 0;
let guess = 0.5;
let maxValue = 1;
let turnes = 1;

// الانتقال من الصفحة الأولى للصفحة الثانية  
function teleport () {
  if (computerInp.value > 0 && computerInp.value == Math.floor(computerInp.value)) {
    computerSec1.hidden = true;
    computerSec2.hidden = false;
    firstGuess();
    addValue();
  }
}

// تخمين البداية حسب عدد الخانات
function firstGuess () {
  for (let i = 0; i < computerInp.value; i++) {
    guess *= 10;
    maxValue *= 10;
  }
  computerGuess.textContent = guess;
}

// دالة حساب التخمين
function calc (type) {
  
  // دالة التحقق من إمكانية التخمين
  function resetCheck () {
    if ((guess === Math.floor((minValue + maxValue) / 2))
    && (guess === Math.floor((guess + maxValue) / 2))) {
      return true;
    }
    else {
      return false;
    }
  }
  
  // تقليل التخمين
  function low () {
    maxValue = guess;
    guess = Math.floor((minValue + maxValue) / 2);
    computerGuess.textContent = guess;
  }
  
  // تزويد التخمين
  function high () {
    let value = guess;
    guess = Math.floor((guess + maxValue) / 2);
    minValue = value;
    computerGuess.textContent = guess;
  }
  
  // استدعاء دالة التزويد
  if (type === 'high') {
    high();
  }
  
  // استدعاء دالة التقليل
  else if (type === 'low') {
    
    // شرط استدعاء دالة التقليل
    if (guess !== Math.pow(10, Number(computerInp.value) - 1)) {
      low();
    }
    
    // إصلاح مشكلة عدد الخانات
    while (String(guess).length < computerInp.value) {
      high ();
    }
  }
  
  // تقليل عدد التخمينات بعد كل ضغطة
  lessTurns();
  
  // في حالة انعدام إمكانية التخمين مرة أخرى
  if (resetCheck ()) {
    reset();
  }
}

// حساب عدد الخانات
function addValue () {
  turnes = ((computerInp.value * 3) + Math.ceil(computerInp.value / 3)) - 1;
  computerTurns.textContent = turnes;
}

// تقليل عدد الاحتمالات المتبقية بالضغط على الأزرار
function lessTurns () {
  if (turnes === 1) {
  reset();
  }
  turnes--;
  computerTurns.textContent = turnes;
}

// حذف أزرار التخمين بعد نفاذ الفرص (تمت مناداة الدالة في دالة التقليل)
function reset () {
  lowerBtn.hidden = true;
  higherBtn.hidden = true;
  falseBtn.hidden = false;
}

// إنشاء دوال عرض النتائج عند الضغط على زر النتيجة
function result (status) {
  if (status === 'win') {
    computerSec2.hidden = true;
    loseSec.hidden = true;
    winSec.hidden = false;
  }
  else if (status === 'lose') {
    computerSec2.hidden = true;
    winSec.hidden = true;
    loseSec.hidden = false;
  }
}