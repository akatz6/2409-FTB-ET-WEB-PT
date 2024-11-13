import React from "react";

export default function Dogs({ dog, size, url }) {
  console.log(dog);
  console.log(size);
  console.log(url);
  return (
    <div>
      <h1>
        Hello my name is {dog.name} and my age is {dog.age}
        <img src={url} alt={dog.name} width={size} />
      </h1>
    </div>
  );
}
