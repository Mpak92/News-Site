import styles from './NewsPage.module.css';
import { useDispatch, useSelector } from 'react-redux';
import useFetch from './../customHooks/useFetch';
import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { addRootComments, setNewsData } from './../../redux/newsPageReducer';
import moment from 'moment';
import NewsComments from './NewsComments';
import Preloader from '../common/Preloader';
import home from './../../assets/Home.png';

const NewsPage = () => {
    const news = useSelector(state => state.news);

    const dispatch = useDispatch();

    const { newsId } = useParams();

    let { data, error, loading, fetchNow } = useFetch(`https://hacker-news.firebaseio.com/v0/item/${newsId}.json`);

    useEffect(() => {
        if (data) {
            dispatch(setNewsData(data));
            dispatch(addRootComments(data.kids));
        };
    }, [data, dispatch])

    useEffect(() => {
        const refresh = setInterval(() => fetchNow(`https://hacker-news.firebaseio.com/v0/item/${newsId}.json`), 60000);
        return () => {
            clearInterval(refresh);
        }
    }, [])

    if (error) console.log(error);
    if (loading) return <Preloader />;

    const newsCommentsId = news.newsData.kids?.concat();
    const newsComment = newsCommentsId?.sort((a, b) => a - b).map((id) => <NewsComments id={id} key={id} />);

    return (
        <div className={styles.container}>
            <div className={styles.head}>
                <div className={styles.titul}>{news.newsData?.title}</div>
                <div className={styles.buttonToMain}>
                    <div>Back to Main</div>
                    <Link to='/'>
                        <img src={home} alt="BackToMain" />
                    </Link>
                </div>
            </div>
            <div>
                <div>Link: <a href={news.newsData?.url} target="_blank" rel='noreferrer'>{news.newsData?.url}</a></div>
                <div>Publication date: {moment.unix(news.newsData?.time).format('DD.MM.YYYY HH:mm')}</div>
                <div>Author: {news.newsData?.by}</div>
                <div>Number of comments: {news.newsData?.descendants}</div>
            </div>
            <div className={styles.commentContainer}>
                <div className={styles.commentsTitul}>Comments</div>
                <div className={styles.refreshButton} onClick={() => fetchNow(`https://hacker-news.firebaseio.com/v0/item/${newsId}.json`)}>Update comment tree</div>
                <div className={styles.commentBox}>{newsComment}</div>
            </div>
        </div>
    )
}

export default NewsPage;