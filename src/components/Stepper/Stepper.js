import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import styles from '../../scss/step.module.scss'
import Step from './Step'

const Stepper = ({ steps, currentStep, setActive }) => {
    const defualtStep = 1
    const Element = steps[currentStep].content
    return (
        <Container>
            <Row>
                <Col sm='12' lg='12' md='12'>
                    <div className={`my-5 ${styles.StepperWrapper}`}>
                        <div className={styles.Stepper}>
                            {steps?.map((step, i) => (
                                <>
                                    <Step
                                        onClick={() => {
                                            setActive(i)
                                        }}
                                        key={i}
                                        showLine={i => 0}
                                        isCompleted={currentStep >= i + defualtStep}
                                    />
                                </>

                            ))}
                        </div>
                        <div className={styles.ContentWrapper}>
                            <div className={styles.WelcomeText}>
                                <span>Welcome!</span>
                            </div>
                            <div className={styles.StepperCount}>
                                {"0" + (currentStep + 1)}
                            </div>
                            {<Element />}
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Stepper