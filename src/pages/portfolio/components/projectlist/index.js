import { Box, Button, Image, Text } from 'grommet'
import { Domain, Github, PhoneVertical } from 'grommet-icons'
import { projects } from '../../../../bank'

function ProjectList () {
    return (
        <Box
            pad={{ top:'medium', bottom:'medium'}}
            gap='medium'
            height='large'
            overflow='auto'
        >
            <Box
                pad={{ vertical:'small', horizontal: 'large'}}
            >
                {projects.map((projects, key) => {
                    return (
                        <ProjectBar projects={projects} key={key}/>
                    )
                })}
            </Box>
        </Box>
    )
}

function ProjectBar (props) {
    
    return (
        <Box 
                direction='row'
                justify='center'
                pad='medium'
                gap='medium'
                height={{min:'medium'}}
            >
                <Box width='large'>
                    <Image
                        fill
                        fit='cover'
                        src={props.projects.gif} />
                </Box>

                <Box width='large' justify='between'>
                    <Box>
                        {props.projects.headline}
                    </Box>
                    <Box
                        fill='vertical'
                        pad={{top:'small'}}
                        overflow='auto'
                    >
                        <Text>{props.projects.caption}</Text>
                        Features
                        React
                    </Box>
                    <Box
                        direction='row'
                    >
                        <Button icon={<Github />}/>
                        <Button icon={<PhoneVertical />}/>
                        <Button icon={<Domain />}/>
                    </Box>
                </Box>
            </Box>
    )
}

export default ProjectList
