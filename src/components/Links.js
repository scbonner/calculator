import React, { Component } from "react";




// Display multiple interactive family fun math activities links using calculator 

class Links extends Component {


  render() {
      return(
        <div>
          <h1>**Fun Family Online Math Activities**</h1>
            <div className="math"> 
            <h2>Just A Click Away!</h2>
          <ul class="list-group">        
            <li className="list-group-item"><p>For Kids In Kindergarten Through The Fifth Grade: <a href="https://www.splashlearn.com/multiplication-games-for-3rd-graders">Splash Learn</a></p></li>
            <li className="list-group-item"><p>Worksheets For Pre-Schoolers Up To The Fifth Grade: <a href="https://www.kidzone.ws/math/">Kid Zone</a></p></li>
            <li className="list-group-item"><p>15 Math Games In 15 Minutes Or Less: <a href="https://www.scholastic.com/teachers/articles/teaching-content/15-math-games-15-minutes-or-less/">Scholastic</a></p></li>
            <li className="list-group-item"><p>Learning Library Of Math Games: <a href="https://www.education.com/games/math/">Education</a></p></li>
            <li className="list-group-item"><p>Skill Building Math Games For Kids: <a href="https://www.prodigygame.com/blog/classroom-math-games-for-kids/">Prodigy Game</a></p></li>
            <li className="list-group-item"><p>Kids Math Games Online: <a href="https://www.kidsmathgamesonline.com/numbers/calculators.html">Math Games</a></p></li>
            </ul>
        </div>
    </div>
        
        
    
      );
  }

 
}

export default Links;
