import React, { PureComponent } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';




export const RadarChar = () => {



  const data = [
    {
      subject: 'Belleza',
      A: 120,
      B: 130,
      fullMark: 150,
    },
    {
      subject: 'Deporte',
      A: 98,
      B: 130,
      fullMark: 150,
    },
    {
      subject: 'Electronica',
      A: 86,
      B: 130,
      fullMark: 150,
    },
    {
      subject: 'Mascota',
      A: 99,
      B: 130,
      fullMark: 150,
    },
    // {
    //   subject: 'Physics',
    //   A: 85,
    //   B: 90,
    //   fullMark: 150,
    // },
    // {
    //   subject: 'History',
    //   A: 65,
    //   B: 85,
    //   fullMark: 150,
    // },
  ];




  return (
    <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis />
          <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.5} />
        </RadarChart>
      </ResponsiveContainer>
  )
}



