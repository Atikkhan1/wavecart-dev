'use client'
export default function Loading(p) {

  return (
    <div className={"containerBox bg-black" + p.className}>
        <style jsx>
    {`
    .containerBox {
       display:flex;
       background:black;
        height:100vh;
        width:100vw;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        padding: 10px;
      }
        
    .loader {
      margin: auto;
      border: 5px solid #EAF0F6;
      border-radius: 50%;
      border-top: 5px solid #00db00;
      width: 30px;
      height: 30px;
      animation: spinner 2s linear infinite;
      }
      
      @keyframes spinner {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
        }
        
        `}
  </style>
<div className="loader ">

</div>
        </div>
  )
}
