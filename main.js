import {Column} from '@antv/g2plot';
// 也可以在项目中直接使用 lodash
import {each, groupBy} from '@antv/util';

import {Heatmap} from '@antv/g2plot';

fetch('https://gw.alipayobjects.com/os/bmw-prod/68d3f380-089e-4683-ab9e-4493200198f9.json')
    .then((res) => res.json())
    .then((data) => {
        const data1 = [

            {
                "name": "Monday",
                "value": 40,
                "country": "2-2 shift"
            },
            {
                "name": "Tuesday",
                "value": 90,
                "country": "2-2 shift"
            },
            {
                "name": "Wednesday",
                "value": 24,
                "country": "2-2 shift"
            },
            {
                "name": "Thursday",
                "value": 69,
                "country": "2-2 shift"
            },
            {
                "name": "Friday",
                "value": 97,
                "country": "2-2 shift"
            },
            {
                "name": "Satursday",
                "value": 70,
                "country": "2-2 shift"
            },
            {
                "name": "Sunday",
                "value": 49,
                "country": "2-2 shift"
            },


            {
                "name": "Monday",
                "value": 72,
                "country": "2-1 shift"
            },
            {
                "name": "Tuesday",
                "value": 47,
                "country": "2-1 shift"
            },
            {
                "name": "Wednesday",
                "value": 30,
                "country": "2-1 shift"
            },
            {
                "name": "Thursday",
                "value": 51,
                "country": "2-1 shift"
            },
            {
                "name": "Friday",
                "value": 23,
                "country": "2-1 shift"
            },
            {
                "name": "Satursday",
                "value": 63,
                "country": "2-1 shift"
            },
            {
                "name": "Sunday",
                "value": 30,
                "country": "2-1 shift"
            },


            {
                "name": "Monday",
                "value": 83,
                "country": "1-2 shift"
            },
            {
                "name": "Tuesday",
                "value": 6,
                "country": "1-2 shift"
            },
            {
                "name": "Wednesday",
                "value": 17,
                "country": "1-2 shift"
            },
            {
                "name": "Thursday",
                "value": 40,
                "country": "1-2 shift"
            },
            {
                "name": "Friday",
                "value": 61,
                "country": "1-2 shift"
            },
            {
                "name": "Satursday",
                "value": 72,
                "country": "1-2 shift"
            },
            {
                "name": "Sunday",
                "value": 61,
                "country": "1-2 shift"
            },


            {
                "name": "Monday",
                "value": 15,
                "country": "1-1 shift"
            },
            {
                "name": "Tuesday",
                "value": 34,
                "country": "1-1 shift"
            },
            {
                "name": "Wednesday",
                "value": 26,
                "country": "1-1 shift"
            },
            {
                "name": "Thursday",
                "value": 80,
                "country": "1-1 shift"
            },
            {
                "name": "Friday",
                "value": 100,
                "country": "1-1 shift"
            },
            {
                "name": "Satursday",
                "value": 97,
                "country": "1-1 shift"
            },
            {
                "name": "Sunday",
                "value": 34,
                "country": "1-1 shift"
            }

        ];
        const heatmapPlot = new Heatmap(document.getElementById('container1'), {
            data: data1,
            xField: 'name',
            yField: 'country',
            colorField: 'value',
            shape: 'circle',
            sizeRatio: 0.5,
            color: ['#0d5fbb', '#7eadfc', '#fd8b6f', '#aa3523'],
            label: {
                style: {
                    fill: '#fff',
                    shadowBlur: 2,
                    shadowColor: 'rgba(0, 0, 0, .45)',
                },
            },
        });
        heatmapPlot.render();
    });

