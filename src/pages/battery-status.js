import { Container } from "react-bootstrap"
import React, { useEffect, useState } from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);
export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Chart.js Line Chart',
        },
    },
};


function statusChanger(voltage, current, tuya_Number) {
    if (voltage > 0) {
        if (current > 0) {
            let theNumber = `status-${tuya_Number}`
            document.getElementById(theNumber).innerHTML = "Online"
            document.getElementById(theNumber).style.color = "green"
        } else {
            let theNumber = `status-${tuya_Number}`
            document.getElementById(theNumber).innerHTML = "Idle"
            document.getElementById(theNumber).style.color = "rgb(225, 214, 0)"

        }
    } else {
        let theNumber = `status-${tuya_Number}`
        document.getElementById(theNumber).innerHTML = "Offline"
        document.getElementById(theNumber).style.color = "blue"
    }
}

function BatteryStatus() {
    const [data1, setData1] = useState([])
    const [data2, setData2] = useState([])
    const [data3, setData3] = useState([])
    const [data4, setData4] = useState([])
    const [data5, setData5] = useState([])
    const [data6, setData6] = useState([])
    const [data7, setData7] = useState([])
    const [data8, setData8] = useState([])
    const [chartHide, setChartHide] = useState("1")

    useEffect(() => {
        async function getData() {
            const url1 = `http://localhost:8000/data_1/?limit=20`
            const url2 = `http://localhost:8000/data_2/?limit=5`
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

    var longData1 = data1.length
    var longData2 = data2.length
    var longData3 = data3.length
    var longData4 = data4.length
    var longData5 = data5.length
    var longData6 = data6.length
    var longData7 = data7.length
    var longData8 = data8.length

    if (data1.length > 0) {
        statusChanger(data1[longData1 - 1].voltage, data1[longData1 - 1].current, 1)
    }

    if (data2.length > 0) {
        statusChanger(data2[longData2 - 1].voltage, data2[longData2 - 1].current, 2)
    }

    if (data3.length > 0) {
        statusChanger(data3[longData3 - 1].voltage, data3[longData3 - 1].current, 3)
    }

    if (data4.length > 0) {
        statusChanger(data4[longData4 - 1].voltage, data4[longData4 - 1].current, 4)
    }

    if (data5.length > 0) {
        statusChanger(data5[longData5 - 1].voltage, data5[longData5 - 1].current, 5)
    }

    if (data6.length > 0) {
        statusChanger(data6[longData6 - 1].voltage, data6[longData6 - 1].current, 6)
    }

    if (data7.length > 0) {
        statusChanger(data7[longData7 - 1].voltage, data7[longData7 - 1].current, 7)
    }

    if (data8.length > 0) {
        statusChanger(data8[longData8 - 1].voltage, data8[longData8 - 1].current, 8)
    }

    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

    const data = {
        labels,
        datasets: [
            {
                label: 'Dataset 1',
                data: data1.filter((value) => value.voltage != null).map((value) => value.voltage),
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
        ],
    };

    const handleChange = (event) => {
        setChartHide(event.target.value);
    }

    return (
        <Container>
            <div id="battery-status" className="tabcontent" style={{ "display": "block" }}>
                <div className="panel">
                    <div className="panel-container-item" id="electricity">
                        <div className="panel-section">
                            <div className="panel-section-title">
                                <h5>Electricity Status</h5>
                            </div>
                            <div className="panel-section-data">
                                <ul>
                                    <li>
                                        <h5>Smart Plug 1</h5>
                                    </li>
                                    <li>
                                        <div className="electricity-status">
                                            <div className="voltage">
                                                <span>V : </span>
                                                <span>
                                                    <p>
                                                        {
                                                            // console.log(data1[0].voltage)
                                                            data1.length > 0 ? data1[longData1 - 1].voltage : 0
                                                        }
                                                    </p>
                                                </span>
                                                <span>Volt</span>
                                            </div>
                                            <div className="current">
                                                <span>I : </span>
                                                <span>
                                                    {
                                                        // console.log(data1[0].voltage)
                                                        data1.length > 0 ? data1[longData1 - 1].current : 0
                                                    }
                                                </span>
                                                <span>A</span>
                                            </div>
                                            <div className="power">
                                                <span>P : </span>
                                                <span>
                                                    {
                                                        // console.log(data1[0].voltage)
                                                        data1.length > 0 ? data1[longData1 - 1].power : 0
                                                    }
                                                </span>
                                                <span>Watt</span>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <h5>Smart Plug 2</h5>
                                    </li>
                                    <li>
                                        <div className="electricity-status">
                                            <div className="voltage">
                                                <span>V : </span>
                                                <span>
                                                    <p>
                                                        {
                                                            // console.log(data1[0].voltage)
                                                            data2.length > 0 ? data2[longData2 - 2].voltage : 0
                                                        }
                                                    </p>
                                                </span>
                                                <span>Volt</span>
                                            </div>
                                            <div className="current">
                                                <span>I : </span>
                                                <span>
                                                    {
                                                        // console.log(data1[0].voltage)
                                                        data2.length > 0 ? data2[longData2 - 2].current : 0
                                                    }
                                                </span>
                                                <span>A</span>
                                            </div>
                                            <div className="power">
                                                <span>P : </span>
                                                <span>
                                                    {
                                                        // console.log(data1[0].voltage)
                                                        data2.length > 0 ? data2[longData2 - 2].power : 0
                                                    }
                                                </span>
                                                <span>Watt</span>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <h5>Smart Plug 3</h5>
                                    </li>
                                    <li>
                                        <div className="electricity-status">
                                            <div className="voltage">
                                                <span>V : </span>
                                                <span>
                                                    <p>
                                                        {
                                                            // console.log(data1[0].voltage)
                                                            data3.length > 0 ? data3[longData3 - 2].voltage : 0
                                                        }
                                                    </p>
                                                </span>
                                                <span>Volt</span>
                                            </div>
                                            <div className="current">
                                                <span>I : </span>
                                                <span>
                                                    {
                                                        // console.log(data1[0].voltage)
                                                        data3.length > 0 ? data3[longData3 - 2].current : 0
                                                    }
                                                </span>
                                                <span>A</span>
                                            </div>
                                            <div className="power">
                                                <span>P : </span>
                                                <span>
                                                    {
                                                        // console.log(data3[0].voltage)
                                                        data3.length > 0 ? data3[longData3 - 2].power : 0
                                                    }
                                                </span>
                                                <span>Watt</span>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <h5>Smart Plug 4</h5>
                                    </li>
                                    <li>
                                        <div className="electricity-status">
                                            <div className="voltage">
                                                <span>V : </span>
                                                <span>
                                                    <p>
                                                        {
                                                            // console.log(data1[0].voltage)
                                                            data4.length > 0 ? data4[longData4 - 2].voltage : 0
                                                        }
                                                    </p>
                                                </span>
                                                <span>Volt</span>
                                            </div>
                                            <div className="current">
                                                <span>I : </span>
                                                <span>
                                                    {
                                                        // console.log(data1[0].voltage)
                                                        data4.length > 0 ? data4[longData4 - 2].current : 0
                                                    }
                                                </span>
                                                <span>A</span>
                                            </div>
                                            <div className="power">
                                                <span>P : </span>
                                                <span>
                                                    {
                                                        // console.log(data4[0].voltage)
                                                        data4.length > 0 ? data4[longData4 - 2].power : 0
                                                    }
                                                </span>
                                                <span>Watt</span>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <h5>Smart Plug 5</h5>
                                    </li>
                                    <li>
                                        <div className="electricity-status">
                                            <div className="voltage">
                                                <span>V : </span>
                                                <span>
                                                    <p>
                                                        {
                                                            // console.log(data1[0].voltage)
                                                            data5.length > 0 ? data5[longData5 - 2].voltage : 0
                                                        }
                                                    </p>
                                                </span>
                                                <span>Volt</span>
                                            </div>
                                            <div className="current">
                                                <span>I : </span>
                                                <span>
                                                    {
                                                        // console.log(data1[0].voltage)
                                                        data5.length > 0 ? data5[longData5 - 2].current : 0
                                                    }
                                                </span>
                                                <span>A</span>
                                            </div>
                                            <div className="power">
                                                <span>P : </span>
                                                <span>
                                                    {
                                                        // console.log(data5[0].voltage)
                                                        data5.length > 0 ? data5[longData5 - 2].power : 0
                                                    }
                                                </span>
                                                <span>Watt</span>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <h5>Smart Plug 6</h5>
                                    </li>
                                    <li>
                                        <div className="electricity-status">
                                            <div className="voltage">
                                                <span>V : </span>
                                                <span>
                                                    <p>
                                                        {
                                                            // console.log(data1[0].voltage)
                                                            data6.length > 0 ? data6[longData6 - 2].voltage : 0
                                                        }
                                                    </p>
                                                </span>
                                                <span>Volt</span>
                                            </div>
                                            <div className="current">
                                                <span>I : </span>
                                                <span>
                                                    {
                                                        // console.log(data1[0].voltage)
                                                        data6.length > 0 ? data6[longData6 - 2].current : 0
                                                    }
                                                </span>
                                                <span>A</span>
                                            </div>
                                            <div className="power">
                                                <span>P : </span>
                                                <span>
                                                    {
                                                        // console.log(data6[0].voltage)
                                                        data6.length > 0 ? data6[longData6 - 2].power : 0
                                                    }
                                                </span>
                                                <span>Watt</span>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <h5>Smart Plug 7</h5>
                                    </li>
                                    <li>
                                        <div className="electricity-status">
                                            <div className="voltage">
                                                <span>V : </span>
                                                <span>
                                                    <p>
                                                        {
                                                            // console.log(data1[0].voltage)
                                                            data7.length > 0 ? data7[longData7 - 2].voltage : 0
                                                        }
                                                    </p>
                                                </span>
                                                <span>Volt</span>
                                            </div>
                                            <div className="current">
                                                <span>I : </span>
                                                <span>
                                                    {
                                                        // console.log(data1[0].voltage)
                                                        data7.length > 0 ? data7[longData7 - 2].current : 0
                                                    }
                                                </span>
                                                <span>A</span>
                                            </div>
                                            <div className="power">
                                                <span>P : </span>
                                                <span>
                                                    {
                                                        // console.log(data7[0].voltage)
                                                        data7.length > 0 ? data7[longData7 - 2].power : 0
                                                    }
                                                </span>
                                                <span>Watt</span>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <h5>Smart Plug 8</h5>
                                    </li>
                                    <li>
                                        <div className="electricity-status">
                                            <div className="voltage">
                                                <span>V : </span>
                                                <span>
                                                    <p>
                                                        {
                                                            // console.log(data1[0].voltage)
                                                            data8.length > 0 ? data8[longData8 - 2].voltage : 0
                                                        }
                                                    </p>
                                                </span>
                                                <span>Volt</span>
                                            </div>
                                            <div className="current">
                                                <span>I : </span>
                                                <span>
                                                    {
                                                        // console.log(data1[0].voltage)
                                                        data8.length > 0 ? data8[longData8 - 2].current : 0
                                                    }
                                                </span>
                                                <span>A</span>
                                            </div>
                                            <div className="power">
                                                <span>P : </span>
                                                <span>
                                                    {
                                                        // console.log(data8[0].voltage)
                                                        data8.length > 0 ? data8[longData8 - 2].power : 0
                                                    }
                                                </span>
                                                <span>Watt</span>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="kwh panel-container-item" id="kwh">
                        <div className="panel-section">
                            <div className="panel-section-title">
                                <h5>
                                    kWh Electricity Status
                                </h5>
                            </div>
                            <div className="panel-section-data">
                                <ul>
                                    <li>
                                        <h5>Smart Plug 1 <span id="kwh-component-value-1" className="value-component"></span></h5>
                                    </li>
                                    <li>
                                        <div className="progress-bar-section">
                                            <div className="background-bar"></div>
                                            <div className="progress-bar" style={{ "width": `${data1.length > 0 ? data1[longData1 - 2].total_electricity * 100 : 0}px` }}></div>
                                        </div>
                                    </li>
                                    <li>
                                        <h5>Smart Plug 2 <span id="kwh-component-value-1" className="value-component"></span></h5>
                                    </li>
                                    <li>
                                        <div className="progress-bar-section">
                                            <div className="background-bar"></div>
                                            <div className="progress-bar" style={{ "width": `${data1.length > 0 ? data2[longData2 - 2].total_electricity * 100 : 0}px` }}></div>
                                        </div>
                                    </li>
                                    <li>
                                        <h5>Smart Plug 3 <span id="kwh-component-value-1" className="value-component"></span></h5>
                                    </li>
                                    <li>
                                        <div className="progress-bar-section">
                                            <div className="background-bar"></div>
                                            <div className="progress-bar" style={{ "width": `${data3.length > 0 ? data3[longData3 - 2].total_electricity * 100 : 0}px` }}></div>
                                        </div>
                                    </li>
                                    <li>
                                        <h5>Smart Plug 4 <span id="kwh-component-value-1" className="value-component"></span></h5>
                                    </li>
                                    <li>
                                        <div className="progress-bar-section">
                                            <div className="background-bar"></div>
                                            <div className="progress-bar" style={{ "width": `${data4.length > 0 ? data4[longData4 - 2].total_electricity * 100 : 0}px` }}></div>
                                        </div>
                                    </li>
                                    <li>
                                        <h5>Smart Plug 5 <span id="kwh-component-value-1" className="value-component"></span></h5>
                                    </li>
                                    <li>
                                        <div className="progress-bar-section">
                                            <div className="background-bar"></div>
                                            <div className="progress-bar" style={{ "width": `${data5.length > 0 ? data5[longData5 - 2].total_electricity * 100 : 0}px` }}></div>
                                        </div>
                                    </li>
                                    <li>
                                        <h5>Smart Plug 6 <span id="kwh-component-value-1" className="value-component"></span></h5>
                                    </li>
                                    <li>
                                        <div className="progress-bar-section">
                                            <div className="background-bar"></div>
                                            <div className="progress-bar" style={{ "width": `${data6.length > 0 ? data6[longData6 - 2].total_electricity * 100 : 0}px` }}></div>
                                        </div>
                                    </li>
                                    <li>
                                        <h5>Smart Plug 7 <span id="kwh-component-value-1" className="value-component"></span></h5>
                                    </li>
                                    <li>
                                        <div className="progress-bar-section">
                                            <div className="background-bar"></div>
                                            <div className="progress-bar" style={{ "width": `${data7.length > 0 ? data7[longData7 - 2].total_electricity * 100 : 0}px` }}></div>
                                        </div>
                                    </li>
                                    <li>
                                        <h5>Smart Plug 8 <span id="kwh-component-value-1" className="value-component"></span></h5>
                                    </li>
                                    <li>
                                        <div className="progress-bar-section">
                                            <div className="background-bar"></div>
                                            <div className="progress-bar" style={{ "width": `${data8.length > 0 ? data8[longData8 - 2].total_electricity * 100 : 0}px` }}></div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="cost panel-container-item" id="cost">
                        <div className="panel-section">
                            <div className="panel-section-title">
                                <h5>Cost Electricity</h5>
                            </div>
                            <div className="panel-section-data">
                                <ul>
                                    <li>
                                        <h5>Smart Plug 1 <span id="cost-component-value-1" className="value-component" /></h5>
                                    </li>
                                    <li>
                                        <div className="progress-bar-section">
                                            <div className="background-bar"></div>
                                            <div className="progress-bar" style={{ "width": `${data1.length > 0 ? data1[longData1 - 1].total_cost / 5000 : 0}%` }}></div>
                                        </div>
                                    </li>
                                    <li>
                                        <h5>Smart Plug 2 <span id="cost-component-value-2" className="value-component" /></h5>
                                    </li>
                                    <li>
                                        <div className="progress-bar-section">
                                            <div className="background-bar"></div>
                                            <div className="progress-bar" style={{ "width": `${data2.length > 0 ? data2[longData2 - 1].total_cost / 5000 : 0}%` }}></div>
                                        </div>
                                    </li>
                                    <li>
                                        <h5>Smart Plug 3 <span id="cost-component-value-3" className="value-component" /></h5>
                                    </li>
                                    <li>
                                        <div className="progress-bar-section">
                                            <div className="background-bar"></div>
                                            <div className="progress-bar" style={{ "width": `${data3.length > 0 ? data3[longData3 - 1].total_cost / 5000 : 0}%` }}></div>
                                        </div>
                                    </li>
                                    <li>
                                        <h5>Smart Plug 4 <span id="cost-component-value-4" className="value-component" /></h5>
                                    </li>
                                    <li>
                                        <div className="progress-bar-section">
                                            <div className="background-bar"></div>
                                            <div className="progress-bar" style={{ "width": `${data4.length > 0 ? data4[longData4 - 1].total_cost / 5000 : 0}%` }}></div>
                                        </div>
                                    </li>
                                    <li>
                                        <h5>Smart Plug 5 <span id="cost-component-value-5" className="value-component" /></h5>
                                    </li>
                                    <li>
                                        <div className="progress-bar-section">
                                            <div className="background-bar"></div>
                                            <div className="progress-bar" style={{ "width": `${data5.length > 0 ? data5[longData5 - 1].total_cost / 5000 : 0}%` }}></div>
                                        </div>
                                    </li>
                                    <li>
                                        <h5>Smart Plug 6 <span id="cost-component-value-6" className="value-component" /></h5>
                                    </li>
                                    <li>
                                        <div className="progress-bar-section">
                                            <div className="background-bar"></div>
                                            <div className="progress-bar" style={{ "width": `${data6.length > 0 ? data6[longData6 - 1].total_cost / 5000 : 0}%` }}></div>
                                        </div>
                                    </li>
                                    <li>
                                        <h5>Smart Plug 7 <span id="cost-component-value-7" className="value-component" /></h5>
                                    </li>
                                    <li>
                                        <div className="progress-bar-section">
                                            <div className="background-bar"></div>
                                            <div className="progress-bar" style={{ "width": `${data7.length > 0 ? data7[longData7 - 1].total_cost / 5000 : 0}%` }}></div>
                                        </div>
                                    </li>
                                    <li>
                                        <h5>Smart Plug 8 <span id="cost-component-value-8" className="value-component" /></h5>
                                    </li>
                                    <li>
                                        <div className="progress-bar-section">
                                            <div className="background-bar"></div>
                                            <div className="progress-bar" style={{ "width": `${data8.length > 0 ? data8[longData8 - 1].total_cost / 5000 : 0}%` }}></div>
                                        </div>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="carbon panel-container-item" id="carbon">
                        <div className="panel-section">
                            <div className="panel-section-title">
                                <h5>Carbon Footprint</h5>
                            </div>
                            <div className="panel-section-data">
                                <ul>
                                    <li>
                                        <h5>Smart Plug 1 <span id="carbon-component-value-1" className="value-component" /></h5>
                                    </li>
                                    <li>
                                        <div className="progress-bar-section">
                                            <div className="background-bar"></div>
                                            <div className="progress-bar" style={{ "width": `${data1.length > 0 ? data1[longData1 - 1].carbon_emission : 0}%` }}></div>
                                        </div>
                                    </li>
                                    <li>
                                        <h5>Smart Plug 2 <span id="carbon-component-value-2" className="value-component" /></h5>
                                    </li>
                                    <li>
                                        <div className="progress-bar-section">
                                            <div className="background-bar"></div>
                                            <div className="progress-bar" style={{ "width": `${data2.length > 0 ? data2[longData2 - 1].carbon_emission : 0}%` }}></div>
                                        </div>
                                    </li>
                                    <li>
                                        <h5>Smart Plug 3 <span id="carbon-component-value-3" className="value-component" /></h5>
                                    </li>
                                    <li>
                                        <div className="progress-bar-section">
                                            <div className="background-bar"></div>
                                            <div className="progress-bar" style={{ "width": `${data3.length > 0 ? data3[longData3 - 1].carbon_emission : 0}%` }}></div>
                                        </div>
                                    </li>
                                    <li>
                                        <h5>Smart Plug 4 <span id="carbon-component-value-4" className="value-component" /></h5>
                                    </li>
                                    <li>
                                        <div className="progress-bar-section">
                                            <div className="background-bar"></div>
                                            <div className="progress-bar" style={{ "width": `${data4.length > 0 ? data4[longData4 - 1].carbon_emission : 0}%` }}></div>
                                        </div>
                                    </li>
                                    <li>
                                        <h5>Smart Plug 5 <span id="carbon-component-value-5" className="value-component" /></h5>
                                    </li>
                                    <li>
                                        <div className="progress-bar-section">
                                            <div className="background-bar"></div>
                                            <div className="progress-bar" style={{ "width": `${data5.length > 0 ? data5[longData5 - 1].carbon_emission : 0}%` }}></div>
                                        </div>
                                    </li>
                                    <li>
                                        <h5>Smart Plug 6 <span id="carbon-component-value-6" className="value-component" /></h5>
                                    </li>
                                    <li>
                                        <div className="progress-bar-section">
                                            <div className="background-bar"></div>
                                            <div className="progress-bar" style={{ "width": `${data6.length > 0 ? data6[longData6 - 1].carbon_emission : 0}%` }}></div>
                                        </div>
                                    </li>
                                    <li>
                                        <h5>Smart Plug 7 <span id="carbon-component-value-7" className="value-component" /></h5>
                                    </li>
                                    <li>
                                        <div className="progress-bar-section">
                                            <div className="background-bar"></div>
                                            <div className="progress-bar" style={{ "width": `${data7.length > 0 ? data7[longData7 - 1].carbon_emission : 0}%` }}></div>
                                        </div>
                                    </li>
                                    <li>
                                        <h5>Smart Plug 8 <span id="carbon-component-value-8" className="value-component" /></h5>
                                    </li>
                                    <li>
                                        <div className="progress-bar-section">
                                            <div className="background-bar"></div>
                                            <div className="progress-bar" style={{ "width": `${data8.length > 0 ? data8[longData8 - 1].carbon_emission : 0}%` }}></div>
                                        </div>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="status panel-container-item" id="status">
                        <div className="panel-section">
                            <div className="panel-section-title">
                                <h5>
                                    Data Communication Status
                                </h5>
                            </div>
                            <div className="panel-section-data">
                                <ul className="data_status">
                                    <li>
                                        <h5>Smartplug 1&emsp;: <span className="status_connection" id="status-1"></span></h5>
                                        <br />
                                    </li>
                                    <li>
                                        <h5>Smartplug 2&emsp;: <span className="status_connection" id="status-2"></span></h5>
                                        <br />
                                    </li>
                                    <li>
                                        <h5>Smartplug 3&emsp;: <span className="status_connection" id="status-3"></span></h5>
                                        <br />
                                    </li>
                                    <li>
                                        <h5>Smartplug 4&emsp;: <span className="status_connection" id="status-4"></span></h5>
                                        <br />
                                    </li>
                                    <li>
                                        <h5>Smartplug 5&emsp;:<span className="status_connection" id="status-5"></span></h5>
                                        <br />
                                    </li>
                                    <li>
                                        <h5>Smartplug 6&emsp;:<span className="status_connection" id="status-6"></span></h5>
                                        <br />
                                    </li>
                                    <li>
                                        <h5>Smartplug 7&emsp;:<span className="status_connection" id="status-7"></span></h5>
                                        <br />
                                    </li>
                                    <li>
                                        <h5>Smartplug 8&emsp;:<span className="status_connection" id="status-8"></span></h5>
                                        <br />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="title-chart-section">
                    <div className="battery-options">
                        <select className="batt-toggle" onChange={handleChange}>
                            <option value="1" selected data-show=".Batt-1">Smartplug - 1</option>
                            <option value="2" data-show=".Batt-2">Smartplug - 2</option>
                            <option value="3" data-show=".Batt-3">Smartplug - 3</option>
                            <option value="4" data-show=".Batt-4">Smartplug - 4</option>
                            <option value="5" data-show=".Batt-5">Smartplug - 5</option>
                            <option value="6" data-show=".Batt-6">Smartplug - 6</option>
                            <option value="7" data-show=".Batt-7">Smartplug - 7</option>
                            <option value="8" data-show=".Batt-8">Smartplug - 8</option>
                        </select>
                    </div>
                </div>
                <div className="chart-section">
                    <div className={`Batt-1 ${chartHide == 1 ? null : "hide"}`} id="responsecontainer1">
                        <Line options={options} data={data} />;
                    </div>
                    <div className="Batt-2 hide" id="responsecontainer2"></div>
                    <div className="Batt-3 hide" id="responsecontainer3"></div>
                    <div className="Batt-4 hide" id="responsecontainer4"></div>
                    <div className="Batt-5 hide" id="responsecontainer5"></div>
                    <div className="Batt-6 hide" id="responsecontainer6"></div>
                    <div className="Batt-7 hide" id="responsecontainer7"></div>
                    <div className="Batt-8 hide" id="responsecontainer8"></div>
                </div>
            </div>
        </Container>
    )
}

export default BatteryStatus
