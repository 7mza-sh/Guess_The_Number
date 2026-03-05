// الحصول على العناصر من الصفحة الأولى
let sec1 = document.getElementById('screen-start');
let inp = document.getElementById('digitsInput');
let btn = document.getElementById('startBtn');

// الحصول على العناصر من الصفحة الثانية
let sec2 = document.getElementById('screen-guess');
let guess = document.getElementById('computerGuess');
let turnes = document.getElementById('remainingGuesses');
let btn_higher = document.getElementById('higherBtn');
let btn_lower = document.getElementById('lowerBtn');
let btn_true = document.getElementById('correctBtn');
let btn_false = document.getElementById('falseBtn');

// الحصول على العناصر من الصفحة الثالثة
let sec3 = document.getElementById('screen-result');
let btn_replay = document.getElementById('newGameBtn');

// الحصول على العناصر من الصفحة الرابعة
let sec4 = document.getElementById('screen-result2');
let btn_replay2 = document.getElementById('newGameBtn2');

// الانتقال من الصفحة الأولى للصفحة الثانية  
btn.addEventListener('click', _ => {
  if (inp.value > 0 && inp.value == Math.floor(inp.value)) {
    sec1.hidden = true;
    sec2.hidden = false;
  }
  x();
});

// المتغيرات المسئولة عن التخمينات
let min_value = 0;
let value = 0.5;
let max_value = 1;

// تخمين البداية حسب عدد الخانات (تمت مناداة الدالة في حدث زر البداية)
function x () {
  for (let i = 0; i < inp.value; i++) {
    value *= 10;
    max_value *= 10;
}
  guess.textContent = value;
}

// تقليل التخمين
function low () {
  let z = value;
  for (let i = 0; i < 2; i++) {
      value = Math.floor((min_value + max_value) / 2);
      max_value = z;
      guess.textContent = value;
  }
}
btn_lower.addEventListener('click', low);

// تزويد التخمين
function high () {
  let z = value;
  value = Math.floor((value + max_value) / 2);
  min_value = z;
  guess.textContent = value;
}
btn_higher.addEventListener('click', high);

// إنشاء متغير عدد الاحتمالات
let turn = 1;

// إعطاء المتغير قيمة عند اختيار عدد الخانات
function addValue () {
  turn = ((inp.value * 3) + Math.ceil(inp.value / 3)) - 1;
  turnes.innerHTML = turn;
}
btn.addEventListener('click', addValue);

// تقليل عدد الاحتمالات المتبقية بالضغط على الأزرار
function lessValue () {
  if (turn == 1) {
  reset();
  }
  turn--;
  turnes.innerHTML = turn;
}
btn_lower.addEventListener('click', lessValue);
btn_higher.addEventListener('click', lessValue);

// حذف أزرار التخمين بعد نفاذ الفرص (تمت مناداة الدالة في دالة التقليل)
function reset () {
  btn_lower.hidden = true;
  btn_higher.hidden = true;
  btn_false.hidden = false;
}

// إنشاء دوال عرض النتائج عند الضغط على زر النتيجة
function win () {
  sec2.hidden = true;
  sec3.hidden = false;
}
function lose () {
  sec2.hidden = true;
  sec4.hidden = false;
}

// عرض النتائج عند الضغط على زر النتيجة
btn_true.addEventListener('click', lose);
btn_false.addEventListener('click', win);

// دالة إعادة تحميل الصفحة
function replay () {
  location.reload()
}

// إعادة تحميل الصفحة عنظ اللعب مرة أخرى
btn_replay.addEventListener('click', replay);
btn_replay2.addEventListener('click', replay);