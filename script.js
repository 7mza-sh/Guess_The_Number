// الحصول على العناصر من الصفحة الأولى
let sec1 = document.getElementById('screen-start');
let inp = document.getElementById('digitsInput');
let inpBtn = document.getElementById('startBtn');

// الحصول على العناصر من الصفحة الثانية
let sec2 = document.getElementById('screen-guess');
let computerGuess = document.getElementById('computerGuess');
let computerTurnes = document.getElementById('remainingGuesses');
let higherBtn = document.getElementById('higherBtn');
let lowerBtn = document.getElementById('lowerBtn');
let correctBtn = document.getElementById('correctBtn');
let falseBtn = document.getElementById('falseBtn');

// الحصول على العناصر من الصفحة الثالثة
let sec3 = document.getElementById('screen-result');
let newGameBtn = document.getElementById('newGameBtn');

// الحصول على العناصر من الصفحة الرابعة
let sec4 = document.getElementById('screen-result2');
let newGameBtn2 = document.getElementById('newGameBtn2');

// جميع المتغيرات العامة بالمشروع
let minValue = 0;
let guess = 0.5;
let maxValue = 1;
let turnes = 1;

// الانتقال من الصفحة الأولى للصفحة الثانية  
inpBtn.addEventListener('click', _ => {
  if (inp.value > 0 && inp.value == Math.floor(inp.value)) {
    sec1.hidden = true;
    sec2.hidden = false;
    firstGuess();
  }
});

// تخمين البداية حسب عدد الخانات (تمت مناداة الدالة في حدث زر البداية)
function firstGuess () {
  for (let i = 0; i < inp.value; i++) {
    guess *= 10;
    maxValue *= 10;
  }
  computerGuess.textContent = guess;
}

// تقليل التخمين
function low () {
  let value = guess;
  for (let i = 0; i < 2; i++) {
    guess = Math.floor((minValue + maxValue) / 2);
    maxValue = value;
    computerGuess.textContent = guess;
  }
}
lowerBtn.addEventListener('click', low);

// تزويد التخمين
function high () {
  let value = guess;
  guess = Math.floor((guess + maxValue) / 2);
  minValue = value;
  computerGuess.textContent = guess;
}
higherBtn.addEventListener('click', high);

// حساب عدد الخانات
function addValue () {
  turnes = ((inp.value * 3) + Math.ceil(inp.value / 3)) - 1;
  computerTurnes.textContent = turnes;
}
inpBtn.addEventListener('click', addValue);

// تقليل عدد الاحتمالات المتبقية بالضغط على الأزرار
function lessTurns () {
  if (turnes == 1) {
  reset();
  }
  turnes--;
  computerTurnes.textContent = turnes;
}
lowerBtn.addEventListener('click', lessTurns);
higherBtn.addEventListener('click', lessTurns);

// حذف أزرار التخمين بعد نفاذ الفرص (تمت مناداة الدالة في دالة التقليل)
function reset () {
  lowerBtn.hidden = true;
  higherBtn.hidden = true;
  falseBtn.hidden = false;
}

// إنشاء دوال عرض النتائج عند الضغط على زر النتيجة
function result (status) {
  if (status === 'win') {
    sec2.hidden = true;
    sec4.hidden = false;
  }
  else if (status === 'lose') {
    sec2.hidden = true;
    sec3.hidden = false;
  }
}

// عرض النتائج عند الضغط على زر النتيجة
correctBtn.addEventListener('click', _ => result('win'));
falseBtn.addEventListener('click', _ => result('lose'));

// دالة إعادة تحميل الصفحة
function replay () {
  location.reload()
}

// إعادة تحميل الصفحة عنظ اللعب مرة أخرى
newGameBtn.addEventListener('click', replay);
newGameBtn2.addEventListener('click', replay);