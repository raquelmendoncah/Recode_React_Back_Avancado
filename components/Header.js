import headerStyles from '../styles/Header.module.css';

const Header = () => {
  return (
    <div>
      <h1 className={headerStyles.title}>
        <span>Raquel</span>Mendonça
      </h1>
      <p className={headerStyles.description}>
        Uma desenvolvedora apaixonada por fotografia
      </p>
    </div>
  );
};

export default Header;
