import { useCallback, useState } from "react";
import { selectIsLogged } from "../App/selectors";
import {
  Logo,
  Wrapper,
  Categories,
  Search,
  HeaderRight,
  SearchWrapper,
} from "./styled";
import { useSelector } from "react-redux";

import { Link } from "react-router-dom";
import {
  Bell,
  Box,
  Heart,
  MenuIcon,
  SearchIcon,
  ShoppingBasket,
  User,
} from "lucide-react";
import { ButtonIcon } from "@/components/ButtonWithIcon/ButtonIcon.styled";
import UserDropdownMenu from "./UserDropdownMenu";
import { selectFavorites } from "../Favorites/selectors";

const Header: React.FC = () => {
  const isLogged = useSelector(selectIsLogged);
  const favoritesCount = useSelector(selectFavorites).length;

  const [searchInput, setSearchInput] = useState<string>("");

  const handleSearch = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  }, []);

  return (
    <Wrapper>
      <Link to="/">
        <Logo>WM Marketplace</Logo>
      </Link>
      <Categories>
        <MenuIcon size={24} color="var(--color-neutral-500)" />
        Каталог
      </Categories>
      <SearchWrapper>
        <Search
          value={searchInput}
          onChange={handleSearch}
          placeholder="Поиск по сайту"
        />
        <ButtonIcon $variation="horizontal" $size="medium">
          <SearchIcon size={24} color="var(--color-neutral-500)" />
        </ButtonIcon>
      </SearchWrapper>

      <HeaderRight>
        {isLogged ? (
          <>
            <ButtonIcon $variation="vertical" $size="small">
              <Box size={24} color="var(--color-neutral-500)" />
              Заказы
            </ButtonIcon>

            <Link to="/favorites">
              <ButtonIcon
                $size="small"
                $variation="vertical"
                $notificationCount={favoritesCount}
              >
                <Heart size={24} color="var(--color-neutral-500)" />
                Избранное
              </ButtonIcon>
            </Link>

            <ButtonIcon
              $size="small"
              $variation="vertical"
              $notificationCount={2}
            >
              <Bell size={24} color="var(--color-neutral-500)" />
              Уведомления
            </ButtonIcon>

            <ButtonIcon $size="small" $variation="vertical">
              <ShoppingBasket size={24} color="var(--color-neutral-500)" />
              Корзина
            </ButtonIcon>

            <UserDropdownMenu />
          </>
        ) : (
          <Link to="/login">
            <ButtonIcon $variation="vertical" $size="small">
              <User size={24} color="var(--color-neutral-500)" />
              Войти
            </ButtonIcon>
          </Link>
        )}
      </HeaderRight>
    </Wrapper>
  );
};

export default Header;
