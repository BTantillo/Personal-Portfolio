import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../Styles/Layout'
import Title from './Title'
import ServiceCard from '../Components/ServiceCard'
import DeveloperBoardIcon from '@mui/icons-material/DeveloperBoard';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import PodcastsIcon from '@mui/icons-material/Podcasts';

const SkillStyles = styled.section`
    .services{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 1.5rem;
        margin-top: 3rem;
        color: var(--font-dark);
        @media screen and (max-width: 1000px){
            flex-direction: column;

    }
        @media screen and (max-width: 950px){
            grid-template-columns: repeat(2, 1fr);
    }
        @media screen and (max-width: 650px){
            grid-template-columns: repeat(1, 1fr);
    }
        svg{
            color: var(--font-dark);
        }
        .first-card{
            button{
                display: none;
            }
        }
        .mid-card{
            button{
                display: none;
            }
        }
        .last-card{
            button{
            }
        }
    }
`
const develop = <DeveloperBoardIcon />
const design = <DesignServicesIcon />
const podcast = <PodcastsIcon />

function Skills() {
    return (
        <InnerLayout>
            <SkillStyles>
                <Title title={'Skills'} />
                <div className='services'>
                    <div className='first-card'>
                    <ServiceCard
                        icon={develop}
                        title={'Full-Stack Development'}
                        paragraph={' Extensive experience in writing HTML5, CSS3, Javascript, JQuery, Bootstrap, Node Js, MySQL, MongoDB, Express, Handelbars.js & ReactJS. '}
                    /> 
                    </div>
                    <div className='mid-card'>
                        <ServiceCard
                            icon={design}
                            title={'Mountaineering'}
                            paragraph={' Ever since I moved out to Oregon I became entranced by the natural beauty. So I took up hiking, and then that lead to mountaineering. I started off small then built my way up and now I am on my way to climbing the six volcanos arounds the PNW '}
                        />
                    </div>
                    <div className='last-card'>
                    <ServiceCard
                        icon={podcast}
                        title={'Consumer Facing Roles'}
                        paragraph={' For the past ten years I have been in customer service in various different parts of the US. From managing a sports bar & nightclub, a large beer hall at a brewery, and a large retail store, I have be effectively communicating in every type of setting I’ve ever been in. Whether in person, or other means, I can always get my point across and know how to ask the right questions to understand the other person’s responses.  '}
                    />
                    </div>
                </div>
            </SkillStyles>
        </InnerLayout>
    )
}

export default Skills
