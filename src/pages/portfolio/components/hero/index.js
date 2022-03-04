import React from 'react'
import { Anchor, Box, Paragraph, Heading, ResponsiveContext, Tip } from 'grommet'
import { DocumentDownload, Linkedin, Github } from 'grommet-icons'

function Hero () {
    const size = React.useContext(ResponsiveContext)

    return (
        <Box
            fill='horizontal'
        >
            {size !==  'small' ? <HeroBig /> : <HeroSmall/>}
        </Box>
    )
}

function HeroBig () {

    return (
        <Box
            fill='horizontal'
        >
            <Box direction='column'>
                <Box 
                    height="small" 
                    fill='horizontal' 
                    background={{
                        image: 'url(MeWide.jpg)',
                    }}  
                >
                    <Box
                        fill
                        background={{
                            color: 'accent-1',
                            opacity: 'strong'
                        }}
                        pad='medium'
                    >
                        <Heading 
                            responsive={true} 
                            size="medium"
                            margin="none"
                            alignSelf="center"
                        >
                            Quintus Thibodeaux
                        </Heading>
                        <Paragraph 
                            responsive={true} 
                            size="large"
                            textAlign="center"
                            margin="none"
                            alignSelf="center"
                        >
                            Full Stack Developer
                        </Paragraph>
                        <Box
                            direction="row"
                            alignSelf="center"
                        >
                            <Tip content='Link to my Linkedin page.'>
                                <Anchor color='dark-1' icon={<Linkedin/>} href='https://www.linkedin.com/in/quintus-thibodeaux-4372751b0/' target='_blank'/>
                            </Tip>
                            <Tip content='Link to my Github Page.'>
                                <Anchor color='dark-1' icon={<Github/>} href='https://github.com/qthibodeaux' target='_blank'/>
                            </Tip>
                            <Tip content='Click to download my resume.'>
                                <Anchor color='dark-1' icon={<DocumentDownload/>} href='myapp\public\QuintusThibodeauxResume92020.pdf' download/>
                            </Tip>
                        </Box>
                    </Box> 
                </Box>
            </Box>
        </Box>
    )
}

function HeroSmall () {

    return (
        <Box
            fill
        >
            <Box
                height='small'
                justify='center'
                align='center'
                background={{
                    image: 'url(MeWide.jpg)',
                }}  
            >
                <Box
                    fill
                    background={{
                        color: 'accent-1',
                        opacity: 'strong'
                    }}
                    pad='medium'
                >
                    <Heading 
                        responsive={true} 
                        size="medium"
                        margin="none"
                        alignSelf="center"
                    >
                        Quintus Thibodeaux
                    </Heading>
                    <Paragraph 
                        responsive={true} 
                        size="large"
                        textAlign="center"
                        margin="none"
                        alignSelf="center"
                    >
                        Full Stack Developer
                    </Paragraph>
                    <Box
                        direction="row"
                        alignSelf="center"
                    >
                        <Anchor color='dark-1' icon={<Linkedin/>} href='https://www.linkedin.com/in/quintus-thibodeaux-4372751b0/' target='_blank'/>
                        <Anchor color='dark-1' icon={<Github/>} href='https://github.com/qthibodeaux' target='_blank'/>
                        <Anchor color='dark-1' icon={<DocumentDownload/>} href='myapp\public\QuintusThibodeauxResume92020.pdf' download/>
                    </Box>
                </Box> 
            </Box>
        </Box>
    )
}

export default Hero