import { createContext, useState } from 'react'
import './App.css'
import Demo from './components/Demo/Demo'
import Redactor from './components/Redactor/Redactor'

interface IHtmlString {
  htmlString: string
  setHtmlString: React.Dispatch<React.SetStateAction<string>>

}
interface IImageBase64 {
  imageBase64: string[]
  setImageBase64: React.Dispatch<React.SetStateAction<string[]>>
}

export const HtmlStringContext = createContext<IHtmlString>({
  htmlString: '',
  setHtmlString: () => {},
})

export const ImageBase64Context = createContext<IImageBase64>({
  imageBase64: [],
  setImageBase64: () => {},
})

function App() {
  const [htmlString, setHtmlString] = useState('')
  const [imageBase64, setImageBase64] = useState<string[]>([])
  const htmlStringValue = { htmlString, setHtmlString }
  const imageBase64value = { imageBase64, setImageBase64 }

  return (
    <HtmlStringContext.Provider value={htmlStringValue} >
    <ImageBase64Context.Provider value={imageBase64value} >
      <div className="container">
        <div className="container-half redactor">
          <h3 className='container-half__title'>Redactor</h3>
          <Redactor />
        </div>
        <div className="container-half demo">
          <h3 className='container-half__title'>Demo</h3>
          <Demo />
        </div>

      </div>
      </ImageBase64Context.Provider >

    </HtmlStringContext.Provider>
  )
}

export default App
