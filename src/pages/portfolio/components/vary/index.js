import { Box } from 'grommet'
import { useRecoilState } from 'recoil'
import FourSquare from '../foursquare/index'
import TabSmall from '../tabsmall'
import { tabSelection as tabSelectionAtom } from '../../../../store'

function Vary () {
    const [tabSelection] = useRecoilState(tabSelectionAtom)

    return (
        <Box
            fill='horizontal'
        >
            {tabSelection > 0 ? <TabSmall /> : <FourSquare />}
        </Box>
    )
}

export default Vary