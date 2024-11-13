import React from "react";

export default function Character({ character }) {
  console.log(character);
  return (
    <div>
      <h2>My name is {character.name}</h2>
      <img src={character.image} alt={character.name} />
    </div>
  );
}
