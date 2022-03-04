import { Anchor, Box, Text, Footer } from 'grommet'
import { Linkedin, Github, DocumentDownload } from 'grommet-icons'

function FooterSmall () {
    return (
        <Footer 
            direction='column'
            gap='xsmall'
            background='dark-1'
            fill='horizontal'
            pad='medium'
        >
            <Text level='6'>Thank you for visiting my site.</Text>
            <Text level='6'>Quintus Thibodeaux</Text>
            <Text level='6'>Email: qthibgit@gmail.com</Text>
            <Text level='6'>Phone: 979-221-6149</Text>
            <Box
                direction='row'
                justify='center'
                align='center'
                fill='horizontal'
            >
                <Box direction='row' pad='xsmall'>
                    <Anchor icon={<Linkedin/>} href='https://www.linkedin.com/in/quintus-thibodeaux-4372751b0/' target='_blank'/>
                    <Anchor icon={<Github/>} href='https://github.com/qthibodeaux' target='_blank'/>
                    <Anchor icon={<DocumentDownload/>} href='myapp\public\QuintusThibodeauxResume92020.pdf' download/>
                </Box>
            </Box>
        </Footer>
    )
}

export default FooterSmall