import style from './Preloader.module.css';

const Preloader = () => {
    return (
        <div className={style.spinner}>
            <div></div><div></div><div></div>
            <div></div><div></div><div></div>
            <div></div><div></div><div></div>
            <div></div><div></div><div></div>
        </div>
    )
}

export default Preloader;