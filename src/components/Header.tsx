import { NavLink } from 'react-router-dom';

const Header = () => {

    return <>
        <nav className='menu'>
            <NavLink className={'item-menu'} to="/">Dashboard</NavLink>
            <NavLink className={'item-menu'} to="/register">Registrar</NavLink>
            <NavLink className={'item-menu'} to="/list">Listar clientes</NavLink>
        </nav>
    </>;

};
export default Header;