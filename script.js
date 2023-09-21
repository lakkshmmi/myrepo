// Questions that will be asked
const Questions = [{
	q: "What is capital of India?",
	a: [{ text: "Gandhinagar", isCorrect: false },
	{ text: "Surat", isCorrect: false },
	{ text: "Delhi", isCorrect: true },
	{ text: "Mumbai", isCorrect: false }
	]

}, 
{
	q: 'What is the largest planet in our solar system?',
	a:[{ text: "Mars", isCorrect: false },
	{ text: "Saturn", isCorrect: false },
	{ text: "Jupiter", isCorrect: true },
	{ text: "Neptune", isCorrect: false }
	]
  },
  {
	q: 'Which country won the FIFA World Cup in 2018?',
	a:[{ text: "Brazil", isCorrect: false },
	{ text: "Germany", isCorrect: false },
	{ text: "France", isCorrect: true },
	{ text: "Argentina", isCorrect: false }
	]
  },
  {
	q: 'What is the tallest mountain in the world?',
	a:[{ text: "Mount Everest", isCorrect: true },
	{ text: "K2", isCorrect: false },
	{ text: "Kanchenjunga", isCorrect: false },
	{ text: "Makalu", isCorrect: false }
	]
  },
  {
	q: 'Which is the largest ocean on Earth?',
	a:[{ text: "Pacific Ocean", isCorrect: true },
	{ text: "Indian Ocean", isCorrect: false },
	{ text: "Atlantic Ocean", isCorrect: false },
	{ text: "Arctic Ocean", isCorrect: false }
	]
  },
  {
	q: 'What is the chemical symbol for gold?',
	a:[{ text: "Au", isCorrect: true },
	{ text: "Ag", isCorrect: false },
	{ text: "Cu", isCorrect: false },
	{ text: "Fe", isCorrect: false }
	]
  },
  {
	q: 'Who painted the Mona Lisa?',
	a:[{ text: "Pablo Picasso", isCorrect: false },
	{ text: "Vincent Van Gogh", isCorrect: false },
	{ text: "Leonardo da Vinci", isCorrect: true },
	{ text: "Michelangelo", isCorrect: false }
	]
  },
  {
	q: 'Which planet is known as the Red Planet?',
	a:[{ text: "Mars", isCorrect: true },
	{ text: "Venus", isCorrect: false },
	{ text: "Mercury", isCorrect: false },
	{ text: "Urenus", isCorrect: false }
	]
  },
  {
	q: 'What is the largest species of shark?',
	a:[{ text: "Great White Shark", isCorrect: false },
	{ text: "Whale Shark", isCorrect: true },
	{ text: "Tiger Shark", isCorrect: false},
	{ text: "Hammerhead Shark", isCorrect: false }
	]
  },
  {
	q: 'Which animal is known as the King of the Jungle?',
	a:[{ text: "Lion", isCorrect: true },
	{ text: "Tiger", isCorrect: false },
	{ text: "Elephant", isCorrect: false },
	{ text: "Giraffe", isCorrect: false }
	]
  },
]

let currQuestion = 0
let score = 0

function loadQues() {
	const question = document.getElementById("ques")
	const opt = document.getElementById("opt")

	question.textContent = Questions[currQuestion].q;
	opt.innerHTML = ""

	for (let i = 0; i < Questions[currQuestion].a.length; i++) {
		const choicesdiv = document.createElement("div");
		const choice = document.createElement("input");
		const choiceLabel = document.createElement("label");

		choice.type = "radio";
		choice.name = "answer";
		choice.value = i;

		choiceLabel.textContent = Questions[currQuestion].a[i].text;

		choicesdiv.appendChild(choice);
		choicesdiv.appendChild(choiceLabel);
		opt.appendChild(choicesdiv);
	}
}

loadQues();

function loadScore() {
	const totalScore = document.getElementById("score")
	totalScore.textContent = `You scored ${score} out of ${Questions.length}`
}


function nextQuestion() {
	if (currQuestion < Questions.length - 1) {
		currQuestion++;
		loadQues();
	} else {
		document.getElementById("opt").remove()
		document.getElementById("ques").remove()
		document.getElementById("btn").remove()
		loadScore();
	}
}

function checkAns() {
	const selectedAns = parseInt(document.querySelector('input[name="answer"]:checked').value);

	if (Questions[currQuestion].a[selectedAns].isCorrect) {
		score++;
		console.log("Correct")
		nextQuestion();
	} else {
		nextQuestion();
	}
}
