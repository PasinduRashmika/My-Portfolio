import React from "react";
import {SkillContainer,FirstRow,FirstRowCol,SecondRow} from './SkillsElements.js';

import img1 from '../../assets/skills/react.png';
import img2 from '../../assets/skills/express.png';
import img3 from '../../assets/skills/node.png';
import img4 from '../../assets/skills/mongo.png';
import img5 from '../../assets/skills/html.png';
import img6 from '../../assets/skills/css.png';
import img7 from '../../assets/skills/javascript.png';
import img8 from '../../assets/skills/flutter.png';
import img9 from '../../assets/skills/c.png';
import img10 from '../../assets/skills/c#.png';
import img11 from '../../assets/skills/java.png';
import img12 from '../../assets/skills/php.png';
import img13 from '../../assets/skills/mysql.png';
import img14 from '../../assets/skills/tailwind.png';
import img15 from '../../assets/skills/git.png';
import img16 from '../../assets/skills/trello.png';
import img17 from '../../assets/skills/visual studio.png';
import img18 from '../../assets/skills/mui.png';
import img19 from '../../assets/skills/postman.png';



const Skills = () => {
    return ( 
        <SkillContainer>
            <h1 className="text-5xl font-bold text-white textAlign-center">
        <span className="text-white capitalize textAlign-center">My Skiils</span>
      </h1>
            <FirstRow>
                <FirstRowCol>
                    <img src={img1} />
                </FirstRowCol>
                <FirstRowCol>
                <img src={img2} />
                </FirstRowCol>
                <FirstRowCol>
                <img src={img3} />
                </FirstRowCol>
                <FirstRowCol>
                <img src={img4} />
                </FirstRowCol>
                
            </FirstRow> 
            <SecondRow>
                <FirstRowCol>
                    <img src={img5} />
                </FirstRowCol>
                <FirstRowCol>
                <img src={img6 } />
                </FirstRowCol>
                <FirstRowCol>
                <img src={img7} />
                </FirstRowCol>
                <FirstRowCol>
                <img src={img8} />
                </FirstRowCol>
                <FirstRowCol>
                <img src={img9} />
                </FirstRowCol>
            </SecondRow> 
            <FirstRow>
                <FirstRowCol>
                    <img src={img10} />
                </FirstRowCol>
                <FirstRowCol>
                <img src={img11} />
                </FirstRowCol>
                <FirstRowCol>
                <img src={img12} />
                </FirstRowCol>
                <FirstRowCol>
                <img src={img13} />
                </FirstRowCol>
                <FirstRowCol>
                <img src={img14} />
                </FirstRowCol>
                <FirstRowCol>
                <img src={img15} />
                </FirstRowCol>
                
            </FirstRow>  
            <FirstRow>
                <FirstRowCol>
                    <img src={img16} />
                </FirstRowCol>
                <FirstRowCol>
                <img src={img17} />
                </FirstRowCol>
                <FirstRowCol>
                <img src={img18} />
                </FirstRowCol>
                <FirstRowCol>
                <img src={img19} />
                </FirstRowCol>
                
            </FirstRow> 
        </SkillContainer>

    );

}
 
export default Skills;