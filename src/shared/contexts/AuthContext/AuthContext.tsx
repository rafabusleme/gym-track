import React, { createContext, useContext, useState } from 'react';

import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

import { HOME_ROUTE, LOGIN_ROUTE } from '../../constants/routes';
import { IAuthContext, IUser } from '../../interfaces/authContext';

interface AuthContextProviderProps {
  children: React.ReactNode;
}

const contextDefaultValues = {
  isLoggedIn: null,
  user: {
    displayName: '',
    email: '',
  },
  sessionLogin: async () => {
    return;
  },
  sessionLogout: async () => {
    return;
  },
  sessionSignUp: async () => {
    return;
  },
};

const AuthContext = createContext<IAuthContext>(contextDefaultValues);

const AuthContextProvider: React.FC<AuthContextProviderProps> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(contextDefaultValues.isLoggedIn);
  const [user, setUser] = useState<IUser>(contextDefaultValues.user);

  const navigate = useNavigate();

  const sessionLogin = async (email: string, password: string) => {
    try {
      const auth = getAuth();
      const { user } = await signInWithEmailAndPassword(auth, email, password);

      setUser({
        email: user.email || '',
        displayName: user.displayName || '',
      });
      setIsLoggedIn(true);

      navigate(HOME_ROUTE);
    } catch (error: unknown) {
      alert(error);
    }
  };

  const sessionLogout = async () => {
    try {
      const auth = getAuth();
      await signOut(auth);

      setUser(contextDefaultValues.user);
      setIsLoggedIn(false);

      navigate(LOGIN_ROUTE);
    } catch (error: unknown) {
      alert(error);
    }
  };

  const sessionSignUp = async (email: string, password: string) => {
    try {
      const auth = getAuth();
      const { user } = await createUserWithEmailAndPassword(auth, email, password);
      setUser({
        email: user.email || '',
        displayName: user.displayName || '',
      });
      setIsLoggedIn(true);

      navigate(HOME_ROUTE);
    } catch (error: unknown) {
      alert(error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoggedIn,
        sessionLogin,
        sessionLogout,
        sessionSignUp,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
export default AuthContextProvider;
