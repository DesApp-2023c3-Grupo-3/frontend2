import { useState, useEffect } from 'react';
import { roleApi } from '../../../services/roles';
import { Select, SelectItem } from '@nextui-org/react';

interface RolesProps {
  selectedRole: UserRole;
  onSelectedRoleChange: (newSelectedRole: UserRole) => void;
  hasError?: boolean;
}

function Sectores({
  selectedRole,
  onSelectedRoleChange,
  hasError,
}: RolesProps) {
  const [userRoleArray, setUserRoleArray] = useState<UserRole[]>();
  const [loading, setLoading] = useState(false);

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

  const onChangeRole = (role: string) => {
    const roleFinded = userRoleArray?.find(
      (roleArray) => roleArray.name === role,
    );
    if (roleFinded) {
      onSelectedRoleChange(roleFinded);
    } else {
      onSelectedRoleChange({
        id: -1,
        name: 'Rol del usuario',
      });
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
          defaultSelectedKeys={[selectedRole.name]}
          errorMessage="Elegí un rol"
          isInvalid={hasError}
          onChange={(e) => onChangeRole(e.target.value)}
          classNames={{
            popoverContent: 'dark:text-white ',
            errorMessage: 'dark:text-red-300',
          }}
        >
          {userRoleArray.map((role) => (
            <SelectItem key={role.name}>{role.name}</SelectItem>
          ))}
        </Select>
      )}
    </div>
  );
}

export default Sectores;
