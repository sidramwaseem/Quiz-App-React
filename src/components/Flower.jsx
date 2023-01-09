import React, { useState } from 'react';
import './quiz.css';

export default function App() {
	const questions = [
		{
			questionText: 'What colour are Forget-Me-Nots?',
			answerOptions: [
				{ answerText: 'Purple', isCorrect: false },
				{ answerText: 'Green', isCorrect: false },
				{ answerText: 'Blue', isCorrect: true },
				{ answerText: 'Black', isCorrect: false },
			],
		},
		{
			questionText: 'What are the colourful, outermost parts of a flower called?',
			answerOptions: [
				{ answerText: 'Root', isCorrect: false },
				{ answerText: 'Petals', isCorrect: true },
				{ answerText: 'Leaf', isCorrect: false },
				{ answerText: 'Branch', isCorrect: false },
			],
		},
		{
			questionText: 'Which of the following plants is carnivorous?',
			answerOptions: [
				{ answerText: 'The Pitcher Plant', isCorrect: true },
				{ answerText: 'Snapdragon', isCorrect: false },
				{ answerText: 'Lilly', isCorrect: false },
				{ answerText: 'Sunflower', isCorrect: false },
			],
		},
		{
			questionText: 'What is the profession of someone who arranges and sells flowers?',
			answerOptions: [
				{ answerText: 'Butcher', isCorrect: false },
				{ answerText: 'Teacher', isCorrect: false },
				{ answerText: 'Engineer', isCorrect: false },
				{ answerText: 'Florists', isCorrect: true },
			],
		},
		{
			questionText: 'Bees love flowers. What other minibeasts like flowers?',
			answerOptions: [
				{ answerText: 'Caterpillars', isCorrect: false },
				{ answerText: 'Spiders', isCorrect: false },
				{ answerText: 'Butterflies', isCorrect: true },
				{ answerText: 'Beetles', isCorrect: false },
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
		<div className='app' id="#flower-quiz">
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