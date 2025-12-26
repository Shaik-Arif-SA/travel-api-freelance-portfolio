"use client";

import { useState } from "react";
import { CheckCircle, XCircle, Award, RotateCcw } from "lucide-react";

const quizQuestions = [
  {
    question: "What is the most important factor in choosing a career?",
    options: [
      "High salary",
      "Personal interest and passion",
      "Family expectations",
      "Job market trends"
    ],
    correctAnswer: 1,
    explanation: "Personal interest and passion lead to long-term career satisfaction and success."
  },
  {
    question: "Which stream is best suited for students interested in engineering?",
    options: [
      "Commerce",
      "Arts",
      "Science (PCM)",
      "Any stream"
    ],
    correctAnswer: 2,
    explanation: "Science with Physics, Chemistry, and Mathematics is essential for engineering careers."
  },
  {
    question: "What does a psychometric assessment help identify?",
    options: [
      "Academic grades only",
      "Skills, interests, and personality traits",
      "Financial status",
      "Physical abilities"
    ],
    correctAnswer: 1,
    explanation: "Psychometric assessments comprehensively evaluate your skills, interests, aptitudes, and personality."
  },
  {
    question: "When should students start career counselling?",
    options: [
      "After graduation",
      "In Grade 9-10",
      "After 12th",
      "Never needed"
    ],
    correctAnswer: 1,
    explanation: "Starting career counselling in Grade 9-10 helps make informed decisions about stream selection."
  },
  {
    question: "What is the benefit of one-on-one career counselling?",
    options: [
      "Generic advice",
      "Personalized guidance tailored to individual needs",
      "Only exam preparation",
      "Job placement guarantee"
    ],
    correctAnswer: 1,
    explanation: "One-on-one counselling provides personalized guidance based on your unique profile and goals."
  }
];

export function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(Array(quizQuestions.length).fill(null));

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = answerIndex;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (selectedAnswer === quizQuestions[currentQuestion].correctAnswer) {
      if (answers[currentQuestion] !== quizQuestions[currentQuestion].correctAnswer) {
        setScore(score + 1);
      }
    }

    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(answers[currentQuestion + 1]);
    } else {
      calculateFinalScore();
      setShowResult(true);
    }
  };

  const calculateFinalScore = () => {
    let finalScore = 0;
    answers.forEach((answer, index) => {
      if (answer === quizQuestions[index].correctAnswer) {
        finalScore++;
      }
    });
    setScore(finalScore);
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setAnswers(Array(quizQuestions.length).fill(null));
  };

  const getScoreMessage = () => {
    const percentage = (score / quizQuestions.length) * 100;
    if (percentage >= 80) return "Excellent! You have great career awareness!";
    if (percentage >= 60) return "Good job! You're on the right track.";
    if (percentage >= 40) return "Not bad! Consider learning more about career planning.";
    return "We recommend booking a career counselling session with us!";
  };

  if (showResult) {
    return (
      <section className="py-16 md:py-20 bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 text-center">
              <div className="mb-8">
                <Award className="w-24 h-24 text-blue-600 mx-auto mb-4" />
                <h2 className="text-4xl font-bold mb-4">Quiz Complete!</h2>
                <div className="text-6xl font-bold text-blue-600 mb-4">
                  {score}/{quizQuestions.length}
                </div>
                <p className="text-xl text-gray-600 mb-2">
                  You scored {Math.round((score / quizQuestions.length) * 100)}%
                </p>
                <p className="text-lg text-gray-700 font-semibold">
                  {getScoreMessage()}
                </p>
              </div>

              <div className="space-y-4 mb-8">
                {quizQuestions.map((q, index) => (
                  <div key={index} className="text-left bg-gray-50 p-4 rounded-xl">
                    <div className="flex items-start gap-3">
                      {answers[index] === q.correctAnswer ? (
                        <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                      ) : (
                        <XCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                      )}
                      <div>
                        <p className="font-semibold mb-1">{q.question}</p>
                        <p className="text-sm text-gray-600">
                          Your answer: {q.options[answers[index] ?? 0]}
                        </p>
                        {answers[index] !== q.correctAnswer && (
                          <p className="text-sm text-green-600 mt-1">
                            Correct: {q.options[q.correctAnswer]}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 justify-center">
                <button
                  onClick={handleRestart}
                  className="bg-gradient-to-r from-blue-600 to-secondary text-white px-8 py-3 rounded-xl hover:opacity-90 transition-opacity shadow-lg flex items-center gap-2"
                >
                  <RotateCcw className="w-5 h-5" />
                  Retake Quiz
                </button>
                <button
                  onClick={() => {
                    const event = new CustomEvent('openContactModal');
                    window.dispatchEvent(event);
                  }}
                  className="bg-gradient-to-r from-accent to-green-600 text-white px-8 py-3 rounded-xl hover:opacity-90 transition-opacity shadow-lg"
                >
                  Book Free Career Counselling
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Career Awareness Quiz</h2>
            <p className="text-gray-600">
              Test your knowledge about career planning and find out if you need guidance!
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex justify-between text-sm text-gray-600 mb-2">
                <span>Question {currentQuestion + 1} of {quizQuestions.length}</span>
                <span>{Math.round(((currentQuestion + 1) / quizQuestions.length) * 100)}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div 
                  className="bg-gradient-to-r from-blue-600 to-red-600 h-3 rounded-full transition-all duration-300"
                  style={{ width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%` }}
                ></div>
              </div>
            </div>

            {/* Question */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">
                {quizQuestions[currentQuestion].question}
              </h3>

              <div className="space-y-3">
                {quizQuestions[currentQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswerSelect(index)}
                    className={`w-full text-left p-4 rounded-xl border-2 transition-all ${
                      selectedAnswer === index
                        ? 'border-blue-600 bg-blue-600 shadow-md'
                        : 'border-gray-200 hover:border-blue-600 hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                        selectedAnswer === index
                          ? 'border-blue-600 bg-blue-600'
                          : 'border-gray-300'
                      }`}>
                        {selectedAnswer === index && (
                          <div className="w-3 h-3 bg-white rounded-full"></div>
                        )}
                      </div>
                      <span className="font-medium">{option}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center">
              <button
                onClick={() => {
                  if (currentQuestion > 0) {
                    setCurrentQuestion(currentQuestion - 1);
                    setSelectedAnswer(answers[currentQuestion - 1]);
                  }
                }}
                disabled={currentQuestion === 0}
                className="px-6 py-3 rounded-xl border-2 border-gray-300 hover:border-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Previous
              </button>

              <button
                onClick={handleNext}
                disabled={selectedAnswer === null}
                className="bg-gradient-to-r from-[#2563eb] to-[#dc2626] text-white px-8 py-3 rounded-xl hover:opacity-90 transition-opacity shadow-lg disabled:opacity-100 disabled:cursor-not-allowed"
              >
                {currentQuestion === quizQuestions.length - 1 ? 'See Results' : 'Next Question'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
