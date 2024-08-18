import React from 'react'

export default function Crousel() {
    return (
        <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{objectFit: 'contain !importarnt'}}>
            <div className="carousel-inner" id='carousel'>
                <div className='carousel-caption ' style={{zIndex:'10'}}>
                    <form className="d-flex">
                        <input className="form-control me-2 bg-dark text-white" type="search" placeholder="Search" aria-label="Search"/>
                            <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
                <div className="carousel-item active">
                    <img src="https://picsum.photos/200/80?burger" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src="https://picsum.photos/200/80?momos" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src="https://picsum.photos/200/80?pizza" className="d-block w-100" alt="..." />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>


    )
}
