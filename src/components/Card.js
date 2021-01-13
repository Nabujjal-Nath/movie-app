function Card(props) {
    return (
        <main>
            <div className="cards">
                <div className="card">
                    <img src={props.imgsrc} alt="myPic" className='card__img' />
                    <div className="card__info">
                        <span className="card__category"></span>
                        <h3 className="card__title">{props.title}</h3>
                        <a href="/" target="_blank">
                            <button>Watch Now</button>
                        </a>
                    </div>
                </div>
            </div>
        </main>
    )
}
export default Card;