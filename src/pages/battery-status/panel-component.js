function PanelComponent(props) {
    let data1 = []
    let data2 = []
    let data3 = []
    let data4 = []
    let data5 = []
    let data6 = []
    let data7 = []
    let data8 = []

    data1 = props.data1
    data2 = props.data2
    data3 = props.data3
    data4 = props.data4
    data5 = props.data5
    data6 = props.data6
    data7 = props.data7
    data8 = props.data8

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

    return (
        <>
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
        </>
    )
}

function statusChanger(voltage, current, tuya_Number) {
    if (document.getElementById("status-1")) {
        if (voltage > 0) {
            if (current > 0) {
                let theNumber = `status-${tuya_Number}`
                document.getElementById(theNumber).innerHTML = "Online"
                document.getElementById(theNumber).style.color = "green"
            } else {
                let theNumber = `status-${tuya_Number}`
                console.log("AAAA", document.getElementById(theNumber).innerHTML);
                document.getElementById(theNumber).innerHTML = "Idle"
                document.getElementById(theNumber).style.color = "rgb(225, 214, 0)"

            }
        } else {
            let theNumber = `status-${tuya_Number}`
            document.getElementById(theNumber).innerHTML = "Offline"
            document.getElementById(theNumber).style.color = "blue"
        }
    }
}

export default PanelComponent