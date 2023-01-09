import React, { useState } from 'react';
import './quiz.css';

export default function App() {
	const questions = [
		{
			questionText: 'Which is the tallest animal in the world?',
			answerOptions: [
				{ answerText: 'Ant', isCorrect: false },
				{ answerText: 'Cat', isCorrect: false },
				{ answerText: 'Giraffe', isCorrect: true },
				{ answerText: 'Dolphin', isCorrect: false },
			],
		},
		{
			questionText: 'How many legs does an octopus have?',
			answerOptions: [
				{ answerText: '2', isCorrect: false },
				{ answerText: '8', isCorrect: true },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
			],
		},
		{
			questionText: 'Which is the fastest animal?',
			answerOptions: [
				{ answerText: 'Cheetah', isCorrect: true },
				{ answerText: 'Turtle', isCorrect: false },
				{ answerText: 'Fox', isCorrect: false },
				{ answerText: 'Wolf', isCorrect: false },
			],
		},
		{
			questionText: 'Which is the only land animal that cannot jump? ',
			answerOptions: [
				{ answerText: 'Dog', isCorrect: false },
				{ answerText: 'Kangroo', isCorrect: false },
				{ answerText: 'Hen', isCorrect: false },
				{ answerText: 'Elephant', isCorrect: true },
			],
		},
		{
			questionText: 'Which is the largest animal on earth?',
			answerOptions: [
				{ answerText: 'Elephant', isCorrect: false },
				{ answerText: 'Hippopotamus ', isCorrect: false },
				{ answerText: 'Blue Whale', isCorrect: true },
				{ answerText: 'Ostrich', isCorrect: false },
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
		<div className='app' id="#animal-quiz">
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