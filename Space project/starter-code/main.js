

fetch("index.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("header").innerHTML = data;

    // ✅ نفذ تأثير الحروف بعد تحميل الهيدر
    document.querySelectorAll('.scale-word').forEach(el => {
      el.innerHTML = el.textContent
        .split('')
        .map(char => `<span>${char}</span>`)
        .join('');
    });
  });
