// import styles from './NewsInfo.module.css';
import moment from 'moment';

const NewsInfo = (props) => {

    return (
        <div>
            <div>Link: <a href={props.url} target="_blank" rel='noreferrer'>{props.url}</a></div>
            <div>Publication date: {moment.unix(props.time).format('DD.MM.YYYY HH:mm')}</div>
            <div>Author: {props.by}</div>
            <div>Number of comments: {props.descendants}</div>
        </div>
    )
}

export default NewsInfo;