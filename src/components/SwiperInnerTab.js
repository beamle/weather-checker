import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Paper from "@mui/material/Paper";
import {Box} from "@mui/joy";
import React from "react";

function SwiperInnerTab({fetchedData}) {
    return (
        <Swiper slidesPerView={8}>
            {fetchedData.map((item, i) => {
            return (
                    <SwiperSlide>
                        <Box key={i} sx={{display: 'flex', justifyContent: 'center'}}>
                            <Paper sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100%', height: '200px'}}>
                                <img src={item.condition.icon} alt={"icon"}/>
                                <p><strong>Temp:</strong> {item.temp_c}°C</p>
                            </Paper>
                        </Box>
                    </SwiperSlide>
            )
        })}
        </Swiper>
    );
}

export default SwiperInnerTab;