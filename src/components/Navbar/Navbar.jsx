import Logo from '../../assets/logo.svg?react';
import useStyles from "./style";
import User from '../../assets/user.svg?react';

const Navbar = ({account}) => {
    const classes = useStyles();

    return (
       <nav className={classes.navBar}>
            <Logo role="img" className={classes.logo} alt='logo' />
            <div className={classes.userInfo}>
                <User/>
                <p>{account.user}</p>
            </div>
       </nav> 
    )
}

export default Navbar;