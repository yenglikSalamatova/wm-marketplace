import { User } from "lucide-react";
import { ButtonIcon } from "@/components/ButtonWithIcon/ButtonIcon.styled";
import DropdownPanel from "@/components/DropdownPanel/DropdownPanel";
import { Link } from "react-router-dom";

const UserDropdownMenu: React.FC = () => {
  return (
    <DropdownPanel
      toggler={({ onClick }) => (
        <ButtonIcon $size="small" $variation="vertical" onClick={onClick}>
          <User size={24} color="var(--color-neutral-500)" />
          Профиль
        </ButtonIcon>
      )}
      position="right"
    >
      <>
        <Link>Мои заказы</Link>
        <Link>Избранное</Link>
        <Link>Профиль</Link>
        <Link>Выход</Link>
      </>
    </DropdownPanel>
  );
};

export default UserDropdownMenu;
