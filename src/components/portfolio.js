import React from 'react';
import {Card, CardDeck} from 'react-bootstrap'
import pic1 from './pic1.png'
import pic2 from './pic2.png'
import { FaGithub } from "react-icons/fa";
import { GrHeroku } from "react-icons/gr";


function Portfolio(){


    return (
        <div>
            <CardDeck className="justify-content-x-center"style={{display: 'flex', justifyContent: 'center', flexDirection: 'row'}}>
            <Card className="bg-dark text-white" style={{flex: 1, width:'100%'}}>
            <Card.Img src={pic1} alt="Card image" />
            <Card.ImgOverlay>
                <Card.Title>Budget Tracker</Card.Title>
                <Card.Text>
                    <a href="https://github.com/dmitrybalduev/budget-trackers" target="_blank">
                        <FaGithub size="2em" color="#343a40"/>
                    </a>
                    <a href="https://safe-savannah-89439.herokuapp.com/" target="_blank">
                        <GrHeroku size="2em" color="#343a40"/>
                    </a>
                </Card.Text>
                </Card.ImgOverlay>
            </Card>
            <Card className="bg-dark text-white" style={{flex: 1, width:'100%'}}>
            <Card.Img src={pic2} alt="Card image" />
            <Card.ImgOverlay>
                <Card.Title>Fitness Tracker</Card.Title>
                <Card.Text>
                    <a href="https://github.com/dmitrybalduev/fitness-tracker" target="_blank">
                        <FaGithub size="2em" color="white"/>
                    </a>
                    <a href="https://glacial-lake-58390.herokuapp.com/" target="_blank">
                        <GrHeroku size="2em" color="white"/>
                    </a>
                </Card.Text>
                </Card.ImgOverlay>
            </Card>
            <Card className="bg-dark text-white" style={{flex: 1, width:'100%'}}>
            <Card.Img src={pic1} alt="Card image" />
            <Card.ImgOverlay>
                <Card.Title>viBlocks</Card.Title>
                <Card.Text>
                    <a href="https://github.com/ForestW70/viBlocks" target="_blank">
                        <FaGithub size="2em" color="#343a40"/>
                    </a>
                    <a href="https://viblocks.herokuapp.com/login" target="_blank">
                        <GrHeroku size="2em" color="#343a40"/>
                    </a>
                </Card.Text>
                </Card.ImgOverlay>
            </Card>
            </CardDeck>
        </div>
        
    )
}
export default Portfolio;