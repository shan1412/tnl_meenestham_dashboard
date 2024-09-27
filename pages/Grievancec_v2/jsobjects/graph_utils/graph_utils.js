export default {
    myVar1: [],
    myVar2: {},

    generateGraph(graphType, title, color, data) {
        console.log('DATAAAAA', data);

        // Check for empty data and return "No Data" message if required
        if (!data || data.length === 0) {
            return {
                title: {
                    text: 'No Data Available',
                    left: 'center',
                    top: 'center',
                    textStyle: {
                        fontSize: 18,
                        fontWeight: 'bold',
                        color: '#FF0000'
                    }
                },
                tooltip: {
                    show: false // Hide tooltip if there's no data
                }
            };
        }

        let series = [];
        let xAxis = {};
        let yAxis = {};
        let grid = {
            left: '5%',
            right: '5%',
            top: '20%',
            bottom: '10%'
        };
        let tooltip = {};

        // Handle different chart types dynamically
        switch (graphType) {
            case 'pie':
            case 'donut':
                series = [{
                    type: 'pie',
                    radius: graphType === 'donut' ? ['30%', '50%'] : ['0%', '50%'],
                    data: data.map(item => ({
                        ...item,
                        itemStyle: {
                            opacity: item.name !== selectedGranularity ? 0.2 : 1
                        }
                    })),
                    label: {
                        show: true,
                        formatter: '{b}: {d}%'
                    },
                    emphasis: {
                        itemStyle: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }];
                tooltip = {
                    trigger: 'item',
                    formatter: '{b}: {c} ({d}%)'
                };
                break;

            case 'bar':
            case 'column':
                xAxis = {
                    type: graphType === 'column' ? 'category' : 'value',
                    data: data.map(item => item.name)
                };
                yAxis = {
                    type: graphType === 'column' ? 'value' : 'category'
                };
                series = [{
                    type: 'bar',
                    data: data.map(item => ({
                        value: item.value,
                        itemStyle: {
                            color: color,
                            opacity: 1
                        }
                    })),
                    label: {
                        show: true,
                        position: 'top',
                        formatter: '{c}'
                    }
                }];
                tooltip = {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow'
                    }
                };
                break;

            case 'line':
                xAxis = {
                    type: 'category',
                    data: data.map(item => item.date)
                };
                yAxis = {
                    type: 'value',
                    name: 'Value',
                    nameRotate: 90,
                    nameTextStyle: {
                        fontSize: 14,
                        padding: [0, 10, 10, 0]
                    }
                };
                series = [{
                    type: 'line',
                    data: data.map(item => item.value),
                    itemStyle: {
                        color: color
                    },
                    smooth: true,
                    label: {
                        show: true,
                        formatter: '{c}',
                        position: 'top'
                    }
                }];
                tooltip = {
                    trigger: 'axis',
                    formatter: '{b}: {c}'
                };
                break;

            default:
                return {
                    title: {
                        text: 'Invalid Graph Type',
                        left: 'center',
                        top: 'center',
                        textStyle: {
                            fontSize: 18,
                            fontWeight: 'bold',
                            color: '#FF0000'
                        }
                    },
                    tooltip: {
                        show: false // Hide tooltip if invalid graph type
                    }
                };
        }

        // Final chart configuration object
        return {
            title: {
                text: title,
                left: 'center',
                top: 'top',
                textStyle: {
                    fontSize: 18,
                    fontWeight: 'bold'
                }
            },
            grid: grid,
            xAxis: xAxis,
            yAxis: yAxis,
            series: series,
            tooltip: tooltip
        };
    },

    // Async function example
    async myFun2() {
        try {
            // Store value using async-await
            await storeValue('varName', 'hello world');
            console.log('Value stored successfully!');
        } catch (error) {
            console.error('Error storing value:', error);
        }
    }
};
