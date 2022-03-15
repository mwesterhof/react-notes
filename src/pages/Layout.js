import classes from './Layout.module.css';

import Menu from '../components/Menu';


const Layout = (props) => {
    return (
        <div className={classes.Layout}>
            <Menu pageTitle={props.pageTitle} />
            {props.children}
        </div>
    );
};

export default Layout;
