import s from "./Logo.module.css"


export default function Logo() { 
    return (
        <div className={s.container}>
            <img src="spacex.svg" className={s.image} />
        </div>
    )
}