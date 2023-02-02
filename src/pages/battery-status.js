import { Container } from "react-bootstrap"
import React, { useEffect, useState } from 'react';
import ChartComponent from './battery-status/chart-component'
import PanelComponent from "./battery-status/panel-component";

function BatteryStatus() {
    const [data1, setData1] = useState([])
    const [data2, setData2] = useState([])
    const [data3, setData3] = useState([])
    const [data4, setData4] = useState([])
    const [data5, setData5] = useState([])
    const [data6, setData6] = useState([])
    const [data7, setData7] = useState([])
    const [data8, setData8] = useState([])

    useEffect(() => {
        async function getData() {
            const url1 = `http://localhost:8000/data_1/?limit=20`
            const url2 = `http://localhost:8000/data_2/?limit=20`
            const url3 = `http://localhost:8000/data_3/?limit=5`
            const url4 = `http://localhost:8000/data_4/?limit=5`
            const url5 = `http://localhost:8000/data_5/?limit=5`
            const url6 = `http://localhost:8000/data_6/?limit=5`
            const url7 = `http://localhost:8000/data_7/?limit=5`
            const url8 = `http://localhost:8000/data_8/?limit=5`

            const responses = await Promise.all([fetch(url1), fetch(url2), fetch(url3), fetch(url4), fetch(url5), fetch(url6), fetch(url7), fetch(url8)])

            const tempData1 = await responses[0].json()
            const tempData2 = await responses[1].json()
            const tempData3 = await responses[2].json()
            const tempData4 = await responses[3].json()
            const tempData5 = await responses[4].json()
            const tempData6 = await responses[5].json()
            const tempData7 = await responses[6].json()
            const tempData8 = await responses[7].json()
            // do what you want with data1 and data2 here

            if (tempData1.data.length > 0) {
                setData1(tempData1.data)
            }
            if (tempData2.data.length > 0) {
                setData2(tempData2.data)
            }
            if (tempData3.data.length > 0) {
                setData3(tempData3.data)
            }
            if (tempData4.data.length > 0) {
                setData4(tempData4.data)
            }
            if (tempData5.data.length > 0) {
                setData5(tempData5.data)
            }
            if (tempData6.data.length > 0) {
                setData6(tempData6.data)
            }
            if (tempData7.data.length > 0) {
                setData7(tempData7.data)
            }
            if (tempData8.data.length > 0) {
                setData8(tempData8.data)
            }
        }
        setInterval(() => { getData() }, 5000)
    }, [])

    return (
        <Container>
            <div id="battery-status" className="tabcontent" style={{ "display": "block" }}>
                {
                    [
                        data1.length > 0 ? <PanelComponent data1={data1} data2={data2} data3={data3} data4={data4} data5={data5} data6={data6} data7={data7} data8={data8} /> : null,
                        data1.length > 0 ? <ChartComponent data1={data1} data2={data2} data3={data3} data4={data4} data5={data5} data6={data6} data7={data7} data8={data8} /> : null
                    ]
                }
            </div>
        </Container>
    )
}



export default BatteryStatus
