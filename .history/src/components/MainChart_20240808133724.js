import { XAxis, YAxis, Area, Tooltip, AreaChart } from 'recharts';
import { Button, ButtonGroup } from '@chakra-ui/react';

import React, { useState } from 'react'

import { rangeData } from '../data/exchange';

const MainChart = () => {
  const rangeData = [
    {
      "day": "2024-08-08",
      "price": [
        1400.48,
        1352.32
      ]
    },
    {
      "day": "2024-08-07",
      "price": [
        1396.21,
        1348.19
      ]
    },
    {
      "day": "2024-08-06",
      "price": [
        1384.41,
        1336.79
      ]
    },
    {
      "day": "2024-08-05",
      "price": [
        1396.82,
        1348.78
      ]
    },
    {
      "day": "2024-08-02",
      "price": [
        1389.8,
        1342
      ]
    },
    {
      "day": "2024-08-01",
      "price": [
        1404.25,
        1355.95
      ]
    },
    {
      "day": "2024-07-31",
      "price": [
        1408.83,
        1360.37
      ]
    },
    {
      "day": "2024-07-30",
      "price": [
        1406.18,
        1357.82
      ]
    },
    {
      "day": "2024-07-29",
      "price": [
        1409.64,
        1361.16
      ]
    },
    {
      "day": "2024-07-26",
      "price": [
        1409.64,
        1361.16
      ]
    },
    {
      "day": "2024-07-25",
      "price": [
        1409.33,
        1360.87
      ]
    },
    {
      "day": "2024-07-24",
      "price": [
        1409.33,
        1360.87
      ]
    },
    {
      "day": "2024-07-23",
      "price": [
        1412.9,
        1364.3
      ]
    },
    {
      "day": "2024-07-22",
      "price": [
        1410.86,
        1362.34
      ]
    },
    {
      "day": "2024-07-19",
      "price": [
        1404.04,
        1355.76
      ]
    },
    {
      "day": "2024-07-18",
      "price": [
        1405.67,
        1357.33
      ]
    },
    {
      "day": "2024-07-17",
      "price": [
        1410.25,
        1361.75
      ]
    },
    {
      "day": "2024-07-16",
      "price": [
        1406.08,
        1357.72
      ]
    },
    {
      "day": "2024-07-15",
      "price": [
        1400.38,
        1352.22
      ]
    },
    {
      "day": "2024-07-12",
      "price": [
        1404.25,
        1355.95
      ]
    },
    {
      "day": "2024-07-11",
      "price": [
        1409.84,
        1361.36
      ]
    },
    {
      "day": "2024-07-10",
      "price": [
        1407.6,
        1359.2
      ]
    },
    {
      "day": "2024-07-09",
      "price": [
        1403.53,
        1355.27
      ]
    },
    {
      "day": "2024-07-08",
      "price": [
        1403.13,
        1354.87
      ]
    },
    {
      "day": "2024-07-05",
      "price": [
        1406.08,
        1357.72
      ]
    },
    {
      "day": "2024-07-04",
      "price": [
        1413.71,
        1365.09
      ]
    },
    {
      "day": "2024-07-03",
      "price": [
        1411.67,
        1363.13
      ]
    },
    {
      "day": "2024-07-02",
      "price": [
        1404.96,
        1356.64
      ]
    },
    {
      "day": "2024-07-01",
      "price": [
        1406.59,
        1358.21
      ]
    }
  ]

  const [timeRange, setTimeRange] = useState('3M');

  const filterData = (range) => {
    switch (range) {
      case '1D':
        return rangeData.slice(0, 1);
      case '1M':
        return rangeData.slice(0, 30);
      case '3M':
        return rangeData.slice(0, 90);
      case '6M':
        return rangeData.slice(0, 180);
      case '1Y':
        return rangeData;
      default:
        return rangeData;
    }
  }
  const filtered_rangeData = filterData(timeRange);

  return (
    <div>
      <AreaChart
      width={730}
      height={350}
      data={filtered_rangeData}
      margin={{
        top: 20, right: 20, bottom: 20, left: 20,
      }}
    >
      <XAxis dataKey="day" />
      <YAxis domain={[1300, 1450]}/>
      <Area dataKey="price" stroke="#8884d8" fill="#8884d8" />
      <Tooltip />
    </AreaChart>
    <ButtonGroup variant="outline" spacing="6" mb="4">
        <Button onClick={() => setTimeRange('1D')}>1D</Button>
        <Button onClick={() => setTimeRange('1M')}>1M</Button>
        <Button onClick={() => setTimeRange('3M')}>3M</Button>
        <Button onClick={() => setTimeRange('6M')}>6M</Button>
        <Button onClick={() => setTimeRange('1Y')}>1Y</Button>
      </ButtonGroup>
    </div>

    

  )
}

export default MainChart