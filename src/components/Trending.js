import React, { useState, useEffect } from 'react';
import { fetchTrendingPerson } from "../leverageAPI/Api";

function Trending() {
    const [trendingPerson, setTrendingPerson] = useState([]);
    useEffect(() => {
        const fetchAPI = async () => {
            setTrendingPerson(await fetchTrendingPerson());
        };
        fetchAPI();
    }, []);


    const trendPerson = trendingPerson.slice(0, 4).map((item, index) => {
        return (
            <div className="col-md-3 col-sm-6">
                <img className="image-fluid rounded-circle"
                    src={item.profileImg}
                    alt={item.name}
                >
                </img>
                <p className="font-weight-bold text-center">{item.name}</p>
                <p className="font-weight-light text-center">
                    Trending for {item.known}
                </p>
            </div>
        )
    })

    return (
        <div>
            <div className="row mt-3">
                <div className="col">
                    <p className="font-weight-bold">
                        Trending Person of This Week
                   </p>
                </div>
            </div>
            <div className="row mt-3">{trendPerson}
            </div>
        </div>
    )

}

export default Trending;