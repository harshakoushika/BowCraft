import paper from '../assets/og.jpg'
import col from '../assets/col.jpg'
import re from '../assets/re.png'
import je from '../assets/je.png'
import { Link } from "react-router-dom"

export default function Learn(){

    return (

<div>

      <div className="card">
       <img className="card-image" src={paper} alt="ORIGAM" ></img>
       <h2 className="card-title">ORIGAMI</h2>
<p className="card-text"> Art of paper folding</p>
<button> <Link  to="/Explor" className="button-17">CLICK HERE</Link></button>


</div>


<div className="card">
       <img className="card-image" src={je} alt="Jewellery" ></img>
       <h2 className="card-title">JEWELLERY</h2>
<p className="card-text"> Learn to Create your jewellery With us</p>
<button> <Link  to="/Explor"  className="button-17">CLICK HERE</Link></button>

</div>
<div className="card">
       <img className="card-image" src={col} alt="clothing" ></img>
       <h2 className="card-title">CLOTHING </h2>
<p className="card-text"> Learn to design with us</p>

<button> <Link  to="/Explor"  className="button-17">CLICK HERE</Link></button>

      </div>





<div>
    
<div className="card">
       <img className="card-image" src={re} alt="ORIGAM" ></img>
       <h2 className="card-title">RECYCLE</h2>
<p className="card-text"> Learn to create recycle craft</p>
<button> <Link  to="/Explor"  className="button-17">CLICK HERE</Link></button>
</div>

</div>
</div>

    );
};