// import { DualAxes } from '@antv/g2plot';
//
// const uvBillData = [
//     { time: '2019-03', value: 350, type: 'uv' },
//     { time: '2019-04', value: 900, type: 'uv' },
//     { time: '2019-05', value: 300, type: 'uv' },
//     { time: '2019-06', value: 450, type: 'uv' },
//     { time: '2019-07', value: 470, type: 'uv' },
//     { time: '2019-03', value: 220, type: 'bill' },
//     { time: '2019-04', value: 300, type: 'bill' },
//     { time: '2019-05', value: 250, type: 'bill' },
//     { time: '2019-06', value: 220, type: 'bill' },
//     { time: '2019-07', value: 362, type: 'bill' },
// ];
//
// const transformData = [
//     { time: '2019-03', count: 800 },
//     { time: '2019-04', count: 600 },
//     { time: '2019-05', count: 400 },
//     { time: '2019-06', count: 380 },
//     { time: '2019-07', count: 220 },
// ];
//
// const dualAxes = new DualAxes('container2', {
//     data: [uvBillData, transformData],
//     xField: 'time',
//     yField: ['value', 'count'],
//     geometryOptions: [
//         {
//             geometry: 'column',
//             isStack: true,
//             isPercent: true,
//             seriesField: 'type',
//         },
//         {
//             geometry: 'line',
//         },
//     ],
// });
//
// dualAxes.render();

fetch('https://gw.alipayobjects.com/os/antfincdn/8elHX%26irfq/stack-column-data.json')
    .then((data) => data.json())
    .then((data) => {
        const data1 = [
            {
                "year": "1-1 shift",
                "value": 3,
                "type": "new"
            },
            {
                "year": "1-2 shift",
                "value": 4,
                "type": "new"
            },
            {
                "year": "2-1 shift",
                "value": 3.5,
                "type": "new"
            },
            {
                "year": "2-2 shift",
                "value": 5,
                "type": "new"
            },
            {
                "year": "1-1 shift",
                "value": 3,
                "type": "Old"
            },
            {
                "year": "1-2 shift",
                "value": 4,
                "type": "Old"
            },
            {
                "year": "2-1 shift",
                "value": 3.5,
                "type": "Old"
            },
            {
                "year": "2-2 shift",
                "value": 5,
                "type": "Old"
            }

        ];
        const annotations = [];
        each(groupBy(data1, 'year'), (values, k) => {
            const value = values.reduce((a, b) => a + b.value, 0);
            annotations.push({
                type: 'text',
                position: [k, value],
                content: `${value}`,
                style: {textAlign: 'center', fontSize: 14, fill: 'rgba(0,0,0,0.85)'},
                offsetY: -10,
            });
        });

        const plot = new Column('container2', {
            data: data1,
            isStack: true,
            xField: 'year',
            yField: 'value',
            seriesField: 'type',
            label: {
                // 可手动配置 label 数据标签位置
                position: 'middle', // 'top', 'bottom', 'middle'
                // 可配置附加的布局方法
                layout: [
                    // 柱形图数据标签位置自动调整
                    {type: 'interval-adjust-position'},
                    // 数据标签防遮挡
                    {type: 'interval-hide-overlap'},
                    // 数据标签文颜色自动调整
                    {type: 'adjust-color'},
                ],
            },
            // 使用 annotation （图形标注）来展示：总数的 label
            annotations,
        });

        plot.render();
    });

const data3 = [
    {
        name: 'layup',
        月份: '1-1 shift',
        月均降雨量: 18.9,
    },
    {
        name: 'layup',
        月份: '1-2 shift',
        月均降雨量: 28.8,
    },
    {
        name: 'layup',
        月份: '2-1 shift',
        月均降雨量: 39.3,
    },
    {
        name: 'layup',
        月份: '2-2 shift',
        月均降雨量: 81.4,
    },

    {
        name: 'soldering',
        月份: '1-1 shift',
        月均降雨量: 12.4,
    },
    {
        name: 'soldering',
        月份: '1-2 shift',
        月均降雨量: 23.2,
    },
    {
        name: 'soldering',
        月份: '2-1 shift',
        月均降雨量: 34.5,
    },
    {
        name: 'soldering',
        月份: '2-2 shift',
        月均降雨量: 99.7,
    },
    {
        name: 'Framing',
        月份: '1-1 shift',
        月均降雨量: 18.9,
    },
    {
        name: 'Framing',
        月份: '1-2 shift',
        月均降雨量: 28.8,
    },
    {
        name: 'Framing',
        月份: '2-1 shift',
        月均降雨量: 39.3,
    },
    {
        name: 'Framing',
        月份: '2-2 shift',
        月均降雨量: 81.4,
    },

    {
        name: 'packing',
        月份: '1-1 shift',
        月均降雨量: 12.4,
    },
    {
        name: 'packing',
        月份: '1-2 shift',
        月均降雨量: 23.2,
    },
    {
        name: 'packing',
        月份: '2-1 shift',
        月均降雨量: 34.5,
    },
    {
        name: 'packing',
        月份: '2-2 shift',
        月均降雨量: 99.7,
    }
];

