import './Header.css';
import logo from '../../../assets/icons/header-icons/logo.svg';
import searchIcon from '../../../assets/icons/header-icons/search.svg'


const Header = () => {
  const links = [
    { text: "Discover", path: "/" },
    { text: "Support", path: "/support" },
    { text: "News", path: "/news" },
  ];

  return (
    <header className="header-container">

        {/* logo */}
        <div className="header-logo-wrapper">
          <img src={logo} alt="VStore" className="logo-img" />
          <h1 className="logo-text">STORE</h1>
        </div>

        {/* navigation */}
          <nav className="header-navigation">
            <ul>
              {links.map((linkItem, index) => (
                <li key={index}>
                  <a href={linkItem.path}>{linkItem.text}</a>
                </li>
              ))}
            </ul>
          </nav>

          {/* search */}
          <div className='search-wrapper'>
            <img src={searchIcon} alt="" className="input-icon" />
            <input className='custom-input'
                   type='text'
                   placeholder='search store'/>
          </div>
    </header>
  );
};

export default Header;