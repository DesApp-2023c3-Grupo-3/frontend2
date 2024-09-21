import { useState, useEffect } from 'react';
import { roleApi } from '../../../services/roles';
import Loader from './Loader';
import { Select, SelectItem } from '@nextui-org/react';

interface RolesProps {
  selectedRole: UserRole;
  onSelectedRoleChange: (newSelectedRole: UserRole) => void;
}

function Sectores({ selectedRole, onSelectedRoleChange }: RolesProps) {
  const [userRoleArray, setUserRoleArray] = useState<UserRole[]>();
  const [loading, setLoading] = useState(false);

  const defaultSelectKeys =
    selectedRole.name !== 'Rol del usuario'
      ? [selectedRole.name]
      : ['Administrador'];

  const updateUserRoleArray = async () => {
    setLoading(true);
    try {
      const updatedRoles: UserRole[] = (await roleApi.getAll()) || [];
      setUserRoleArray(updatedRoles);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    updateUserRoleArray();
  }, []);

  return (
    <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
      {userRoleArray && (
        <Select
          label="Selecciona un rol"
          fullWidth
          radius="full"
          defaultSelectedKeys={defaultSelectKeys}
          errorMessage="Elegí un rol"
        >
          {userRoleArray.map((role) => (
            <SelectItem
              onClick={() => onSelectedRoleChange(role)}
              key={role.name}
            >
              {role.name}
            </SelectItem>
          ))}
        </Select>
      )}
    </div>
  );
}

export default Sectores;
