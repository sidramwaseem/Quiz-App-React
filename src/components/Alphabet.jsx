import React, { useState } from 'react';
import './quiz.css';

export default function App() {
	const questions = [
		{
			questionText: 'It is a fruit and it starts with A?',
			answerOptions: [
				{ answerText: 'Banana', isCorrect: false },
				{ answerText: 'Grapes', isCorrect: false },
				{ answerText: 'Apple', isCorrect: true },
				{ answerText: 'Orange', isCorrect: false },
			],
		},
		{
			questionText: 'What comes after K?',
			answerOptions: [
				{ answerText: 'B', isCorrect: false },
				{ answerText: 'L', isCorrect: true },
				{ answerText: 'X', isCorrect: false },
				{ answerText: 'S', isCorrect: false },
			],
		},
		{
			questionText: 'What comes before W?',
			answerOptions: [
				{ answerText: 'V', isCorrect: true },
				{ answerText: 'E', isCorrect: false },
				{ answerText: 'Z', isCorrect: false },
				{ answerText: 'N', isCorrect: false },
			],
		},
		{
			questionText: 'What starts with N and Rythmes with Light?',
			answerOptions: [
				{ answerText: 'Noon', isCorrect: false },
				{ answerText: 'Height', isCorrect: false },
				{ answerText: 'Net', isCorrect: false },
				{ answerText: 'Night', isCorrect: true },
			],
		},
		{
			questionText: 'What is the last letter of the alphabets?',
			answerOptions: [
				{ answerText: 'A', isCorrect: false },
				{ answerText: 'L', isCorrect: false },
				{ answerText: 'Q', isCorrect: false },
				{ answerText: 'Z', isCorrect: true },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}