import { Injectable } from '@angular/core';
import {LOCAL_STORAGE_USER_NAME} from '../../../Services/constants';
@Injectable()
export class MainService {

  constructor() { }

  setUserName(username: string): void {
   localStorage.setItem(LOCAL_STORAGE_USER_NAME, username);
  }

  isAuthenticated(): boolean {
      const value = localStorage.getItem(LOCAL_STORAGE_USER_NAME);
      if (value === 'admin') {
        return true;
      }
      return false;
    }
  }

