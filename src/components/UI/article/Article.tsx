import { IArticle } from '../../../types'
import style from './Article.module.css'

interface IArticleProps extends IArticle {
}

const Article = ({ title, content }: IArticleProps) => {
    return <>
        <article className={style.article}>
            <h2>{title}</h2>
            <p>{content}</p>
        </article>
    </>
}

export default Article