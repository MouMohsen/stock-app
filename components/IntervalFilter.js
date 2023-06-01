const IntervalFilter = ({increaseInterval}) => {
    return (
        <div>
            <button onClick={() => increaseInterval("1d")}>1D</button>
            <button onClick={() => increaseInterval("1wk")}>1W</button>
            <button onClick={() => increaseInterval("1mo")}>1MO</button>
        </div>
    )
}


export default IntervalFilter