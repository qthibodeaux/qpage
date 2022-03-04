import { Box, Button, Image, Text } from 'grommet'
import { blags } from '../../../../bank'

function BlogList () {
    const name = blags.map(x => x.title)
    
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
                {blags.map((blags, key) => {
                    return (
                        <BlogBar blogs={blags} key={key}/>
                    )
                })}
            </Box>
        </Box>
    )
}

function BlogBar (props) {
    
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
                    src={props.blogs.image} />
            </Box>

            <Box width='large' justify='between'>
                <Box pad='medium' height='xxsmall'>{props.blogs.title}</Box>
                <Box pad='medium' height='medium' overflow="auto">
                    {props.blogs.subtitle}
                    {props.blogs.post}
                </Box>
                <Box pad='medium' height='xxsmall'>{props.blogs.date}</Box>
            </Box>
        </Box>
    )
}

export default BlogList