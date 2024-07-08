import React from "react";

const NewsItems=(props)=>  {
 
    let { title, description, imageUrl, newsUrl, author, date,source } = props;
    return (
      <div className="my-3">
        <div className="card" style={{ width: "18rem" }}>
         <div style={{display:'flex',
          justifyContent:'flex-end',
          position: 'absolute',
          right:'0'
         }}>
          
         <span class=" badge rounded-pill bg-danger">{source}
           </span>
          </div> 

          <img src={!imageUrl? "https://www.floridatoday.com/gcdn/authoring/authoring-images/2024/07/03/PBRE/74288872007-crb-070324-spacex-8.jpg?crop=3237,1821,x0,y194&width=3200&height=1801&format=pjpg&auto=webp": imageUrl}
          className="card-img-top" alt="..."/>
          <div classNmae ="card-body">
          <h5 className="card-title"> {title} 
          </h5>
          <p className="card-text">{description}...</p>
          <p className="card-text"><small className="text-muted"> By{!author ? "Unknown" : author} on {new Date(date).toGMTString()}
          </small>
          </p>
          <a href={newsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            Read More
          </a>
        </div>
      </div>
      </div>
    );
  
}

export default NewsItems;

// in this hmne kya kiya ki agr author jo hai null hai toh use unknown dedo and agr vo null nhi hai toh jo uska name hai vahi use provide krva do
// now same now when it comes about date toh
// phle date alg thi ab m date is format m le aayi kinda ki new Date jo hai vo is format m change krliya GMT format m
// toh like new Date aaygi meri gmt m convert krke
