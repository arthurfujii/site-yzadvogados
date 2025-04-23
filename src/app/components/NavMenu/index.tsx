import { Menu } from '../Menu';

type NavMenuStatus = {
  active: boolean;
  resetMenu: (event: React.MouseEvent<HTMLAnchorElement>) => void;
};

const NavMenu = ({ active, resetMenu }: NavMenuStatus) => {
  return (
    <nav
      data-active={active}
      className='navMenu z-0 flex items-center justify-center bg-white'
    >
      <Menu onClick={resetMenu} />
    </nav>
  );
};

export default NavMenu;
