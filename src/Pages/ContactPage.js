import React from 'react';
import styled from 'styled-components'
import { MainLayout, InnerLayout } from '../Styles/Layout'
import Title from '../Components/Title';
import ContactForm from '../Components/ContactForm'
import ContactCard from '../Components/ContactCards'
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import EmailIcon from '@mui/icons-material/Email';
import PushPinIcon from '@mui/icons-material/PushPin';
import ComputerIcon from '@mui/icons-material/Computer';
import { motion } from 'framer-motion';

const ContactStyles = styled.section`
    .contact-section{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-column-gap: 2rem;
        position: absolute;
        left: auto;
        @media screen and (max-width: 980px){
        grid-template-columns: repeat(1, 1fr);
        }   
        .contact-cards{
            display: flex;
            justify-content: space-between;
            flex-direction: column;
            @media screen and (max-width: 500px){
            width: 90%;
            } 
        }
        .material-contact-form{
            margin-bottom: 2rem;
            @media screen and (max-width: 500px){
            width: 90%;
            }  
        }
    }
`

//creating variables to attribute Material UI icon imports in order to render them in ContactPage.js
const phone = <PhoneIphoneIcon />
const email = <EmailIcon />
const location = <PushPinIcon />
const computer = <ComputerIcon/>

function Contact() {
    return (
        <MainLayout>
            <motion.div initial="hidden" animate="visible" variants={{
                hidden: {
                    scale: .8,
                    opacity: 0
                },
                visible: {
                    scale: 1,
                    opacity: 1,
                    transition: {
                        delay: .2
                    }
                },
            }}>
                <Title title={'Contact'} />
                <ContactStyles>
                    <InnerLayout className={'contact-section'}>
                        <div className='material-contact-form'>
                            <ContactForm />
                        </div>
                        <div className='contact-cards'>
                            <ContactCard title={'Phone'} icon={phone} contact1={'C: 908-268-8346'} contact2={' '} />
                            <ContactCard title={'Email'} icon={email} contact1={'P: BenTantillo@gmail.com'} contact2={' '} />
                            <ContactCard title={'LinkedIn'} icon={computer} contact1={'https://www.linkedin.com/in/benedicttantillo/'} contact2={''} />
                            <ContactCard title={'Address'} icon={location} contact1={'PNW'} contact2={'Portland, OR '} />
                        </div>
                    </InnerLayout>
                </ContactStyles>
            </motion.div>
        </MainLayout>
    )
}

export default Contact
