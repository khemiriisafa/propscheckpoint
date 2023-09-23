import React from "react";
import "../App.css";
import CardItem from "./CardItem";
function PlayersList(props) {
  
  let data = [
    {
        name: "Robert lewandowski",
        team: "Barcelona",
        nationality: "Poland",
        jerseyNumber: 9,
        age: 35,
        url:"https://www.fcbarcelona.com/photo-resources/2022/11/02/85247947-27dc-488c-a6cb-d81c5e391559/09-ROBERT_LEWANDOWSKI.jpg?width=1200&height=750"
        
        
    },
    {
        name: "Marcelo",
        team: "Real Madrid",
        nationality: "Brazil",
        jerseyNumber: 12,
        age: 35,
        url:"https://www.sportphotogallery.com/content/images/cmsfiles/product/40191/41045-zoom.jpg"
    },
    {

        name: "leonel Messi",
        team: "Paris Saint-German",
        nationality: "Argentine",
        jerseyNumber:10 ,
        age:36 ,
        url: "https://pbs.twimg.com/media/E8GWtMiXIAAi6p5.jpg"
    },
    {
        name: "Ibrahim Konaté",
        team: "LiverPool",
        nationality: "france",
        jerseyNumber:5 ,
        age: 24,
        url: "https://static.independent.co.uk/2022/05/18/15/newFile-5.jpg"
    }
];


  return (
    <div className="Players-list">
      <h1>Best players in the world</h1>

      <div className="Players-container">
        {data.map((elt)=> (
          <CardItem
          name={elt.name}
          team={elt.team}
          nationality={elt.nationality}
          jerseyNumber={elt.jerseyNumber}
          age={elt.age}
          url={elt.url}
/>
        )  
        )
        }
      </div>
    </div>
  );
}

export default PlayersList;
