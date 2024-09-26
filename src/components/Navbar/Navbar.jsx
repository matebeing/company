import Logo from '../../assets/logo.svg';
import useStyles from "./style";
import User from '../../assets/user.svg';

const Navbar = ({account}) => {

    const classes = useStyles();

    return (
       <nav className={classes.navBar}>
            <img className={classes.logo} src={Logo} alt='logo'/>
            <div className={classes.userInfo}>
                <img src={User} alt="user" />
                <p>{account.user}</p>
            </div>
       </nav> 
    )
}

export default Navbar;