
// import Logo  ReactComponent as ... from '../../assets/logo.svg';
import Logo from '../../assets/logo.svg?react';
import useStyles from "./style";

const GreetingsWrapper = () => {

    const classes = useStyles();

    return (
        <section className={classes.greetingsContainer}>
            <div className={classes.greetingsBlock}>
                <div>
                    {/* <img src={Logo} id="logo" /> */}
                    <Logo role="img" className={classes.greetingsBlockLogo} aria-label="Company Logo" alt="Company Logo" />
                </div>
                <div className={classes.greetingsBlockText}>
                    <h1>Seja bem vindo</h1>
                    <p style={{fontWeight: '300'}}>Seja bem vindo ao nosso site, a Company está sempre com você!</p>
                </div>
            </div>
        </section>
    )
}

export default GreetingsWrapper;