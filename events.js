// تحديد الصفحة بناء على اختيار المستخدم
computerBtn.addEventListener('click', () => gameSelect('computer'));
userBtn.addEventListener('click', () => gameSelect('user'));

// ما بعد تحديد مستوى اللعبة
easyBtn.addEventListener('click', () => levelSelected ('سهل'));
mediumBtn.addEventListener('click', () => levelSelected ('متوسط'));
hardBtn.addEventListener('click', () => levelSelected ('صعب'));

// إرسال التخمين
userGuessInpBtn.addEventListener('click', () => guessSubmit ());

// الاستسلام
giveUpBtn.addEventListener('click', () => giveUp ('go'));
continueBtn.addEventListener('click', () => giveUp ('no'));
giveUpConfirmBtn.addEventListener('click', () => giveUp ('yes'));

// الانتقال من الصفحة الأولى إلى الثانية (كومبيوتر)
computerInpBtn.addEventListener('click', () => teleport ());

// تزويد وتنقيص التخمين
lowerBtn.addEventListener('click', () => calc('low'));
higherBtn.addEventListener('click', () => calc('high'));

// تحديد الفوز أو الخسارة
correctBtn.addEventListener('click', () => result('win'));
falseBtn.addEventListener('click', () => result('lose'));

// إعادة تحميل الصفحة
newGameBtn.addEventListener('click', () => location.reload());
newGameBtn2.addEventListener('click', () => location.reload());
newGameBtn3.addEventListener('click', () => location.reload());
newGameBtn4.addEventListener('click', () => location.reload());