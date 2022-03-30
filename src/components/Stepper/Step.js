import React from 'react'
import styles from '../../scss/step.module.scss'

const Step = ({
    isCompleted,
    showLine,
    onClick,
    color
}) => {
    return (
        <div onClick={onClick} className={styles.Step}>
            {showLine && (
                <div
                    className={`${styles.StepLineThrough}`}
                    style={{ backgroundColor: isCompleted ? color || '#6078EA' : '' }}
                ></div>
            )}


        </div>
    )
}

export default Step