import React from 'react';

import { GenericFunction } from '../types/genericTypes';

export interface IAuthContext {
  user: IUser;
  isLoggedIn: boolean | null;
  sessionLogin: GenericFunction;
  sessionLogout: GenericFunction;
  sessionSignUp: GenericFunction;
}

export interface IUser {
  displayName: string;
  email: string;
}
