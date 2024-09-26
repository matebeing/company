import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
    postCard: {
        display: 'flex',
        flexDirection: 'column',
        gap: '1em',
        marginTop: '1rem',
        [theme.breakpoints.up('md')]: {
            maxWidth: '260px',
        },
        
        [theme.breakpoints.down('sm')]: {
            width: '100%',        },
    },

    postThumbnail: {
        // display: 'block !important',
        height: '10em',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: 'black',

        '&&&': {
            display: 'block',

        },

        '& .MuiTypography-colorTextSecondary': {
            color: 'white',
            backgroundColor: '#FFFFFF33',
            borderRadius: '0.5rem',
            width: 'max-content',
            padding:'0.5em 1em',
            backdropFilter: 'blur(10px)'

        }
    },

    postCategory: {
        margin: '1em',
        padding: '0.2em',
        textAlign: 'center',
        backgroundColor: '#FFFFFF33',
        maxWidth: '5em',
        borderRadius: '4px',
        color: 'white'
    },

    postInfo: {
        display: 'flex',
        flexDirection: 'column',
        gap: '1em',
        minHeight: '200px',

        '&&&': {
            padding: 0,
        },
                
        '& .MuiCardContent-root': {
            padding: '0',
        },
        
    },

    postTitle: {
        display: '-webkit-box',
        WebkitBoxOrient: 'vertical',
        WebkitLineClamp: 2, 
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        fontWeight: '400'
    },

    postData: {
        color: '#6C757D'
    },

    postContent: {
        display: '-webkit-box',
        WebkitBoxOrient: 'vertical',
        WebkitLineClamp: 3, 
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        color: '#6C757D'
    },

    postRead: {
        color: 'black',
        borderBottom: 'solid #121416',
        width: 'max-content',
        paddingBottom: '10px'
    }
}))

export default useStyles;