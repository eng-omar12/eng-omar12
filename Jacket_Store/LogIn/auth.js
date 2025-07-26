

// ✅ إخفاء وإظهار روابط تسجيل الدخول والتسجيل
window.addEventListener("DOMContentLoaded", function () {
    const loginLink = document.getElementById("loginLink");
    const signupLink = document.getElementById("signupLink");
    const userIcon = document.getElementById("userIcon");

    const loggedUser = localStorage.getItem("loggedUser");

    if (loggedUser) {
        if (loginLink) loginLink.style.display = "none";
        if (signupLink) signupLink.style.display = "none";
        if (userIcon) userIcon.href = "./LogIn/profile.html";
    } else {
        if (loginLink) loginLink.style.display = "list-item";
        if (signupLink) signupLink.style.display = "list-item";
        if (userIcon) userIcon.href = "./LogIn/signup.html";
    }
});







// ✅ تسجيل حساب جديد (Sign Up)
function signup(event) {
    event.preventDefault();

    const first = document.getElementById("first").value.trim();
    const last = document.getElementById("last").value.trim();
    const email = document.getElementById("email").value.trim();
    const address = document.getElementById("address").value.trim();
    const pass = document.getElementById("pass").value.trim();

    const errorFirst = document.getElementById("errorFirst");
    const errorLast = document.getElementById("errorLast");
    const errorEmail = document.getElementById("errorEmail");
    const errorAddress = document.getElementById("errorAddress");
    const errorPassword = document.getElementById("errorPassword");

    [errorFirst, errorLast, errorEmail, errorAddress, errorPassword].forEach(el => {
        if (el) {
            el.textContent = "";
            el.classList.remove("show");
        }
    });

    let hasError = false;
    const nameRegex = /^[A-Za-z\s]+$/;

    if (!first || !nameRegex.test(first)) {
        errorFirst.textContent = !first ? "First name is required" : "Enter a name using letters only";
        errorFirst.classList.add("show");
        hasError = true;
    }

    if (!last || !nameRegex.test(last)) {
        errorLast.textContent = !last ? "Last name is required" : "Enter a name using letters only";
        errorLast.classList.add("show");
        hasError = true;
    }

    if (!email) {
        errorEmail.textContent = "Email is required";
        errorEmail.classList.add("show");
        hasError = true;
    }

    if (!address) {
        errorAddress.textContent = "Address is required";
        errorAddress.classList.add("show");
        hasError = true;
    }

    if (!pass) {
        errorPassword.textContent = "Password is required";
        errorPassword.classList.add("show");
        hasError = true;
    } else if (pass.length <= 7 || !/[A-Z]/.test(pass) || !/\d/.test(pass)) {
        errorPassword.textContent = "Min 8 chars, use uppercase, symbols & numbers";
        errorPassword.classList.add("show");
        hasError = true;
    }

    if (hasError) return;

    const userData = {
        name: `${first} ${last}`,
        email,
        address,
        password: pass,
    };

    localStorage.setItem(email, JSON.stringify(userData));
    localStorage.setItem("loggedUser", email);
    window.location.href = "../index.html"; // 🔁 تأكد من المسار
}







// ✅ تسجيل الدخول (Login)
function login(event) {
    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("pass").value.trim();

    const errorEmail = document.getElementById("errorEmail");
    const errorPassword = document.getElementById("errorPass");

    [errorEmail, errorPassword].forEach(el => {
        if (el) {
            el.textContent = "";
            el.classList.remove("show");
        }
    });

    let hasError = false;

    if (!email) {
        errorEmail.textContent = "Email is required";
        errorEmail.classList.add("show");
        hasError = true;
    }

    if (!password) {
        errorPassword.textContent = "Password is required";
        errorPassword.classList.add("show");
        hasError = true;
    }

    if (hasError) return;

    const storedUser = localStorage.getItem(email);
    if (!storedUser) {
        errorEmail.textContent = "Email is not registered";
        errorEmail.classList.add("show");
        return;
    }

    const userData = JSON.parse(storedUser);

    if (userData.password !== password) {
        errorPassword.textContent = "Incorrect password";
        errorPassword.classList.add("show");
        return;
    }

    localStorage.setItem("loggedUser", email);
    window.location.href = "../index.html"; // 🔁 تأكد من المسار
}





// ✅ تحميل بيانات الملف الشخصي (Profile Page)
const loggedEmail = localStorage.getItem("loggedUser");

if (loggedEmail) {
    const nameInput = document.getElementById("userNameInput");
    const emailInput = document.getElementById("userEmailInput");
    const addressInput = document.getElementById("userAddressInput");
    const passInput = document.getElementById("pass");

    const data = JSON.parse(localStorage.getItem(loggedEmail));
    if (data) {
        if (nameInput) nameInput.value = data.name;
        if (emailInput) emailInput.value = data.email;
        if (addressInput) addressInput.value = data.address;
        if (passInput) passInput.value = data.password;
    }
} else {
    if (window.location.href.includes("profile")) {
        window.location.href = "./login.html";
    }
}





// ✅ حفظ بيانات الملف الشخصي
function saveProfile() {
    const nameInput = document.getElementById("userNameInput");
    const emailInput = document.getElementById("userEmailInput");
    const addressInput = document.getElementById("userAddressInput");
    const passInput = document.getElementById("pass");

    const newName = nameInput.value.trim();
    const newEmail = emailInput.value.trim();
    const newAddress = addressInput.value.trim();
    const newPassword = passInput.value;

    if (!newName || !newEmail || !newAddress || !newPassword) return;

    const updatedData = {
        name: newName,
        email: newEmail,
        address: newAddress,
        password: newPassword
    };

    localStorage.setItem(newEmail, JSON.stringify(updatedData));

    if (newEmail !== loggedEmail) {
        localStorage.removeItem(loggedEmail);
        localStorage.setItem("loggedUser", newEmail);
    }

    localStorage.setItem("profileSaved", "true");

    window.location.href = "../index.html"; 
}



window.addEventListener("DOMContentLoaded", function () {
    const msg = document.getElementById("successMsg");

    if (localStorage.getItem("profileSaved") === "true") {
        msg.classList.add("show");

        setTimeout(() => {
            msg.classList.remove("show");
        }, 3000);

        localStorage.removeItem("profileSaved");
    }
});





// ✅ تسجيل الخروج (Logout)
function logout() {
    localStorage.removeItem("loggedUser");
    window.location.href = "./login.html";
}





// ✅ حذف الحساب (Delete Account)
function deleteAccount() {
    const modal = document.getElementById("deleteModal");

    if (modal) {
        modal.style.display = "flex";

        document.getElementById("confirmYes").onclick = function () {
            if (loggedEmail) {
                localStorage.removeItem(loggedEmail);
                localStorage.removeItem("loggedUser");
                window.location.href = "./signup.html";
            }
        };

        document.getElementById("confirmNo").onclick = function () {
            modal.style.display = "none";
        };
    }
}





// ✅ إظهار أو إخفاء كلمة المرور
const toggleSlash = document.getElementById("toggleSlash");
const toggleEye = document.getElementById("toggleEye");
const passwordInput = document.getElementById("pass");

if (toggleEye && toggleSlash && passwordInput) {
    toggleEye.addEventListener("click", () => {
        passwordInput.type = "text";
        toggleEye.classList.remove("show");
        toggleEye.classList.add("hide");
        toggleSlash.classList.remove("hide");
    });

    toggleSlash.addEventListener("click", () => {
        passwordInput.type = "password";
        toggleEye.classList.remove("hide");
        toggleSlash.classList.add("hide");
        toggleEye.classList.add("show");
    });
}
