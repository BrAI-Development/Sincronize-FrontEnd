import React from 'react';
import { Logo } from '../atoms/Logo';

interface AuthLayoutProps {
  children: React.ReactNode;
}

export const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex">
      <div className="flex-1 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 bg-white">
        {children}
      </div>
      <div className="hidden lg:flex lg:flex-1 bg-blue-500 justify-center items-center flex-col">
        <Logo />
        <div className="mt-8 text-center text-white">
          <h2 className="text-3xl font-bold">¡Hola, amigo!</h2>
          <p className="mt-4 max-w-md">
            Ingresa tus datos personales y comienza tu viaje con nosotros
          </p>
        </div>
      </div>
    </div>
  );
}