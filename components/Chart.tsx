"use client";

import { AreaChart, Card, Text, Title } from "@tremor/react";

const data = [
  {
    Month: "Jan 21",
    Sales: 2890,
    Profit: 2400,
  },
  {
    Month: "Feb 21",
    Sales: 1890,
    Profit: 1398,
  },
  {
    Month: "Mar 21",
    Sales: 3890,
    Profit: 2980,
  },
];

export default function Chart() {
  return (
    <Card className='mt-8'>
      <Title>Performance</Title>
      <Text>Comaprison between sales/profit</Text>
      <AreaChart className='mt-4 h-80'
      data={data}
      categories={['Sales', 'Profit']}
      index={'Month'}      
      colors={['indigo', 'fuchsia']}
      valueFormatter={(number: number) => {
        return `$${Intl.NumberFormat('us').format(number).toString()}`;
      }}
      yAxisWidth={60}
      />
    </Card>
  );
}
