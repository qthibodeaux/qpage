import { Box, Button, Layer, Heading } from 'grommet'
import { FormClose } from 'grommet-icons'
import { useRecoilState } from 'recoil'
import { tabSelection as tabSelectionAtom } from '../../../../store'

function HeaderLayer (props) {
    const [tabSelection, setTabSelectionAtom] = useRecoilState(tabSelectionAtom)

    const closer = (selection) => {
        let mover = selection+1
        console.log('mover', mover)
        setTabSelectionAtom(mover)
        props.closer()
    }

    const close = () => {
        props.closer()
    }

    const items = [
        {name: 'Projects', back: 'url(skycrop.jpg)'}, 
        {name: 'Blog', back: 'url(houcrop.jpg)'}, 
        {name: 'About', back: 'url(besomeonecrop.jpg)'}, 
        {name: 'Updates', back: 'url(screwcrop.jpg)'},
    ]

    return (
        <Layer full animation='fadeIn' background='dark-1'>
            <Box fill align='center' justify='center'>
                <Box
                    fill='horizontal'
                    tag='header' 
                    align='center'
                    justify='between'
                    pad='medium'
                    elevation='medium'
                    style={{zIndex: '1'}}
                    background='dark-1'>
                        <Button
                        icon={<FormClose junk={tabSelection} color='accent-1'/>}
                        onClick={close}
                        />
                </Box>
                <Box
                    fill
                    justify='between'
                    gap='medium'
                >
                    {items.map((item, key)=>(
                        <Box 
                            basis='small'
                            fill='horizontal'
                            justify='center'
                            align='center'
                            background={{
                                image: item.back,
                            }}                   
                        >
                            <Box
                                fill
                                background={{
                                    color: 'accent-1',
                                    opacity: 'strong'
                                }}
                                pad='medium'
                                onClick={() => closer(key)}
                            >
                                <Heading>
                                    {item.name}
                                </Heading>
                            </Box>
                        </Box>    
                    ))}
                </Box>
            </Box>
        </Layer>
    )
}

export default HeaderLayer