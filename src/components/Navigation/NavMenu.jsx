import { StyledMenuList } from '../../styles/Navigation/NavigationMenu/StyledMenuList';
import { MenuItem } from './MenuItem';
import { menuVariants } from '../../utils/animations';

const NavMenu = ({ toggle }) => {
  // Manually define the navigation menu, excluding "Concepts"
  const navSections = [
    { id: crypto.randomUUID(), sectionHref: "#about", sectionTitle: "About" },
    { id: crypto.randomUUID(), sectionHref: "#projects", sectionTitle: "Projects" },
    { id: crypto.randomUUID(), sectionHref: "#contact", sectionTitle: "Contact" }
  ];

  return (
    <StyledMenuList variants={menuVariants}>
      {navSections.map(section => (
        <MenuItem
          key={section.id}
          sectionHref={section.sectionHref}
          sectionTitle={section.sectionTitle}
          toggle={toggle}
        />
      ))}
    </StyledMenuList>
  );
};

export default NavMenu;
