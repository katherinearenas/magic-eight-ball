import {useState} from "react";
import Form from "./components/Form";
import EightBall from "./components/EightBall";

const answers = [
  "It is certain.",
  "It is decidedly so.",
  "Without a doubt.",
  "Yes – definitely.",
  "You may rely on it.",
  "As I see it, yes.",
  "Most likely.",
  "Outlook good.",
  "Yes.",
  "Signs point to yes.",
  "Reply hazy, try again.",
  "Ask again later.",
  "Better not tell you now.",
  "Cannot predict now.",
  "Concentrate and ask again.",
  "Don’t count on it.",
  "My reply is no.",
  "My sources say no.",
  "Outlook not so good.",
  "Very doubtful."
];

function App() {
  const [answer, setAnswer] = useState('');
  const [question, setQuestion] = useState('');
  const shake = () => {
    if (question.trim()) {
    const randomIndex = Math.floor(Math.random() * answers.length);
    setAnswer(answers[randomIndex]); 
    } else {
    setAnswer("Please ask a question!");
   }
  };
  const handleInputChange = (e) => {
    setQuestion(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    shake();
  };
  return (
    <div className="App">
      <h1>Magic 8 Ball</h1>
      <Form handleSubmit={handleSubmit} handleInputChange={handleInputChange} question={question}/>
     <EightBall answer={answer}/>
    </div>
  );
}

export default App;