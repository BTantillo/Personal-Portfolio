import React from 'react'
import styled from 'styled-components'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedinIcon from '@material-ui/icons/LinkedIn'
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';

const pageTransitions = {
    initial: { opacity: 0, x: 100, y: "-50%" },
    animate: { opacity: 1, x: "-50%", y: "-50%" },
    exit: { opacity: 0, x: -100, y: "-50%" }
}

//styles variable from styled-components dependency applied to HomePage component
const HomeStyles = styled.header`
    width: 100%;
    height: 100vh;
    position: relative;

//targeting intro portion of page with text and icons
    .intro{
        position: absolute;
        width: 80%;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        font-size: 1rem;
        @media screen and (max-width: 600px){
            h1{
                font-size: 2.8rem;
            }
            span{
                font-size: 2.8rem;
            }
        }
        
        h1{
            padding-bottom: 2rem;
            color: var(--font-dark);
        } 
        p{
            color: var(--font-dark);
        }
        .icon-list{
            display: flex;
            justify-content: center;
            padding-top: 2rem;
            .icon{
                cursor: pointer;
                padding: 0 1rem 0 1rem; 
                color: var(--font-dark);
                align-items: center;
                display: flex;
                justify-content: center;
                transition: all .5s ease-in-out;
                &:hover{
                    color: var(--border)
                }
            }
        }
    }
`
function HomePage() {
    return (

        <HomeStyles>
            <motion.div
                exit="exit"
                animate="animate"
                initial="initial"
                variants={pageTransitions}
                transition={{ duration: 0.8 }}
                className='intro'>
                <div className='intro'>
                    <h1>Hello! I'm Ben <span>Welcome to My World</span></h1>
                    <p>
                    For as long as I can remember I have always had a sense of adventure. From the hills of New Jersey, to the mountains of West Virginia, along the shores of the Boston Harbor, and now in the Pacific Northwest in Oregon. My life has been full of adventures and I cannot wait to see where my next adventure takes me! 
                    </p>
                    <div className='icon-list'>
                        <a href='https://www.linkedin.com/in/benedict-tantillo-275a9a143/' className='icon' target="_blank" >
                            <LinkedinIcon style={{ fontSize: 40 }} />
                        </a>
                        <a href='https://github.com/BTantillo' className='icon' target="_blank">
                            <GitHubIcon style={{ fontSize: 40 }} />
                        </a>
                       
                    </div>
                </div>
            </motion.div>
        </HomeStyles>

    )
}

export default HomePage

