import React from 'react'
import { useRecoilState } from 'recoil'
import {Box, Tab, Tabs } from 'grommet'
import { Projects, Article, Robot, Domain, Home } from 'grommet-icons'
import { tabSelection as tabSelectionAtom } from '../../../../store'
import ProjectSmall from '../projecttabsmall'
import Updates from '../updates'
import Blogs from '../blogs'
import AboutMe from '../aboutme'

function TabSmall () {
    const [tabSelection, setTabSelection] = useRecoilState(tabSelectionAtom)
    const onActive = (nextIndex) => {
        setTabSelection(nextIndex)
    }

    return (        
        <Box
            background='accent-1'
            fill='horizontal'
            height='large'
        >
            <Box>
                <Tabs activeIndex={tabSelection} onActive={onActive} >
                    <Tab
                        plain='true'
                        
                        title={
                        <RichTaber
                            icon={<Home color='dark-1'/>}
                        />
                    }
                    >
                        Home
                    </Tab>
                    <Tab plain='true' title={
                        <RichTaber
                            icon={<Projects color='dark-1'/>}
                        />
                    }>
                        <ProjectSmall />
                    </Tab>
                    <Tab plain='true' title={
                        <RichTaber
                            icon={<Article color='dark-1' />}
                        />
                    }>
                        <Blogs />
                    </Tab>
                    <Tab plain='true' title={
                        <RichTaber
                            icon={<Robot color='dark-1' />}
                        />
                    }>
                        <AboutMe />
                    </Tab>
                    <Tab plain='true' title={
                        <RichTaber 
                            icon={<Domain color='dark-1'/>}
                        />
                    }>
                        <Updates />
                    </Tab>
                </Tabs>
            </Box>
        </Box>
    )
}

const RichTaber = ({icon}) => (
    <Box
        direction='row' align='center' height='xxsmall' pad='medium'
    >
        {icon}
    </Box>
)

export default TabSmall