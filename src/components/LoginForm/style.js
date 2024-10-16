import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    loginFormBlock: {
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem'
    },

    loginFormBlockForget: {
        textAlign: 'right',
        color: '#312ECB'
    }
})

export default useStyles;