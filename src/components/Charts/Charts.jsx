import React from 'react';
import BarChartIncomeRatio from '../BarChartIncomeRatio';
import PieChartRatio from '../PieChartRatio';

const Charts = () => {
    return (
        <div className='flex gap-5'>
            <BarChartIncomeRatio/>
            <PieChartRatio/>
        </div>
    );
}

export default Charts;
