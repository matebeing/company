import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
    main: {
        margin: '0 auto',
        maxWidth: '1200px',

    },

    articleSection: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: '2em',

        [theme.breakpoints.down('sm')]: {
            margin: '2em',
        },
    }
}))

export default useStyles;