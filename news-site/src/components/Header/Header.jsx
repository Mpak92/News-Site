import head from './Header.module.css';
import home from '../../assets/Home.png';
import { Link, Outlet, useHref } from 'react-router-dom';

const Header = () => {

    const href = useHref();

    return (<>
        <div className={head.titul}><p>Latest News</p>
           {href !== '/' && <div className={head.buttonToMain} data-testid='link-box'>
                <div>Back to Main</div>
                <Link to='/'>
                    <img src={home} alt="BackToMain" />
                </Link>
            </div>} 
        </div>
        <Outlet />
    </>)
}

export default Header;