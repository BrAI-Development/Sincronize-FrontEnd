import { Users, UserCog, ClipboardList } from 'lucide-react';
import { AdminCard } from '../molecules/AdminCard';

export const AdminGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <AdminCard
        icon={Users}
        title="Admin. Usuarios"
        description="Agrega, actualiza o elimina la información básica de los usuarios. Relaciona los roles que van a ejecutar dentro del sistema"
        onClick={() => {/* Handle navigation */}}
      />
      <AdminCard
        icon={UserCog}
        title="Admin. Roles"
        description="Agrega, actualiza o elimina la información básica de los roles. Relaciona los roles según los perfiles del sistema"
        onClick={() => {/* Handle navigation */}}
      />
      <AdminCard
        icon={ClipboardList}
        title="Admin. Perfiles"
        description="Agrega, actualiza o elimina la información básica de los perfiles. Relaciona las tareas según las existentes en el área"
        onClick={() => {/* Handle navigation */}}
      />
    </div>
  );
}