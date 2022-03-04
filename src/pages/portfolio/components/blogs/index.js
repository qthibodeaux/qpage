import { useState, useEffect } from 'react'
import { Box, Button,  DropButton, Image, List, Text } from 'grommet'
import { Selection, FormDown, FormUp } from 'grommet-icons'
import { blags } from '../../../../bank'

function Blogs () {
    const [val, setVal] = useState(0)
    const [upDisabled, setUpDisabled] = useState(false)
    const [downDisabled, setDownDisabled] = useState(false)
    const [selected, setSelected] = useState()
    const [open , setOpen] = useState(false)
    const name = blags.map(x => x.title)

    function minus () {
        setVal(val - 1)
    }
    function plus () {
        setVal(val + 1)
    }
    function onOpen () {
        setOpen(true)
    }
    function onClose () {
        setOpen(false)
    }
    function selects (event) {
        setSelected( selected === event.index ? undefined : event.index)
        setVal(event.index)
        onClose()
    }

    useEffect(() => {
        if (val === 0) {
            setUpDisabled(true)
        } else setUpDisabled(false)
    }, [val])

    useEffect(() => {
        if (val === blags.length-1) {
            setDownDisabled(true)
        } else setDownDisabled (false)
    }, [val])

    return (
        <Box>
            <Box 
                direction='row'
                align='center'
                as='header'
                elevation='small'
                justify='between'
                height='xxsmall'
            >
                <Box direction='row'>
                    <DropButton 
                        icon={<Selection />}
                        dropAlign={{ top: 'bottom', left: 'left'}}
                        open={open}
                        onOpen={onOpen}
                        onClose={onClose}
                        dropContent={
                            <Box pad='large' background='light-2'> 
                                <List 
                                    data={name}
                                    itemProps={
                                        selected >= 0 ?{ [selected]: {background: 'brand'}} : undefined
                                    }
                                    onClickItem={(event) => {selects(event)}}
                                />
                            </Box>
                        }
                        /> 
                    <Box justify='center'>
                        <Text>{blags[val].title}</Text>
                    </Box>
                </Box>
                <Box direction='row'>
                    <Button icon={<FormUp />} onClick={minus} disabled={upDisabled}/>
                    <Button icon={<FormDown />} onClick={plus} disabled={downDisabled}/>
                </Box>
            </Box>
            <Flipper blogs={blags[val]}/>
        </Box>
    )
}

function Flipper (props) {
    return (
        <Box>
            <Box height='small'>
                <Image 
                    fill
                    fit='cover'
                    src={props.blogs.image}
                />
            </Box>
            <Box pad='medium' height='xxsmall'>{props.blogs.title}</Box>
            <Box pad='medium' height='medium' overflow="auto">
                {props.blogs.subtitle}
                {props.blogs.post}
            </Box>
            <Box pad='medium' height='xxsmall'>{props.blogs.date}</Box>
        </Box>
        
    )
}

export default Blogs

