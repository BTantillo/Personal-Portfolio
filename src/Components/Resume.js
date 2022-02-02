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
                        year={'Nov 2020 - PRESENT'}
                        title={'Supervisor - Danner'}
                        subTitle={'Danner Boots'}
                        text={'Serve ass Floor Manager, managing staff while attending to customers. Check in and put away all stock orders, as well as create POs for future orders.'}
                    />
                    <ResumeItem
                        year={'Sept 2017 - March 2020'}
                        title={'Operations and Beer Hall Manager - Mass Bay Brewing Company'}
                        subTitle={'Harpoon Brewery'}
                        text={'Hire adn train all staff to perform multiple tasks. Supervise over 25 support staff and maintain staffing levels. Determine which new products to offer based on availibility. Maintain all equiptment to make sure everthing is operationg smoothly.'}
                    />
                    <div className='margin-bottom'>
                    <ResumeItem
                        year={'Mar 2016 - Aug 2020'}
                        title={'Co-Founder & Senior Marketer- LocalDawgs'}
                        subTitle={'LocalDawgs'}
                        text={'Research and analyze indusrty trends, competition, and intellectual property. Optimize resources within assigned areas. Assist in development and maintenacne of all digital marketing areas.'}
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
