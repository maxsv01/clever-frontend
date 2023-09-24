/* tslint:disable */
/* eslint-disable */
/**
 * This file was automatically generated by Payload.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

export interface Config {
  collections: {
    users: User;
    lessons: Lesson;
    appUsers: AppUser;
  };
  globals: {};
}
export interface User {
  id: string;
  updatedAt: string;
  createdAt: string;
  email: string;
  resetPasswordToken?: string;
  resetPasswordExpiration?: string;
  salt?: string;
  hash?: string;
  loginAttempts?: number;
  lockUntil?: string;
  password?: string;
}
export interface Lesson {
  id: string;
  lessonName: string;
  slug?: string;
  lessonDescription: string;
  lessonContent: {
    [k: string]: unknown;
  }[];
  tests: {
    question: string;
    answers: {
      answer: string;
      correctAnswer: "correct" | "incorrect";
      id?: string;
    }[];
    id?: string;
  }[];
  lessonPrice: number;
  lessonLevel: number;
  updatedAt: string;
  createdAt: string;
}
export interface AppUser {
  id: string;
  userName: string;
  cleverPoints: number;
  cleverExperience: number;
  level: number;
  updatedAt: string;
  createdAt: string;
}