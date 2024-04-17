import style from './CardHeader.module.css'
import { BsThreeDotsVertical, BsInfoCircleFill } from "react-icons/bs";

interface ICardHeaderProps {
    subject: string
    topic: string
}
const CardHeader = ({subject, topic}: ICardHeaderProps) => {
    return <header className={style.container}>
        <div className={style.headerLeft}>
            <div className={style.logo}>
                <img className={style.logo_img} src="src/assets/logos/biology-logo.png" alt="" />
            </div>
            <div className={style.content}>
                <h2>{subject}</h2>
                <p>{topic}</p>
            </div>
        </div>
        <div className={style.headerRight}>
            <button>
                <BsInfoCircleFill />
            </button>
            <button>
                <BsThreeDotsVertical />
            </button>
        </div>
    </header>
}

export default CardHeader