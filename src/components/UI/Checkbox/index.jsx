import { useState } from "react";
import Icon from "../../Icon";

function Checkbox({ text, checked, setChecked }) {

    const [defaultChecked, setDefaultChecked] = useState(false);

    const checkedValue = setChecked ? checked : defaultChecked

    const setCheckedAction = () => {
        if (setChecked) {
            setChecked(!checkedValue)
        } else {
            setDefaultChecked(!checkedValue)
        }
    }


    return (
        <div className="mailing__items-enter-checkbox">
            <div
                className="mailing__items-enter-checkbox-state"
                onClick={() =>
                    setCheckedAction()
                }>
                {checkedValue && (
                    <Icon
                        id={"checkmark"}
                        width={16}
                        height={16}
                    />
                )}
            </div>
            <p className="mailing__items-enter-checkbox-text">
                {text}
            </p>
        </div>
    );
}

export default Checkbox;