import React, {Fragment} from 'react';
import Carousel from 'react-material-ui-carousel'
import Paper from '@mui/material/Paper'
import {Box} from "@mui/joy";


function InnerTab({fetchedData}) {
    
    return (
        <Carousel>
            {
                fetchedData.map((item, i) => {
                        return (
                            <Box key={i} sx={{display: 'flex', justifyContent: 'center'}}>
                                <Paper sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', width: '200px', height: '200px'}}>
                                    <img src={item.condition.icon} alt={"icon"}/>
                                    <p><strong>Temp:</strong> {item.temp_c}°C</p>
                                </Paper>
                            </Box>
                        )
                    })
            }
        </Carousel>
    )
}


export default InnerTab;


{/*// fullHeightHover={false}     // We want the nav buttons wrapper to only be as big as the button element is*/}
{/*// navButtonsProps={{          // Change the colors and radius of the actual buttons. THIS STYLES BOTH BUTTONS*/}
{/*//     style: {*/}
{/*//         backgroundColor: 'cornflowerblue',*/}
{/*//         borderRadius: 0*/}
{/*//     }*/}
{/*// }}*/}
{/*// navButtonsWrapperProps={{   // Move the buttons to the bottom. Unsetting top here to override default style.*/}
{/*//     style: {*/}
{/*//         bottom: '1',*/}
{/*//         top: 'unset'*/}
{/*//     }*/}
{/*// }}*/}
{/*// NextIcon='next'             // Change the "inside" of the next button to "next"*/}
{/*// PrevIcon='prev'  >*/}
