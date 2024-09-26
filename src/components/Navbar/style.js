import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
    navBar: {
        background: '#01001E',

        color: 'white',
        padding: '2em',
        
        [theme.breakpoints.up('md')]: {
            display: 'grid',
            justifyItems: 'center',
            alignItems: 'center',
            gridTemplateColumns: '1fr 20px',
            borderRadius: '20px',
            marginTop: '2em',
        },

        [theme.breakpoints.down('sm')]: {
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
        },
    },

    logo: {
        width: '160px'
    },

    userInfo: {
        display: 'flex',
        gap: '0.3em',
        marginRight: '3em'
    }
}))

export default useStyles;