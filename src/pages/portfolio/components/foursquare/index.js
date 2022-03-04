import { Box, Text } from 'grommet'
import { useRecoilState } from 'recoil'
import { Projects, Article, Robot, Domain } from 'grommet-icons'
import { tabSelection as tabSelectionAtom } from '../../../../store'

function FourSquare () {
    const [tabSelection, setTabSelectionAtom] = useRecoilState(tabSelectionAtom)

    function close (selection) {
        setTabSelectionAtom(selection)
    }

    return (
        <Box
            fill='horizontal'
            background='accent-1'
            direction='column'
            height='large'
        >
            <Box 
                direction='row'
                height='medium'>
                <Box
                    background='url(projectstall.jpg)'
                    fill='horizontal'
                >
                    <Box
                        fill
                        background={{
                            color: 'accent-1',
                            opacity: '0.8'
                        }}
                        pad='large'    
                        align='center'
                        justify='center'    
                        gap='small'
                        onClick={() => close(1)}
                    >
                        <Projects size='large' color='dark-1' junk={tabSelection}/>
                        <Text weight='bold' color='dark-1'>Projects</Text>
                    </Box>
                </Box>
                <Box
                    background='url(blogtall.jpg)'
                    fill='horizontal'
                >
                    <Box
                        fill
                        background={{
                            color: 'accent-1',
                            opacity: '0.8'
                        }}
                        pad='large'    
                        align='center'
                        justify='center'    
                        gap='small'
                        onClick={() => close(2)}
                    >
                        <Article size='large' color='dark-1'/>
                        <Text weight='bold' color='dark-1'>Blog</Text>
                    </Box>
                </Box>
            </Box>
            <Box 
                direction='row'
                height='medium'>
                <Box
                    background='url(Metall.jpg)'
                    fill='horizontal'
                >
                    <Box
                        fill
                        background={{
                            color: 'accent-1',
                            opacity: '0.8'
                        }}
                        pad='large'    
                        align='center'
                        justify='center'    
                        gap='small'
                        onClick={() => close(3)}
                    >
                        <Robot size='large' color='dark-1' />
                        <Text weight='bold' color='dark-1'>About Me</Text>
                    </Box>
                </Box>
                <Box
                    background='url(worktall.jpg)'
                    fill='horizontal'
                >
                    <Box
                        fill
                        background={{
                            color: 'accent-1',
                            opacity: '0.8'
                        }}
                        pad='large'    
                        align='center'
                        justify='center'    
                        gap='small'
                        onClick={() => close(4)}
                    >
                        <Domain size='large' color='dark-1' />
                        <Text weight='bold' color='dark-1'>Site Updates</Text>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default FourSquare