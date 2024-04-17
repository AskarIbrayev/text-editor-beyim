import style from './Demo.module.css'
import CardFooter from '../UI/cardFooter/CardFooter'
import CardHeader from '../UI/cardHeader/CardHeader'
import ImageSection from '../UI/imageSection/ImageSection'
import { useContext } from 'react'
import { HtmlStringContext } from '../../App'
import parse from 'html-react-parser';


const Demo = () => {
    const { htmlString } = useContext(HtmlStringContext)
    return <>
        <div className={style.container}>
            <CardHeader subject='Биология' topic='Lorem ipsum dolor sit amet consectetur adipisicing elit.'/>
            <section>
                <ImageSection />
                <article>
                    {parse(htmlString)}
                </article>
            </section>
            <CardFooter />
        </div>
    </>
}

export default Demo