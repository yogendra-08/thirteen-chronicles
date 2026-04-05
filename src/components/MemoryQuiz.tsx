import { useState } from 'react';
import { Trophy, Brain, CheckCircle, XCircle } from 'lucide-react';

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

const MemoryQuiz: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const questions: Question[] = [
    {
      id: 1,
      question: "Who brought homemade chicken sabji for the group?",
      options: ["Soundarya", "Gaurav", "Teju", "Bhagwati"],
      correctAnswer: 1,
      explanation: "Gaurav brought homemade chicken sabji for everyone, though Bhagwati missed out!"
    },
    {
      id: 2,
      question: "What was the theme of the Encryptia event designs?",
      options: ["Star Wars", "Harry Potter", "Marvel", "Disney"],
      correctAnswer: 1,
      explanation: "The team created designs inspired by Harry Potter theme, called 'Prince Magic Show'"
    },
    {
      id: 3,
      question: "Which event was famous for 'jugaad' snack smuggling?",
      options: ["Avishkar", "Turf Day", "Durandar 2 Movie", "Ganesh Tekdi"],
      correctAnswer: 2,
      explanation: "During Durandar 2 movie outing, the group came up with funny jugaad ideas to sneak snacks!"
    },
    {
      id: 4,
      question: "Who surprised everyone with delicious biryani?",
      options: ["Leena", "Soundarya", "Rupal", "Adhira"],
      correctAnswer: 1,
      explanation: "Soundarya surprised the group with delicious biryani, creating a special food memory"
    },
    {
      id: 5,
      question: "How many members are there in the group family?",
      options: ["12", "13", "14", "15"],
      correctAnswer: 2,
      explanation: "The group has 14 amazing members including Trushna, Yogi, Anuj, Yash, Soundarya, Leena, Parag, Rupal, Gaurav, Teju, Om, Prathmesh, Bhagwati, and Adhira!"
    },
    {
      id: 6,
      question: "What was special about the Turf Day?",
      options: ["Food festival", "Dance competition", "Energy and fun moments", "Study session"],
      correctAnswer: 2,
      explanation: "Turf Day was full of energy, fun, and crazy moments where everyone just lived in the moment"
    },
    {
      id: 7,
      question: "Who is known as 'The Social Butterfly'?",
      options: ["Teju", "Adhira", "Soundarya", "Rupal"],
      correctAnswer: 0,
      explanation: "Teju is 'The Social Butterfly' who brought joy and laughter to every moment"
    },
    {
      id: 8,
      question: "Where did the group visit for peaceful bonding?",
      options: ["Ganesh Tekdi", "Japanese Tekdi", "Hill Station", "Beach"],
      correctAnswer: 1,
      explanation: "Japanese Tekdi visit was peaceful yet full of bonding moments with beautiful views"
    }
  ];

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
    setShowResult(true);
    
    if (answerIndex === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setQuizCompleted(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setQuizCompleted(false);
  };

  if (quizCompleted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-8">
        <div className="max-w-2xl w-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-3xl shadow-2xl p-8 text-center">
          <Trophy className="mx-auto mb-6 text-yellow-500" size={64} fill="currentColor" />
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Quiz Completed!
          </h2>
          <p className="text-2xl mb-6 text-gray-700 dark:text-gray-300">
            Your Score: {score} / {questions.length}
          </p>
          <p className="text-lg mb-8 text-gray-600 dark:text-gray-400">
            {score === questions.length 
              ? "Perfect! You're a true memory keeper! 🎉" 
              : score >= questions.length * 0.7 
              ? "Great job! You know your group well! 🌟" 
              : "Good attempt! Time to revisit those memories! 💫"
            }
          </p>
          <button
            onClick={resetQuiz}
            className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold hover:scale-105 transition-transform duration-300"
          >
            Play Again
          </button>
        </div>
      </div>
    );
  }

  const question = questions[currentQuestion];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-8">
      <div className="max-w-4xl w-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-3xl shadow-2xl p-8">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
              Question {currentQuestion + 1} of {questions.length}
            </span>
            <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
              Score: {score}
            </span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-purple-600 to-pink-600 h-2 rounded-full transition-all duration-500"
              style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Question */}
        <div className="text-center mb-8">
          <Brain className="mx-auto mb-4 text-purple-600" size={48} />
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
            {question.question}
          </h2>
        </div>

        {/* Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => !showResult && handleAnswerSelect(index)}
              disabled={showResult}
              className={`p-4 rounded-xl font-medium transition-all duration-300 ${
                showResult
                  ? index === question.correctAnswer
                    ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 border-2 border-green-500'
                    : selectedAnswer === index
                    ? 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 border-2 border-red-500'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
                  : 'bg-white dark:bg-gray-700 hover:bg-purple-50 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 border-2 border-gray-200 dark:border-gray-600 hover:border-purple-400 dark:hover:border-purple-500'
              }`}
            >
              <div className="flex items-center justify-between">
                <span>{option}</span>
                {showResult && (
                  <span>
                    {index === question.correctAnswer ? (
                      <CheckCircle className="text-green-600" size={20} />
                    ) : selectedAnswer === index ? (
                      <XCircle className="text-red-600" size={20} />
                    ) : null}
                  </span>
                )}
              </div>
            </button>
          ))}
        </div>

        {/* Result Explanation */}
        {showResult && (
          <div className={`p-4 rounded-xl mb-6 ${
            selectedAnswer === question.correctAnswer
              ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200'
              : 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200'
          }`}>
            <p className="font-medium mb-2">
              {selectedAnswer === question.correctAnswer ? "✅ Correct!" : "❌ Not quite right"}
            </p>
            <p>{question.explanation}</p>
          </div>
        )}

        {/* Next Button */}
        {showResult && (
          <button
            onClick={handleNextQuestion}
            className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold hover:scale-105 transition-transform duration-300"
          >
            {currentQuestion < questions.length - 1 ? 'Next Question' : 'See Results'}
          </button>
        )}
      </div>
    </div>
  );
};

export default MemoryQuiz;
