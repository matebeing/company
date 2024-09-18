import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    mainContainer: {
        display: 'grid',
        gridTemplateColumns: '600px 1fr',
        height: '100vh'
    },

    greetingsContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        background: '#01001E'
    },

    greetingsBlock: {
        display: 'flex',
        flexDirection: 'column',
        gap: '26rem',
        maxWidth: '350px'
    },

    loginContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },

    loginBlock: {
        width: '500px'
    },

    loginTextBlock: {
        display: 'flex',
        flexDirection: 'column',
        marginBottom: '4rem'
    },

    loginTextBlockParagraph: {
        fontSize: '0.8em'
    }
})

export default useStyles;