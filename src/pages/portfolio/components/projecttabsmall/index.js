import React, { useState, useEffect } from 'react'
import { Box, Button, DropButton, Image, List, Text } from 'grommet'
import { Domain, Selection, FormDown, FormUp, Github, PhoneVertical } from 'grommet-icons'
import { projects } from '../../../../bank'

/*
Cuz you are tired...here is a HUGE reminder to change cards
Title
Headline
About project
Feature of project
Technology used in the project

REDO ALLLLLLLLLLLLLLLLLLLLLL of the card as a Box

Revamp footer to include a key
And help

*/

function ProjectSmall () {
    const [val, setVal] = useState(0)
    const [upDisabled, setUpDisabled] = useState(false)
    const [downDisabled, setDownDisabled] = useState(false)
    const [selected, setSelected] = useState()
    const [open , setOpen] = useState(false)
    const name = projects.map(x => x.name)

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
        if (val === projects.length-1) {
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
                        <Text>{projects[val].shortName}</Text>
                    </Box>
                </Box>
                <Box direction='row'>
                    <Button icon={<FormUp />} onClick={minus} disabled={upDisabled}/>
                    <Button icon={<FormDown />} onClick={plus} disabled={downDisabled}/>
                </Box>
            </Box>
            <Flipper projects={projects[val]}/>
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
                    src={props.projects.gif} />
            </Box>
            <Box
                height='xxsmall'
                pad='medium'
            >
                <Text weight='bold'>{props.projects.headline}</Text>
            </Box>
            <Box height='medium' pad='medium'>
                    <Text>{props.projects.caption}</Text>
                    <Text>Features</Text>
                    <Text size='small'>React</Text>
                </Box>
            <Box
                direction='row'
                height='xxsmall'
                background='accent-1'
            >
                <Button icon={<Github />}/>
                <Button icon={<PhoneVertical />}/>
                <Button icon={<Domain />}/>
            </Box>
        </Box>
    )
}

export default ProjectSmall