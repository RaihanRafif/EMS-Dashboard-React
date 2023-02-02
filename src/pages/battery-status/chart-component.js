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
import { useState } from 'react';
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
    maintainAspectRatio: false,
    plugins: {
        legend: {
            position: 'top',
        },
    },
};

function ChartComponent(props) {

    let allDatas = [props.data1,props.data2,props.data3,props.data4,props.data5,props.data6,props.data7,props.data8]

    let data1 = props.data1
    let data2 = props.data2
    let data3 = props.data3
    let data4 = props.data4
    let data5 = props.data5
    let data6 = props.data6
    let data7 = props.data7
    let data8 = props.data8

    const [chartHide, setChartHide] = useState("1")
    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

    const chartData1 = {
        labels,
        datasets: [
            {
                label: 'Data1 Voltage',
                data: data1.filter((value) => value.voltage != null).map((value) => value.voltage),
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
                label: 'Data1 Current',
                data: data1.filter((value) => value.current != null).map((value) => value.current),
                borderColor: 'blue',
                backgroundColor: 'blue',
            },
        ],
    };

    const chartData2 = {
        labels,
        datasets: [
            {
                label: 'Dataset 2',
                data: data2.filter((value) => value.voltage != null).map((value) => value.voltage),
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
        ],
    };

    const handleChange = (event) => {
        setChartHide(event.target.value);
    }


    return (
        <>
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
            <div className={`chart-section`} >
                <div className={`Batt-1 ${chartHide == 1 ? null : "hide"}`} id="responsecontainer1">
                    <Line options={options} data={chartData1} />;
                </div>
                <div className={`Batt-2 ${chartHide == 2 ? null : "hide"}`} id="responsecontainer2">
                    <Line options={options} data={chartData2} />;
                </div>
                <div className="Batt-3 hide" id="responsecontainer3"></div>
                <div className="Batt-4 hide" id="responsecontainer4"></div>
                <div className="Batt-5 hide" id="responsecontainer5"></div>
                <div className="Batt-6 hide" id="responsecontainer6"></div>
                <div className="Batt-7 hide" id="responsecontainer7"></div>
                <div className="Batt-8 hide" id="responsecontainer8"></div>
            </div>
        </>
    )
}

export default ChartComponent