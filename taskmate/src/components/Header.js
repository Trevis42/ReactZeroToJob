// import Logo from '../assets/logo-color.svg';
import Logo from '../assets/cat_1280.jpg';
import './Header.css';

export const Header = () => {
  return (
    <header>
      <img
        src={Logo}
        alt=""
      />
      <a href="/">Home</a>
    </header>
  );
};