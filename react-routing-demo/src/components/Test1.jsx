import { useContext } from 'react'
import { contextObj } from '../contexts/CounterStore'

function Test1() {
    const { counter, setCounter } = useContext(contextObj)

    console.log("Test1 rendered")
    return (
        <div className='bg-info p-5'>
            <h2>Test1</h2>
            <p className="fs-1">Counter: {counter}</p>
            <button className="btn btn-primary" onClick={() => setCounter(counter + 1)}>Change counter</button>
        </div>
    )
}

export default Test1