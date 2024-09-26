import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
    greetingsContainer: {
        display: 'flex',
        justifyContent: 'center',
        height: '100%',
        color: 'white',
        background: '#01001E',
    },

    greetingsBlock: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100vh'
    },

    greetingsBlockLogo: {
        width: '200px',
        [theme.breakpoints.up('lg')]: {
            marginTop: '5rem',
        },
        [theme.breakpoints.down('md')]: {
            marginTop: '3.5rem'
        },
    },  

    greetingsBlockText: {
        [theme.breakpoints.up('lg')]: {
            display: 'flex',
            marginBottom: '5rem',
            width: '320px'
        },

        [theme.breakpoints.down('md')]: {
            display: 'none'
        },

        flexDirection: 'column',
        gap: '1em'
        
    }
}))

export default useStyles;