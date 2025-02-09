import React from 'react';
import { UserAdministrateLayout } from '../components/templates/UserAdministrateLayout';
import { Title } from '../components/atoms/Title';
import { AdminGrid } from '../components/organisms/AdminGrid';

export const UserAdministrate: React.FC = () => {
  return (
    <UserAdministrateLayout>
      <Title 
        subtitle="A continuación, selecciona alguna de las siguientes opciones para administrar la información de los usuarios y privilegios"
      >
        Administración de Usuarios y Privilegios
      </Title>
      <AdminGrid />
    </UserAdministrateLayout>
  );
}