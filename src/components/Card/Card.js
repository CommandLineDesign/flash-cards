import React from "react";

const Card = ({ question, handleAnswer }) => {
  let response = "";

  const handleChange = (event) => {
    console.log(event);
    response = event.target.value;
    console.log(response);
  };

  const submitCard = () => {
    handleAnswer(response);
  };

  return (
    <div>
      {console.log(question)}
      <div>{question}</div>
      <input onChange={handleChange} />
      <div onClick={submitCard}>Submit</div>
    </div>
  );
};

export default Card;
