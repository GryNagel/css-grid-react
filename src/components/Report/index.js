import React from 'react'
import './styles.scss'

import Table from '../common/Table'
import ReportHeader from './ReportHeader'

export default function Report() {
    return (
        <div className="report">
            <ReportHeader/>
            <div className="site">
                <h3 className="siteHeader">Site 1</h3>
                <Table />
                <Table />
            </div>
            <div className="site">
                <h3 className="siteHeader">Site 2</h3>
                <Table />
                <Table />
            </div>
        </div>
    )
}
