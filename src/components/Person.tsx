import { useState } from "react";

export interface PersonDetails {
  name: string;
  email: string;
  age: number;
  isMarried: boolean;
  friends: PersonDetails[];
  country: Country;
}

export enum Country {
  Brazil = "Brazil",
  India = "India",
  Canada = "Canada"
}

export const Person = (props: PersonDetails) => {
  const [name, setName] = useState <string> (props.name);

  const addNumber = (num1: number, num2: number): string => {
    return ("The sum of " + num1 + " and " + num2 + " is " + (num1 + num2) + ".");
  }

  return (
    <>
      <h1>{props.name}</h1>
      <h2>{props.email}</h2>
      <h2>{props.age}</h2>
      <h2>{props.isMarried ? "Married" : "Single"}</h2>
      <h2>{props.country}</h2>
      <div>
        {props.friends.map((friend: PersonDetails, key: number)=>{
          return (
            <p key={key}>{friend.name}</p>
          )
        })}
      </div>
      <p>{addNumber(55,40)}</p>
    </>
  )
}

// interface PersonDetails {
//   name: string,
//   email: string,
//   age: number,
//   isMarried: boolean,
//   friends: string[]
// }