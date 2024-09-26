import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({

    loginContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        [theme.breakpoints.down('sm')]: {
            margin: '2em',
        },

    },

    loginBlock: {
        width: '500px'
    },

    loginTextBlock: {
        display: 'flex',
        flexDirection: 'column',
        marginBottom: '4rem',
        gap: '0.5rem'
    },

    loginTextBlockParagraph: {
        fontSize: '0.8em'
    },

    registerBlock: {
        alignItems: 'center',
        gap: '1rem',
        flexDirection: 'column'
    },

    registerBlockIcon: {
        width: '3.5rem',
        marginBottom: '1rem'
    }
}))

export default useStyles;