const stackedColumnPlot3 = new Column('container3', {
    data: data3,
    isGroup: true,
    xField: '月份',
    yField: '月均降雨量',
    seriesField: 'name',
    /** 设置颜色 */
    //color: ['#1ca9e6', '#f88c24'],
    /** 设置间距 */
    // marginRatio: 0.1,
    label: {
        // 可手动配置 label 数据标签位置
        position: 'middle', // 'top', 'middle', 'bottom'
        // 可配置附加的布局方法
        layout: [
            // 柱形图数据标签位置自动调整
            {type: 'interval-adjust-position'},
            // 数据标签防遮挡
            {type: 'interval-hide-overlap'},
            // 数据标签文颜色自动调整
            {type: 'adjust-color'},
        ],
    },
});

stackedColumnPlot3.render();

const data4 = [
    {
        name: 'layup',
        月份: '1-1 shift',
        月均降雨量: 18.9,
    },
    {
        name: 'layup',
        月份: '1-2 shift',
        月均降雨量: 28.8,
    },
    {
        name: 'layup',
        月份: '2-1 shift',
        月均降雨量: 39.3,
    },
    {
        name: 'layup',
        月份: '2-2 shift',
        月均降雨量: 81.4,
    },

    {
        name: 'soldering',
        月份: '1-1 shift',
        月均降雨量: 12.4,
    },
    {
        name: 'soldering',
        月份: '1-2 shift',
        月均降雨量: 23.2,
    },
    {
        name: 'soldering',
        月份: '2-1 shift',
        月均降雨量: 34.5,
    },
    {
        name: 'soldering',
        月份: '2-2 shift',
        月均降雨量: 99.7,
    },
    {
        name: 'Framing',
        月份: '1-1 shift',
        月均降雨量: 18.9,
    },
    {
        name: 'Framing',
        月份: '1-2 shift',
        月均降雨量: 28.8,
    },
    {
        name: 'Framing',
        月份: '2-1 shift',
        月均降雨量: 39.3,
    },
    {
        name: 'Framing',
        月份: '2-2 shift',
        月均降雨量: 81.4,
    },

    {
        name: 'packing',
        月份: '1-1 shift',
        月均降雨量: 12.4,
    },
    {
        name: 'packing',
        月份: '1-2 shift',
        月均降雨量: 23.2,
    },
    {
        name: 'packing',
        月份: '2-1 shift',
        月均降雨量: 34.5,
    },
    {
        name: 'packing',
        月份: '2-2 shift',
        月均降雨量: 99.7,
    }
];

const stackedColumnPlot4 = new Column('container4', {
    data: data4,
    isGroup: true,
    xField: '月份',
    yField: '月均降雨量',
    seriesField: 'name',
    /** 设置颜色 */
    //color: ['#1ca9e6', '#f88c24'],
    /** 设置间距 */
    // marginRatio: 0.1,
    label: {
        // 可手动配置 label 数据标签位置
        position: 'middle', // 'top', 'middle', 'bottom'
        // 可配置附加的布局方法
        layout: [
            // 柱形图数据标签位置自动调整
            {type: 'interval-adjust-position'},
            // 数据标签防遮挡
            {type: 'interval-hide-overlap'},
            // 数据标签文颜色自动调整
            {type: 'adjust-color'},
        ],
    },
});

stackedColumnPlot4.render();