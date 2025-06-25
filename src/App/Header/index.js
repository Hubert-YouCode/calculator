
import "./style.css"
import Clock from "../../Clock";

const Header = ({ title }) => (
    <header>
        <Clock />
        <h1 className="header">{title}</h1>
    </header>
);



export default Header;