import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Card from "../component/historyCard"
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import Nodata from "../assets/nodata.svg";
import Header from "../component/historyHeader"
const history = () => {
    const [allData, setAllData] = useState("");
    useEffect(() => {
        axios.get("https://api-gqye.onrender.com/history")
            .then((res) => setAllData(res.data))
            .catch((err) => console.log(err));
    }, [])

    return (
        <Box>
            <Header />
            <Box mt={5}>
                <Typography variant='h4' mb={2}>History</Typography>
                <Box display={"flex"} flexWrap={"wrap"}>
                    {allData.length ? allData.map((db) => (
                        <Card
                            key={db?.id}
                            data={db}
                        />
                    )) :
                        <Box display={"flex"} flexDirection={"column"} alignContent={"center"} alignItems={"center"} sx={{ margin: "auto" }}>
                            <Box>
                                <img width={"200px"} src={Nodata} />
                            </Box>
                            <Typography>History is empty.</Typography>
                        </Box>}
                </Box>
            </Box>
        </Box>
    )
}

export default history