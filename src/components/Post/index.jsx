import { Link } from "react-router-dom";
import useStyles from "./style";
import { Card, CardContent, CardHeader, Typography } from "@material-ui/core";

const Post = ({title, content, category, thumbnail, publishedAt}) => {

    const classes = useStyles();

    return (
        <Card className={classes.postCard}>
            <CardHeader component='div' subheader={category} className={classes.postThumbnail} style={{backgroundImage: `url(${thumbnail})`}}/>
            <CardContent className={classes.postInfo}>
                <Typography variant="h6" className={classes.postTitle}>{title}</Typography>
                <Typography  className={classes.postData}>{publishedAt}</Typography>
                <Typography  className={classes.postContent}>{content}</Typography>
                <Link className={classes.postRead}>Ver a Postagem</Link>
            </CardContent>
        </Card>
    )
}

export default Post;