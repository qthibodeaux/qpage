import { Box, Text } from 'grommet'
import { updates } from '../../../../bank'

function Updates () {
    return (
        <Box
            justify='center'
            align='start'
            fill='horizontal'
            pad='medium'
        >
            {
                updates.map((element, key) => {
                    return (
                        <Box 
                            direction='column'
                            pad='small'
                            border={{ 
                                        color: 'dark-1',
                                        size: 'small',
                                        style: 'solid',
                                        side: 'bottom'
                                    }}
                            gap='small'
                        >
                            <Text>{element.date}</Text>
                            <Text>{element.content}</Text>
                        </Box>
                    )
                })
            }
        </Box>
    )
}

export default Updates

/*
16 total
8 medium
4 small
2 xsmall
1 xxsmall

4 4 xxsmall
4 1 small
8 1 meddium

xxsmall     tabs
xxsmall     rotate
small       image
xxsmall     header
medium      box
xsmall      footer
*/