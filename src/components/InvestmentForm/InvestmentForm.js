import { useState } from "react";
import styles from './InvestmentForm.module.css';

const initialUserInput = {
    'current-savings': 10000,
    'yearly-contribution': 200,
    'expected-return': 7,
    'duration': 10
}


export const InvestmentForm = ({ onCalculate }) => {

    const [ userInput, setUserInput ] = useState(initialUserInput);


    const SubmitHandler = (event) => {
        event.preventDefault();
        onCalculate(userInput);
    }

    const resetForm = (reset) => {
        setUserInput(initialUserInput);
    }

    const inputChangeHandler = (input, value) => {
        setUserInput((prev) => {
            return {
                ...prev,
                [input]: +value
            }
        })
        
    }

    return (
        <form className={styles.form} onSubmit={SubmitHandler}>
            <div className={styles['input-group']}>
                <p>
                    <label htmlFor="current-savings">Current Savings ($)</label>
                    <input onChange={(event) => inputChangeHandler('current-savings', event.target.value)} type="number" id="current-savings" value={userInput['current-savings']}/>
                </p>
                <p>
                    <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
                    <input onChange={(event) => inputChangeHandler('yearly-contribution', event.target.value)} type="number" id="yearly-contribution"  value={userInput['yearly-contribution']}/>
                </p>
            </div>
            <div className={styles['input-group']}>
                <p>
                    <label htmlFor="expected-return">
                        Expected Interest (%, per year)
                    </label>
                    <input onChange={(event) => inputChangeHandler('expected-return', event.target.value)}  type="number" id="expected-return" value={userInput['expected-return']} />
                </p>
                <p>
                    <label htmlFor="duration">Investment Duration (years)</label>
                    <input onChange={(event) => inputChangeHandler('duration', event.target.value)} type="number" id="duration" value={userInput['duration']} />
                </p>
            </div>
            <p className={styles.actions}>
                <button type="reset" className={styles.buttonAlt} onClick={resetForm}>
                    Reset
                </button>
                <button type="submit" className={styles.button}>
                    Calculate
                </button>
            </p>
        </form>
    )
}