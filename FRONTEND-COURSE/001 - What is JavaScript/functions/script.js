// // This is the way that funcions are  made
// function funName() {
//     console.log('Hello There');
// }
// // and the way that funcions are called

// funName();
// throght the funcions we can concatenate informations ex: name and score and and put a value calling the funcions
// ex:passExam('Ann', 75);
function passExam(name, score) {
	const passUni = 71;
	const passColl = 51;

	if (score >= passUni) {
		console.log(name + ' enrolled at the University with ' + score + ' points');
	} else if (score >= passColl) {
		console.log(name + ' enrolled at the College with ' + score + ' points');
	} else {
		console.log(name + ' failed');
	}
}

passExam('Bob', calcScore(45, 32));
passExam('Ann', 75);
passExam('Nick', 45);
function calcScore(quizScore, assayScore) {
    const score = quizScore + assayScore;

    return score;
}