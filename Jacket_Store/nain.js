// ⛔ القائمة الجانبية (الهامبرجر)
const openBtn = document.getElementById('open');
const closeBtn = document.getElementById('close');
const menu = document.querySelector('.menu');
const header = document.querySelector('header');

closeBtn.onclick = function () {
    menu.classList.remove('show');       
    this.classList.add('hide');
    openBtn.classList.remove('hide');
    header.classList.remove('openHeader');
};

openBtn.onclick = function () {
    this.classList.add('hide');
    menu.classList.remove('hide');
    menu.classList.add('show');          
    closeBtn.classList.remove('hide');
};






// 🔍 حقل البحث - إظهار عند المرور والتثبيت
const searchInput = document.getElementById('searchInput');
const showBtn = document.getElementById('showSearch');

let isPinned = false;
let hoverTimeout;

showBtn.onmouseenter = function () {
    if (!isPinned) {
        searchInput.classList.add('show');
    }
};

showBtn.onmouseleave = function () {
    if (!isPinned) {
        hoverTimeout = setTimeout(() => {
            searchInput.classList.remove('show');
        }, 1000);
    }
};

showBtn.onclick = function () {
    isPinned = true;
    searchInput.classList.add('show');
    searchInput.focus();
};

document.addEventListener('click', function (e) {
    if (
        isPinned &&
        !searchInput.contains(e.target) &&
        !showBtn.contains(e.target)
    ) {
        searchInput.classList.remove('show');
        isPinned = false;
    }
});







// ⌨️ كتابة تلقائية (Type Effect)
const phrases = [
    "Shop with us.",
    "Best jackets."
];

let currentPhraseIndex = 0;
let currentCharIndex = 0;
let isDeleting = false;
const textElement = document.getElementById('textContent');

function typeEffect() {
    const currentPhrase = phrases[currentPhraseIndex];

    currentCharIndex += isDeleting ? -1 : 1;
    textElement.innerHTML = currentPhrase.substring(0, currentCharIndex);

    let typingSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && currentCharIndex === currentPhrase.length) {
        typingSpeed = 1500;
        isDeleting = true;
    } else if (isDeleting && currentCharIndex === 0) {
        isDeleting = false;
        currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
        typingSpeed = 500;
    }

    setTimeout(typeEffect, typingSpeed);
}

typeEffect();







// 🖼️ السلايدر التلقائي للصور
const images = [
    "./images/image1.png",
    "./images/image2.png"
];

let currentIndex = 0;
let sliderInterval;
let pauseTimeout;

function showImage() {
    document.getElementById("jack").src = images[currentIndex];
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage();
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage();
}

function startSlider() {
    sliderInterval = setInterval(nextImage, 2000);
}

function pauseSlider() {
    clearInterval(sliderInterval);
    clearTimeout(pauseTimeout);

    pauseTimeout = setTimeout(() => {
        startSlider();
    }, 5000);
}

function nextWithPause() {
    nextImage();
    pauseSlider();
}

function prevWithPause() {
    prevImage();
    pauseSlider();
}

startSlider();







// 🛒 عدد المنتجات في السلة + حفظها
let cartCount = 0;

if (localStorage.getItem('cartCount')) {
    cartCount = parseInt(localStorage.getItem('cartCount'));
    document.getElementById('cartCount').textContent = cartCount;
}

function addToCart() {
    cartCount++;
    document.getElementById('cartCount').textContent = cartCount;
    localStorage.setItem('cartCount', cartCount);
    showToast("The product has been added to the cart.🛒");
}








// ✅ توست (رسالة صغيرة تظهر لفترة قصيرة)
function showToast(message) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.style.opacity = '1';

    setTimeout(() => {
        toast.style.opacity = '0';
    }, 2000);
}








// 👤 عرض صورة البروفايل في الشعار (logo)
const loggedUser = sessionStorage.getItem("loggedUser");

if (loggedUser) {
    const data = JSON.parse(localStorage.getItem(loggedUser));
    if (data && data.image) {
        document.getElementById("logoImage").src = data.image;
    }
}
