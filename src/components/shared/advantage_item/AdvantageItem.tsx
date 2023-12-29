import s from "./AdvantageItem.module.css"

export type advantageItemProps = {
    first_text: string,
    main_text: string,
    second_text: string,
    position: 1 | 2 | 3 | 4;
}

function getBgFromPosition(position: 1 | 2 | 3 | 4) {
    switch (position) {
        case 3:
            return { background: "linear-gradient(45deg, rgba(34, 193, 195, 0) 0%, rgba(255, 255, 255, 0.07) 100%)" }
        case 1:
            return { background: "linear-gradient(135deg, rgba(34, 193, 195, 0) 0%, rgba(255, 255, 255, 0.07) 100%)" }
        case 2:
            return { background: "linear-gradient(225deg, rgba(34, 193, 195, 0) 0%, rgba(255, 255, 255, 0.07) 100%)" }
        case 4:
            return { background: "linear-gradient(315deg, rgba(34, 193, 195, 0) 0%, rgba(255, 255, 255, 0.07) 100%)" }
    }
}

export default function AdvantageItem({ props }: { props: advantageItemProps }) {
    
    return (
        <button className={s.btn_container}>
            <div style={getBgFromPosition(props.position)} className={s.container}>
                <span className={s.text}>{ props.first_text}</span>
                <span className={s.main_text + " " + s.text}>{props.main_text}</span>
                <span className={s.text}>{props.second_text}</span>
            </div>
        </button>
    )
}