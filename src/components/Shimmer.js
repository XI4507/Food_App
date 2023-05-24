const Shimmer=()=>{
    return(
        <>
        <div className="m-2">
            <input type="text" className="border p-1 focus:border-orange-400"/>
            <button className="search-btn px-2 py-1 ml-2 bg-orange-400 rounded-lg text-white">search</button>
        </div>
        <div className="card border w-72 shadow-lg h-80 p-1 m-2">
            {
                Array(15).fill("").map((val,i)=>{
                    return <div className="shimmerCard" key={i}></div>
                })
            }
        </div></>
        
    )
}

export default Shimmer;