import "./ShimmerStyle.css";

const ShimmerCard = () => {
    const shimmerCardArray = Array.from({ length: 10 }, (_, index) => (
        <div className="shimmer" key={index}>
            <div className="shimmer-card">
                <div className="img"></div>
                <div className="card-info">
                    <div className="info-shm name"></div>
                    <div className="info-shm cuisines"></div>
                    <div className="info-shm rating"></div>
                </div>
            </div>
        </div>
    ));

    return <div className="shimmer">{shimmerCardArray}</div>;
};

export default ShimmerCard;
