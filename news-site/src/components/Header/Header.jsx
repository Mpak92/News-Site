import head from './Header.module.css';
import home from '../../assets/Home.png';
import { Link } from 'react-router-dom';

const Header = () => {

    return (<>
        <div className={head.titul}><p>Latest News</p></div>
        {/* <div className={head.buttonToMain}>
            <div>Back to Main</div>
            <Link to='/'>
                <img src={home} alt="BackToMain" />
            </Link>
        </div> */}
    </>)
}

export default Header;