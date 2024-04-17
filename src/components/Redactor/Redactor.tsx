import style from './Redactor.module.css'
import CardFooter from '../UI/cardFooter/CardFooter'
import CardHeader from '../UI/cardHeader/CardHeader'
import Editor from '../../Editor/Editor'

import { FaPlus } from "react-icons/fa"
import { useContext, useState } from 'react'
import { ImageBase64Context } from '../../App'

//we obtain cardInfo from backend
const cardInfo = {
    id: '123',
    subject: 'Биология',
    topic: 'Lorem ipsum dolor sit amet consectetur adipisicing elitamet consectetur.',
}


const Redactor = () => {
    const [imageUrl, setImageUrl] = useState('')
    const { setImageBase64 } = useContext(ImageBase64Context)

    const generateBase64 = (url: string) => {
        if (url) {
            fetch(url)
                .then(response => response.blob())
                .then(blob => new Promise((resolve, reject) => {
                    const reader = new FileReader()
                    reader.onloadend = () => resolve(reader.result)
                    reader.onerror = reject
                    reader.readAsDataURL(blob)
                }))
                .then(dataUrl => {
                    if (typeof dataUrl === 'string')
                        setImageBase64(prev => [...prev, dataUrl])
                    setImageUrl('')
                })
        }
    }

    return <>
        <div className={style.container}>
            <CardHeader subject={cardInfo.subject} topic={cardInfo.topic} />
            <section >
                <div className="input-url-container">
                    <input type="text" onChange={e => setImageUrl(e.target.value)} value={imageUrl} className='input-url'placeholder='Ex: https://placehold.co/600x400' />
                    <button onClick={() => generateBase64(imageUrl)} className='upload-btn'>Загрузить<FaPlus /></button>
                </div>
                <Editor />
                <div className={style.btnContainer}>
                    <button className={style.btnSubmit} type='submit'>Сохранить</button>
                </div>
            </section>
            <CardFooter />
        </div>
    </>
}

export default Redactor