let lastWinner = null; // آخر لاعب كسب

// مصفوفة بتمثل الخانات التسعة في اللعبة
let board = ["", "", "", "", "", "", "", "", ""];

// من يبدأ؟ X أول لاعب
let currentPlayer = "X";

// هل اللعبة شغالة؟ (true/false)
let gameActive = false;

// أسماء اللاعبين
let playerNames = { X: "X", O: "O" };

// النقاط لكل لاعب
let scores = { X: 0, O: 0 };

// التركيبات اللي بتحدد الفوز (صفوف - أعمدة - قطر)
const winningCombos = [
  [0,1,2], [3,4,5], [6,7,8],    // الصفوف
  [0,3,6], [1,4,7], [2,5,8],    // الأعمدة
  [0,4,8], [2,4,6]              // الأقطار
];

// الوصول للعناصر من الصفحة (HTML)
const cells = document.querySelectorAll(".cell");           // كل الخلايا
const statusText = document.getElementById("status");       // الرسالة اللي بتظهر فوق
const scoreX = document.getElementById("scoreX");           // نتيجة اللاعب X
const scoreO = document.getElementById("scoreO");           // نتيجة اللاعب O
const nameX = document.getElementById("nameX");             // اسم اللاعب X
const nameO = document.getElementById("nameO");             // اسم اللاعب O

// نضيف حدث لكل خلية (لما تتضغط)
cells.forEach(cell => {
  cell.addEventListener("click", handleClick);
});



function startGame() {
  const inputX = document.getElementById("playerX").value.trim();
  const inputO = document.getElementById("playerO").value.trim();

  if (inputX === "" || inputO === "") {
    alert("من فضلك أدخل اسم كل لاعب أولًا.");
    return; // نخرج من الدالة، مش هيبدأ
  }

  playerNames.X = inputX;
  playerNames.O = inputO;

  nameX.textContent = playerNames.X;
  nameO.textContent = playerNames.O;

  document.getElementById("scoreBoard").style.display = "block";
  document.getElementById("board").style.display = "grid";
  document.getElementById("restartBtn").style.display = "inline-block";

  restartGame(); // يبدأ الجولة
  gameActive = true;
}




function handleClick(e) {
  const index = e.target.dataset.index;

  if (!gameActive || board[index] !== "") return;

  board[index] = currentPlayer;
  e.target.textContent = currentPlayer;

  if (checkWinner()) {
    statusText.textContent = `اللاعب ${playerNames[currentPlayer]} فاز!`;
    scores[currentPlayer]++;
    updateScore();
    lastWinner = currentPlayer; // سجل من كسب
    gameActive = false;
  } else if (board.every(cell => cell !== "")) {
    statusText.textContent = "تعادل!";
    lastWinner = null; // محدش كسب
    gameActive = false;
  } else {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    statusText.textContent = `دور ${playerNames[currentPlayer]}`;
  }
}




// التحقق من إذا كان اللاعب كسب
function checkWinner() {
  return winningCombos.some(combo => {
    return combo.every(index => board[index] === currentPlayer);
  });
}

// نحدث النقاط في واجهة المستخدم
function updateScore() {
  scoreX.textContent = scores.X;
  scoreO.textContent = scores.O;
}




function restartGame() {
  board = ["", "", "", "", "", "", "", "", ""];

  // لو في فائز سابق، يبدأ هو، وإلا X يبدأ
  currentPlayer = lastWinner || "X";
  gameActive = true;
  statusText.textContent = `دور ${playerNames[currentPlayer]}`;

  cells.forEach(cell => cell.textContent = "");
}



