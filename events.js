// تحديد الصفحة بناء على اختيار المستخدم
computerBtn.addEventListener('click', () => gameSellect('computer'));
userBtn.addEventListener('click', () => gameSellect('user'));

// الانتقال من الصفحة الأولى إلى الثانية (كومبيوتر)
computerInpBtn.addEventListener('click', telebort);

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