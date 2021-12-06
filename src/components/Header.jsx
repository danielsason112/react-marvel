import './Header.css';

function Header() {
    return (
        <header className="header">
            <img src="./marvel_logo.svg" className="header-logo" alt="logo" />
            <img src="./search_icon.svg" className="header-search-icon" alt="search icon" />
        </header>
    )
}

export default Header;