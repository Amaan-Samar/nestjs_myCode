import { Injectable } from "@nestjs/common";

// service wriites the functions which will be injected into the controller
@Injectable()
export class AuthService {
  signin() {
    return {msg: 'I have signed in'}
  }
  
  signup() {
    return {msg: 'I have signed up'}
  }
}