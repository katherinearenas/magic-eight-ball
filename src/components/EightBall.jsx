import "./EightBall.css"

function EightBall({ answer }) {
  return (
    <div className="container">
    <div className="magic-ball">
      <div className="answer">
        <div className="answer-text">
        {answer ? <p>{answer}</p> : <p>Ask a question!</p>}
        </div>
      </div>
    </div>
    </div>
  );
}

export default EightBall

// // import React from "react";

// // function MagicBall({answer}){
// //     return (
// //     <div className="magic-ball">
// //       <div className="answer">
// //         {answer ? <p>{answer}</p> : <p>Ask a question!</p>}
// //       </div>
// //     </div>
// //     )
// // };
