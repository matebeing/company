import axios from 'axios';
import Navbar from "../../components/Navbar/Navbar";
import useStyles from "./style";
import { useEffect, useState } from 'react';
import Post from '../../components/Post';
import { useLocation } from 'react-router-dom';

const Home = () => {
    const classes = useStyles();
    const [data, setData] = useState([]);
    const {state} = useLocation();

    useEffect(() => {
        axios.get('https://jsonplaceholder.org/posts')
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);


    return (
        <main className={classes.main}>
            <Navbar account={state.data} />

            <section className={classes.articleSection}>
                {data.map(post => (
                    <Post 
                        thumbnail={post.thumbnail}
                        title={post.title} 
                        content={post.content} 
                        category={post.category}
                        publishedAt={new Date(post.publishedAt.split(" ")[0].split("/")[2], post.publishedAt.split(" ")[0].split("/")[1] - 1, post.publishedAt.split(" ")[0].split("/")[0]).toLocaleString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })} 
                        key={post.id} 
                    />
                ))}
            </section>
        </main>
    );
}

export default Home;
