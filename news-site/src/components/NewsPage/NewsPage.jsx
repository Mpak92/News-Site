import styles from './NewsPage.module.css';
import { useDispatch, useSelector } from 'react-redux';
import useFetch from './../customHooks/useFetch';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { setNewsData } from './../../redux/newsPageREducer';
import moment from 'moment';
import NewsComments from './NewsComments';

const NewsPage = () => {
    const news = useSelector(state => state.news);

    const dispatch = useDispatch();

    const { newsId } = useParams();

    let { data, error, loading } = useFetch(`https://hacker-news.firebaseio.com/v0/item/${newsId}.json`);

    useEffect(() => {
        if (data) dispatch(setNewsData(data));
    }, [data])

    if (error) console.log(error);

    const newsComment = news.newsData?.kids?.map((id, index)=> <NewsComments id={id} index={index} key={id} />);

    return (
        <div className={styles.container}>
            <div className={styles.titul}>{news.newsData?.title}</div>
            <div>
                <div>Link: <a href={news.newsData?.url} target="_blank" rel='noreferrer'>{news.newsData?.url}</a></div>
                <div>Publication date: {moment.unix(news.newsData?.time).format('DD.MM.YYYY HH:mm')}</div>
                <div>Author: {news.newsData?.by}</div>
                <div>Number of comments: {news.newsData?.descendants}</div>
            </div>
            <div className={styles.commentContainer}>Comments
                {newsComment}
            </div>
        </div>
    )
}

export default NewsPage;