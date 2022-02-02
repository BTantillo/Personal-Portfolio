import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../Styles/Layout'
import Title from './Title'
import ResumeSectionTitle from './ResumeSectionTitle'
import ResumeItem from './ResumeItem'
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';

const ResumeStyles = styled.section`
.resume-section-title{
    padding-bottom: 2.5rem;
}
.margin-title{
    margin-top: 4rem;
}
.resume-content{
    border-left: 2px solid var(--border);
}
`
//creating variables to attribute Material UI icon imports in order to render them in ResumeSectionTitle
const work = <WorkIcon />
const school = <SchoolIcon />
function Resume() {
    return (
        <ResumeStyles>
            <Title title={'Resume'} />
            <InnerLayout>
                <div className='resume-section-title'>
                    <ResumeSectionTitle icon={work} title={'Work Experience'} />
                </div>
                <div className='resume-content'>
                    <ResumeItem
                        year={'FEB 2018 - PRESENT'}
                        title={'Digital Content Manager - Audacy Portland'}
                        subTitle={'University of Oregon - via Trilogy Education Services'}
                        text={' Directed digital content creation for 7 radio stations, working to capture brand image and increase audience engagement each week.'}
                    />
                    <ResumeItem
                        year={'MAY 2015 - PRESENT'}
                        title={'Producer/Host - ESPN Sports Radio 1080 The FAN'}
                        subTitle={'University of Oregon - via Trilogy Education Services'}
                        text={'Host and produce "Sinner and The Saint", a Saturday monring sports radio show that focuses on Pacific NW storylines and fun asides.'}
                    />
                    <div className='margin-bottom'>
                    <ResumeItem
                        year={'JUL 2017 - MAY 2017'}
                        title={'Producer - KPTV FOX 12 Oregon'}
                        subTitle={'University of Oregon - via Trilogy Education Services'}
                        text={'Created televised local news segments in a team focused environment predicated on deadlines and effective communication to relay news.'}
                    />
                    </div>
                </div>

                <div className='resume-section-title margin-title'>
                    <ResumeSectionTitle icon={school} title={'Education'} />
                </div>
                <div className='resume-content'>
                    <ResumeItem
                        year={'2022'}
                        title={'Bootcamp Certificate, University of Oregon'}
                        subTitle={'University of Oregon - via Trilogy Education Services'}
                        text={'A 24-week intensive program focused on gaining technical programming skills in HTML5, CSS3, Javascript, JQuery, Bootstrap, Node Js, MySQL, MongoDB, Express, Handelbars.js & ReactJS'}
                    />
                    <ResumeItem
                        year={'2017'}
                        title={'Bachelor of Multidisciplinary Studies, West Viriginia University'}
                        subTitle={'West Viriginia University'}
                        text={'Four year program emphasizing in being a well rounded individual. Areas of study were Communication Studies, Business Adminstration and Advertising'}
                    />
                    <ResumeItem
                        year={'2009'}
                        title={'High School - Bernardsville High School'}
                        subTitle={'Bernardsville High School'}
                        text={'A small yet mighty school in the middle of New Jersey that helped teach young people how to best navigate the world we live in.'}
                    />
                </div>
            </InnerLayout>
        </ResumeStyles>
    )
}

export default Resume
