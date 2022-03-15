import classes from './Menu.module.css';
import { Link } from 'react-router-dom';


const Menu = (props) => {
    return (
        <div className={classes.Menu}>
            <h1>{props.pageTitle}</h1>
            <hr />
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/notes">Notes</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default Menu;
