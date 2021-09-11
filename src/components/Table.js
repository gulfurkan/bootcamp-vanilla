import React from 'react'
import data from '../constants/data.js'
export default function Table() {
    return (
        <div>
            <h2>Currencies</h2>

            <table>
                <tr>
                    <th>Döviz Cinsi</th>
                    <th>Alış(TL)</th>
                    <th>Satış(TL)</th>
                    <th>Fark(%)</th>
                </tr>
                {data.currencies.map((item) => {
                    return (
                        <>
                            <tr>
                                <th>{item.exchangeType}</th>
                                <th>{item.buy}</th>
                                <th>{item.sell}</th>
                                <th>{item.diff}</th>
                            </tr>
                        </>
                    );
                })}
            </table>
        </div>
    )
}
