import AdvantagesBlock from "../../features/advantages_block/AdvantagesBlock"
import PlanetBlock from "../../features/planet_block/PlanetBlock"
import Header from "../../widgets/header/Header"
import s from "./MainPage.module.css"

export default function MainPage() { 
    return (
        <div className={s.main}>
            <Header />
            <div className={s.scroll}>
            <div className={s.container}>
                <PlanetBlock />
                <AdvantagesBlock />
                </div>
            </div>
        </div>
    )
}