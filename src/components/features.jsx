import React from "react";


export const Features = (props) => {
  return (
    <div id="features" className="text-center">
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <br /><br />
          <h2>Our Produce</h2>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className="col-xs-6 col-md-4">
                  {" "}
                  <img style={{borderRadius:"150px"}} src={d.img} alt="" />
                  <h3>{d.title}</h3>
                  <p>{d.text}</p>
                  
                </div>
                
              ))
            : "Loading..."}

          
        </div>

        
       
      </div>
      <div>
      <br />
      <a href="/"><button type="button" class="btn btn-success btn-lg">View All Produce</button></a>
      <br /><br /><br />
      </div>
      
    </div>
    
  );
};
