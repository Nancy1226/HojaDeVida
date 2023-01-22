import "../../assets/styles/Header.css";
import Avatar from '../../assets/imgs/yo.svg';
import {information} from '../../data/information';

function Header (){

  return (
    <header>
    <div className="principal">{information.name} {information.carrera}</div>
        <div className="modal">
            <img src={Avatar} className="imagen" />
        </div>
    </header>
  );
};

export default Header;
