import { useState } from 'react';
import styles from './radioButton.module.scss'

function RadioButtonsForm(props) {
    const { radioList } = props
    const [checkedIndex, setCheckedIndex] = useState(0)


    const onChange = (index) => {
        setCheckedIndex(index)
    }
    return (
        <form className={styles.form} >

            {
                radioList.map((name, index) => {
                    return (
                        <p key={name}>
                            <input onChange={() => { onChange(index) }} className={styles.radio} type="radio" id={`radio${index}`} name="radio-group" checked={index === checkedIndex ? true : false} />
                            <label htmlFor={`radio${index}`}>{name}</label>
                        </p>
                    )
                })
            }
        </form>
    );
}

export default RadioButtonsForm;