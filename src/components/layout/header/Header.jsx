import styles from './Header.module.css'
import '../../../styles/variables.css'

import { useNavigate } from 'react-router-dom'

import userIcon from '../../../assets/icons/header-icons/user.svg'
import favoriteIcon from '../../../assets/icons/header-icons/favorite.svg'
import basketIcon from '../../../assets/icons/header-icons/basket.svg'
import globeIcon from '../../../assets/icons/header-icons/globe.svg'

import { Logo } from './Logo.jsx'
import { HeaderNavigation } from './HeaderNavigation.jsx';
import { Search } from './Search.jsx'
import { HeaderActions } from './HeaderActions.jsx'

const Header = () => {
  const links = [
    { text: 'Discover', path: '/' },
    { text: 'Support', path: '/support' },
    { text: 'News', path: '/news' },
  ];

  const actionIcons = [
    { alt: 'user-icon', src: userIcon, to: '/'},
    { alt: 'favorite-icon', src: favoriteIcon, to: '/'},
    { alt: 'basket-icon', src: basketIcon, to: '/'},
    { alt: 'globe-icon', src: globeIcon, to: '/'},
  ];

  const navigate = useNavigate();

  const authClick = () => {
    navigate('/auth');
  }

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logoNavInputWrapper}>
          <Logo />
          <HeaderNavigation links={links}/>
          <Search />
        </div>
        <HeaderActions actionIcons={actionIcons} authClick={authClick}/>
      </div>
    </header>
  );
};

export default Header;