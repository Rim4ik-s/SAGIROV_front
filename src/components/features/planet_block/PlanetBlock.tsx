import s from "./PlanetBlock.module.css"

export default function PlanetBlock() {
    return (
        <div className={s.container}>
            <div className={s.info_container}>
                <span className={s.text_container}>
                    <span className={s.primary_text}>
                        ПУТЕШЕСТВИЕ
                    </span>
                    <span className={s.secondary_text}>
                        на красную планету
                    </span>
                </span>
                <div className={s.btn_container}>
                    <button className={s.btn}>
                        Начать путешествие
                    </button>
                    <div className={s.line}></div>
                    <img className={s.rocket_img} src={"rocket.png"} />
                </div>
            </div>
            <span className={s.image_container}>
                <img className={s.planet_image} src="red_planet.png" />
            </span>
        </div>
    )
}