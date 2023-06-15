import style from './Header.module.css';

const Header = (props) => {
    return (
        <div className={style.header}>
            <div></div>
            <h2>{props.name}</h2>
            <div><button></button></div>
        </div>
    )
};

export default Header;