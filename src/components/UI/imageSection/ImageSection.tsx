import style from './ImageSection.module.css'
import { useContext, useState } from 'react'
import { ImageBase64Context } from './../../../App'

import img1 from '../../../assets/images/biology1.jpeg'



const ImageSection = () => {
    const { imageBase64 } = useContext(ImageBase64Context)
    const [urls, setUrls] = useState([img1, img1])
    if (!imageBase64.length) {
        return <>
            <div className={style.imageSection}>
                {urls.map((url, index) => {
                    return (
                        <div className={style.imageContainer} key={url + index}>
                            <img src={url} alt="card image" />
                        </div>
                    )
                })}
            </div>
            <div className={style.slider}>
                {urls.map((url, index) => {
                    return (
                        <div className={style.sliderItem} key={url + index}></div>
                    )
                })}
            </div>
        </>
    }
    return <>
        <div className={style.imageSection}>
            {imageBase64.map((url, index) => {
                return (
                    <div className={style.imageContainer} key={url + index}>
                        <img src={url} alt="card image" />
                    </div>
                )
            })}
        </div>
        <div className={style.slider}>
            {imageBase64.map((url, index) => {
                return (
                    <div className={style.sliderItem} key={url + index}></div>
                )
            })}
        </div>
    </>
}

export default ImageSection