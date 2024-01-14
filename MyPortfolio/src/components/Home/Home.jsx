import React, { useState, useEffect } from 'react'
import { motion } from "framer-motion"
import { useAccordionButton } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Home.css'
import { useAnimation } from 'framer-motion';
function Home() {

    // const myName = "Hello! This is Muhammad Abubakar".split(" ");
    const myName = ["M", "u", "h", "a", "m", "m", "a", "d", " ", "A", "b", "u", "b", "a", "k", "a", "r",]
    const [isDisplayName, setIsDisplayName] = useState(false)
    const [isNameDisplayed, setIsNameDisplayed] = useState(false)
    useEffect(() => {
        if (isDisplayName) {
            setTimeout(() => {
                setIsNameDisplayed(true)
            }, 1000)
        }
    }, [isDisplayName])

    return (
        <>
            <motion.div

                animate={{ x: 100 }}
                transition={{ duration: 0.7 }}
                onAnimationComplete={() => setIsDisplayName(true)}
            >
                {/* <Card style={{ width: '18rem' }}> */}
                <Card className='card'>
                    <Card.Body>

                        {
                            isDisplayName && (

                                <div className='my-name' style={{ display: isDisplayName }}>

                                    {myName.map((el, i) => {
                                        return (
                                            <motion.span
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{
                                                    duration: 0.15,
                                                    delay: i / 20

                                                }}
                                                onAnimationComplete={() => { console.log("azann"); }}

                                                key={i}
                                            >
                                                {el}{""}
                                            </motion.span>
                                        )
                                    })}



                                </div>
                            )
                        }
                        {
                            isNameDisplayed && (
                                <motion.div

                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{
                                        ease: "easeIn",
                                        duration: 0.5,
                                    }}

                                >

                                    <div className='my-intro'>
                                        A passionate and dedicated software developer with a keen interest in crafting innovative solutions. With a strong foundation in computer science and a love for problem-solving, I embark on every coding journey with enthusiasm and precision. I thrive in the dynamic world of software development, where my skills extend across a range of technologies and frameworks. Whether it's designing efficient algorithms, building scalable applications, or diving into the intricacies of code optimization, I enjoy the challenge of turning ideas into robust and elegant software solutions.
                                    </div>

                                </motion.div>
                            )
                        }

                    </Card.Body>
                </Card>
            </motion.div>


        </>
    )
}

export default Home