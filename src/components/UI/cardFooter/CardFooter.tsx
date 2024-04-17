import Button from '../Button';
import style from './CardFooter.module.css'
import { BsBookmarkStarFill, BsFillHeartFill } from "react-icons/bs";


const CardFooter = () => {
    return <footer className={style.container}>
        <div className={style.footerLeft}>
            <button className={`${style.footerLeftItem}`}>
                <BsFillHeartFill />
                <span>32</span>
            </button>
            <button className={`${style.footerLeftItem} ${style.active}`}>
                <BsBookmarkStarFill />
                <span>14</span>
            </button>
        </div>
        <div className={style.footerRight}>
            <Button>Подробнее</Button>
        </div>
    </footer>
}

export default CardFooter