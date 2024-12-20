const Firstcomp = ()=>{
    let a = 10
    let name = 'jungkook'
    const add = ()=>{
        console.log("addition in js "+(10+20));
        
    }

    let arr = [10,20,30,40,50]
    let dis = 
        arr.map((i)=>{
            return(
                <li>{i}</li>
            )
        })
    
    return(
        <div>
            <h3>First component created by me..</h3>
            <h4>A is - {a}</h4>
            <h4>Name is - {name}</h4>
            <h4>Addintion  is - {3+6}</h4>
            <button onClick={add}>Add</button>
            <ul>
                {
                dis
                /* 
                    arr.map((i)=>{
                        return(
                            <li>{i}</li>
                        )
                    })
                 */
                }
            </ul>
        </div>
    )
}
export default Firstcomp