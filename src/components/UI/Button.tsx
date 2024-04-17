import { ReactNode } from "react"

const Button = ({children}: {children: ReactNode}) => {
    return <button className="btn btn-primary" disabled>{children}</button>
}

export default Button