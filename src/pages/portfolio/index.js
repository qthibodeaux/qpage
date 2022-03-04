import React from 'react'
import { Box, ResponsiveContext } from 'grommet'
import Hero from './components/hero'
import Vary from './components/vary'
import Taber from './components/taber'
import Skills from './components/skill'

function Portfolio () {
    const size = React.useContext(ResponsiveContext)

    return (
        <Box flex align='center' justify='center'>
            <Hero />
            <Skills />
            {size !== 'small' ? <Taber /> : <Vary />}
        </Box>
    )
}

export default Portfolio