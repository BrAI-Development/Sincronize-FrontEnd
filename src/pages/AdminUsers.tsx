import { UserAdministrateLayout } from "../components/templates/UserAdministrateLayout";
import { Manager } from "../components/organisms/Manager";

export function AdminUsers() {
    return (
      <UserAdministrateLayout>
        <Manager />
      </UserAdministrateLayout>
    );
  }