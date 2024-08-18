import React from 'react'

export default function Card() {
    return (
        <div className="card" style={{ "width": "18rem" }}>
            <img src="https://img.freepik.com/free-vector/chain-link-elements-set_1284-45763.jpg?size=626&ext=jpg&ga=GA1.1.1914436210.1723966502&semt=ais_hybrid" className="card-img-top" alt="this is an image" />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example </p>
                <div className='container'>
                    <select className="m-2 h-100 bg-success text-black rounded">
                        {Array.from(Array(6), (e, i) => {
                            return (
                                <option key={i + 1} value={i + 1}>{i + 1}</option>
                            )
                        })}
                    </select>
                    <select className="m-2 h-100 bg-success text-black rounded">
                        <option value="1">full</option>
                        <option value="2">hulf</option>
                    </select>
                    total: 100
                </div>
            </div>
        </div>
    )
}
