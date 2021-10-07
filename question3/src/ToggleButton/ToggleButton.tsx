import './ToggleButton.css'

const ToggleButton = (props: {
    toggle: () => void;
}):
    React.ReactElement => {
    return (
        <section >
            <label htmlFor="toggle-2" className="toggle-2">
                <input type="checkbox" name="toggle-2" id="toggle-2" className="toggle-2__input" onClick={() => props.toggle()} />
                <span className="toggle-2__button">
                    <img src="https://raw.githubusercontent.com/nueymoo/toggle-switch-css/master/sun.png" alt="sun" className="toggle-2__button--icon" />
                    <img src="https://raw.githubusercontent.com/nueymoo/toggle-switch-css/master/moon.png" alt="moon" className="toggle-2__button--icon" />
                </span>
            </label>
        </section>
    );
}

export default ToggleButton;