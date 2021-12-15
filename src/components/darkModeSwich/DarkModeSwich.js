import './darkModeSwich.css'

export const DarkModeSwich = ({onChange}) => {

    return (
        <label id='color_mode'>
            <input type="checkbox" onChange={(e) => onChange(e)}/>
            <span>
                <i></i>
            </span>
        </label>
    )
}
