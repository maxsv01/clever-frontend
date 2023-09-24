"use client";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import React, { FC, useState } from "react";

interface IFormControlComponent {
  answers: {
    answer: string;
    correctAnswer: "correct" | "incorrect";
    id?: string;
  }[];
}

const FormControlComponent: FC<IFormControlComponent> = ({ answers }) => {
  const [value, setValue] = React.useState("female");
  const [onlyFirst, setOnlyFirst] = useState(true);
  const [isRight, setIsRight] = useState(false);
  const [id, setID] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onlyFirst) {
      console.log("event.target", event.target.id);

      setValue((event.target as HTMLInputElement).value);
      answers.map((i) => {
        if (i.correctAnswer == (event.target as HTMLInputElement).value) {
          setIsRight(true);
        }
      });
    } else {
      setOnlyFirst(false);
    }
  };
  return (
    <FormControl suppressHydrationWarning={true}>
      <FormLabel>Answer</FormLabel>
      <RadioGroup
        name="radio-buttons-group"
        value={value}
        onChange={handleChange}
      >
        {(answers || []).map((k, kIndex) => {
          const { answer, correctAnswer, id } = k;
          return (
            <FormControlLabel
              key={kIndex}
              id={id}
              value={correctAnswer}
              control={<Radio color={isRight ? "success" : "default"} />}
              label={answer}
            />
          );
        })}
      </RadioGroup>
    </FormControl>
  );
};

export default FormControlComponent;
