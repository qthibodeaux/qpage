import React from 'react'
import { Avatar, Box, Button, Header, Menu, ResponsiveContext } from 'grommet';

function NavBar (props) {
    const size = React.useContext(ResponsiveContext)
    return (
        <Box>
            {size !== 'small' ? <NavBarBig /> : <NavBarSmall opener={props.opener} />}
        </Box>
    )
}

function NavBarBig () {
    return (
        <Header background='dark-1' pad='small'>
            <Box direction='row' align='center' gap='small'>
                <Avatar background='accent-1'>QT</Avatar>
            </Box>
        </Header>
    )
}

function NavBarSmall (props) {
    
    const open = () => {
        props.opener()
    }

    return (
        <Box
            tag='header' 
            direction='row'
            align='center'
            justify='between'
            pad='medium'
            elevation='medium'
            style={{zIndex: '1'}}
            background='dark-1'>
            <Avatar background='accent-1' size='medium'>QT</Avatar>
            <Button icon={<Menu />} onClick={open}/>
        </Box>
    )
}

export default NavBar