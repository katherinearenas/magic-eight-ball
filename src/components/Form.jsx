import React, { useState } from "react";

// function getAnswer(props){
//     const [answer, setAnswer] = useState("");

//     const answers = [
//         "It is certain.",
//         "It is decidedly so.",
//         "Without a doubt.",
//         "Yes, definitely.",
//         "You may rely on it.",
//         "As I see it, yes.",
//         "Most likely.",
//         "Outlook good.",
//         "Yes.",
//         "Signs point to yes.",
//         "Reply hazy, try again.",
//         "Ask again later.",
//         "Better not tell you now.",
//         "Cannot predict now.",
//         "Concentrate and ask again.",
//         "Don’t count on it.",
//         "My reply is no.",
//         "My sources say no.",
//         "Outlook not so good.",
//         "Very doubtful."
//     ];
// const getRandomAnswer = () => {
//     const randomIndex = Math.floor(Math.random() * answers.length);
//     setAnswer(answers[randomIndex]);
// }

// };


function QuestionForm({getRandomAnswer}){
    const [question, setQuestion] = useState("");
    // const handleInputChange = (e) => {
    // //     // Getting the value and name of the input which triggered the change
    //     const { target } = e;
    //     const inputType = target.name;
    //     const inputValue = target.value;
    //     console.log(inputType, inputValue);
    //     return console.log(target) 
    //   };

    

        const handleFormSubmit = (e) => {
            // Preventing the default behavior of the form submit (which is to refresh the page)
            e.preventDefault()};
            if (question.trim()){
              getRandomAnswer();
              setQuestion("");
            }
          
    
  
return(
<div className="container text-center">
      <h1>Ask your question.</h1>
      <p>For best results ask a yes or no question.</p>
      <form className="form" onSubmit={handleFormSubmit}>
        <input
          value={question}
          name="question"
          onChange={(e) => setQuestion(e.target.value)}
          type="text"
          placeholder="Will I have a good weekend?"
        />
        <button type="submit">
          Submit
        </button>
      </form>
      {/* {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )} */}
    </div>
  );
}

// );}

export default QuestionForm;