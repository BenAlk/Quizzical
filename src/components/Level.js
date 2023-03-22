import { React } from "react"

export default function Level (props) {

    const {level, selected, difficultySelect } = props

    const classes = `level-button glow-effect ${selected ? 'chosen' : ''}` 

    return (
        <div className={classes} onClick={difficultySelect}>
            {level}
            <svg className="glow-container" >
                <rect pathLength="100" rx="16px" strokeLinecap="round" className="glow-blur"></rect>
                <rect pathLength="100" rx="16px" strokeLinecap="round" className="glow-line"></rect>
            </svg>
        </div>
    )
}