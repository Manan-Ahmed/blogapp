"use client"

export default function Cart(imgURL:any,mark:string){
  return(
    <>
    <div className="card bg-base-100 w-96 shadow-xl">
  <figure className="px-10 pt-10">
    {/* <img
      src={imgURL}
      alt="Shoes"
      className="rounded-xl" /> */}
  </figure>
  <div className="card-body items-center text-center">
    <p>{mark}</p>
    <div className="card-actions">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
</>
  )
}