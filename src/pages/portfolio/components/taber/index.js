import { useState } from 'react'
import { Box, Tab, Tabs, Text } from 'grommet'
import { Projects, Article, Robot, Domain } from 'grommet-icons'
import ProjectList from '../projectlist'
import BlogList from '../bloglist'
import AboutMe from '../aboutme'
import Updates from '../updates'

function Taber () {
    const [index, setIndex] = useState(0)
    const onActive = (nextIndex) => {
        setIndex(nextIndex)
    }

    return (
        <Box
            background='accent-1'
            fill='horizontal'
        >
            <Tabs activeIndex={index} onActive={onActive}>
                <Tab title={
                    <RichTaber
                        icon={<Projects color='dark-1' />}
                        label="Projects"
                    />
                }
                >
                    <ProjectList />
                </Tab>
                <Tab title={
                    <RichTaber
                        icon={<Article color='dark-1' />}
                        label="Blogs"
                    />
                }
                >
                    <BlogList />
                </Tab>
                <Tab title={
                    <RichTaber
                        icon={<Robot color='dark-1' />}
                        label="About Me"
                    />
                }
                >
                    <AboutMe />
                </Tab>
                <Tab title={
                    <RichTaber
                        icon={<Domain color='dark-1' />}
                        label="Site Updates"
                    />
                }
                >
                    <Updates />
                </Tab>
            </Tabs>
        </Box>
    )
}

const RichTaber = ({icon, label}) => (
    <Box
        direction='row' align='center' height='xxsmall' pad='medium' gap='small'
    >
        {icon}
        <Text size='small'>
            <strong>{label}</strong>
        </Text>
    </Box>
)


export default Taber