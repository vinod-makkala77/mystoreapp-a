  
  
  import './Products.css'
  export default function Prod(){
    const products=[{id:1,name:"Product1",price:1000},
        {id:2,name:"Product2",price:2000},
        {id:3,name:"Product3",price:3000},
        {id:4,name:"Product4",price:4000},
        {id:5,name:"Product5",price:4000},
        {id:6,name:"Product6",price:4000}];

  
        return(
        <div>
        <div>Products List</div>
        <hr/>
        <div className="prodcss">
            {products.map((value,index)=>(
                <div className='prodcss1' key={index}>
                <h3>{value.name}</h3>
                <h4>{value.price}</h4>
                <button>Add Cart</button>
                </div>
            ))}
        </div>
        <div><h3>@Copy Right Reserverd!</h3></div>
        </div>
    );

  }
  