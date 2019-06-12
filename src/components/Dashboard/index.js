import React from 'react'

import Table from '../common/Table';
import Filter from '../common/Filter';

export default function Dashboard() {
    return (
        <div className="dashboard">
            <Filter />
            <Table />
        </div>
    )
}
