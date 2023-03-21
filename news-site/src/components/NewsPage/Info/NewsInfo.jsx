import info from './NewsInfo.module.css';
import moment from 'moment';

const NewsInfo = (props) => {

    return (
        <div className={info.container}>
            <div className={info.url}>Link: <a href={props.url} target="_blank" rel='noreferrer'>{props.url}</a></div>
            <div className={info.time}>Publication date: <span>{moment.unix(props.time).format('DD.MM.YYYY HH:mm')}</span></div>
            <div className={info.by}>Author: <span>{props.by}</span></div>
            <div className={info.descendants}>Number of comments: <span>{props.descendants}</span></div>
        </div>
    )
}

export default NewsInfo;