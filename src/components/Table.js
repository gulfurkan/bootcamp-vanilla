import React from 'react'
export default function Table(props) {
    return (
        <div>
            <h2>Currencies</h2>

            <table>
                <tr>
                {props.headers.map((item) => {
                    return (
                        <>
                         <th>{item}</th>
                        </>
                    );
                })}
                </tr>
                {props.data.currencies.map((item) => {
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