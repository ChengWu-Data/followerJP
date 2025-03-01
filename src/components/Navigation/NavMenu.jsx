import { StyledMenuList } from '../../styles/Navigation/NavigationMenu/StyledMenuList';
import { MenuItem } from './MenuItem';
import { useTranslation } from 'react-i18next';
import { useMemo } from 'react';
import { menuVariants } from '../../utils/animations';

const NavMenu = ({ toggle }) => {
  const { t } = useTranslation();
  
  // 过滤掉 Concepts 这一项，并保持其他项不变
  const navSections = useMemo(
    () =>
      t('navigation', { returnObjects: true })
        .filter(section => section.menuTitle !== "Concepts") // ✅ 过滤 Concepts
        .map(section => ({
          id: crypto.randomUUID(),
          sectionHref: section.href,
          sectionTitle: section.menuTitle,
        })),
    [t] 
  );

  return (
    <StyledMenuList variants={menuVariants}>
      {/* 生成导航菜单，已去除 Concepts */}
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
