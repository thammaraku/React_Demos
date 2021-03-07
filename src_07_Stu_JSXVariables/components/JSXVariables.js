import React from "react";

const name = "Thammarak";
const bio = {
  hobbies: "soccer",
  height: 6
};

const stripVowels = (name) => {

  const vowels = ["a", "e", "i", "o", "u"]
  let result = "";

  for(let index = 0; index < name.length; index++) {

    if(!vowels.includes(name[index])) {
      result += name[index];
    }
  }
  return result;
}

function JSXVariables() {
  return (
    <div className="main-container">
      <div className="container">
        <div className="jumbotron">
          {/* Hello
          this is multi lines comment by using forward slash star
          There */}
          <h1>Hi! My name is {name}</h1>
          <h2>My name has {name.length} letters</h2>
          <h2>I think React {Math.random() * 10}</h2>
          <h2>I am {bio.height} feet tall and my hobby is {bio.hobbies} </h2>
          <h2>My name without vowels {stripVowels(name)}</h2>

        </div>
      </div>
    </div>
  );
}

export default JSXVariables;
