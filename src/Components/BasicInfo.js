import React from 'react'
import styled from 'styled-components'
import profile from '../Images/Head-shot.jpg'
import Button from '@mui/material/Button';

const InfoStyles = styled.div`
    display: flex;
    margin-top: 3rem;
    @media screen and (max-width: 1000px){
        flex-direction: column;
        .img-content{
            margin-bottom: 2rem;
        }
    }   
    .img-content{
        width: 100%;

        img{
            width: 90%;
            object-fit: cover;
        }
    }
    .descrip-content{
        .Button{
            padding-top: 3rem;
            a{
                font-size: 1rem;
            }
        }
    }
    h4{
        font-size: 2.5rem;
        color: var(--font-dark);
    }
    .paragraph{
        padding: 1rem 0;
        color: var(--font-dark);
    }
    .basic-info{
        display: flex;
        .info-title{
            padding-right: .5rem;
            color: var(--font-dark);
            p{
                font-weight: bolder;
            }
        }
    }
    .info-title, .info{
        p{
            padding: .2rem 0;
            color: var(--font-dark);
            @media screen and (max-width: 375px){
            font-size: 7rem
            }
        }
    }
    
`
function BasicInfo() {
    return (
        <InfoStyles>
            <div className='img-content'>
                <img src={profile} alt='at work image' />
            </div>
            <div className='descrip-content'>
                <h4>Some Background...</h4>
                <p className='paragraph'>
                I was born and grew up in a small town in central New Jersey. After I gradated high school in 2009, I attended West Virginia University in Morgantown, WV (Go Mountaineers!). I lived and worked in West Virginia for over eight years, and then moved up to Boston, Massachusetts in the Summer of 2017. I lived there for three years, before packing up my car and moving west in April 2020. I currently live in Portland, Oregon and will reside here until I fulfil my goal of climbing the six giant volcanos in the Pacific Northwest. While living in Portland I took a coding bootcamp through the University of Oregon and I have just started my web developer career.  
                </p>
                <div className='basic-info'>
                    <div className='info-title'>
                        <p>Name</p>
                        <p>Age</p>
                        <p>Location</p>
                        <p>School</p>
                        <p>Current Employment</p>
                        <p>Favorite Activity</p>
                    </div>
                    <div className='info'>
                        <p>:    Ben Tantillo</p>
                        <p>:    31</p>
                        <p>:    Portland, OR</p>
                        <p>:    West Virginia University + University of Oregon</p>
                        <p>:    Retail Supervisor / Web Developer</p>
                        <p>:    Hiking and Mountaineering </p>
                    </div>
                </div>
                <div className='Button'>
                    <Button variant="contained" size="large">
                       <a href='https://docs.google.com/document/d/14Qpc6oa4bbvjMADzu7Tf18SVD-XUd8ZpHl8KO5ZH9JY/edit?usp=sharing' target='_blank' rel='noopener noreferrer'>
                           Click for Full Resume </a>
                    </Button>
                </div>
            </div>
        </InfoStyles>
    )
}
export default BasicInfo
