import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({

    loginFormBlock: {
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem'
    },

    loginFormBlockName: {
        display: 'flex',
        flexDirection: 'row',
        gap: '1rem'
    },

    loginFormBlockCredentials: {
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem'
    },

    loginFormBlockTerms: {
        display: 'flex',
        alignItems: 'center',
        fontSize: '0.8em'
    }
})

export default useStyles;