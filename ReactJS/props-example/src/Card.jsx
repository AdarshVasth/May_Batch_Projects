function Card({ count, setCount, displayCount }) {
    return (
        <div className="card">
            <h2>Count</h2>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>+</button>
            <button onClick={() => displayCount()}>Display Count</button>
        </div>
    );
}

export default Card;