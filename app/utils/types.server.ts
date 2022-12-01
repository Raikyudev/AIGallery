import internal from "stream";

export type RegisterForm = {
    email : string;
    password : string;
    firstName: string;
    lastName : string;
    phoneNumber: string;
    username: string;
}

export type LoginForm = {
    email: string
    password: string
  }