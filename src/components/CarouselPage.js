import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Card from 'react-bootstrap/Card';
import Steve from "./HeadShot/Steve.jpeg";
import Jason from "./HeadShot/Jason.jpeg";
import Inti from "./HeadShot/Inti.jpeg";
import Ziad from "./HeadShot/Ziad.jpeg";
import Rajesh from "./HeadShot/Rajesh.jpeg";
import Jim from "./HeadShot/Jim.jpeg";
import Meanakshi from "./HeadShot/Meanashi.jpeg";
import Geoffrey from "./HeadShot/Geoffrey.jpeg";
import Gary from "./HeadShot/Gary.jpeg";

const CarouselPage = () => {
  return ( 
    <Carousel>
      <div>
        <Card style={{ width: '18rem' }}>
      <div>
      <Card.Img variant="top" src={Jason} />
<Card.Body>
  <Card.Title>Jason Craven -  Director Of Architecture at GPS Trackit</Card.Title>
  <Card.Text>
  Shane was a great pleasure to have on the team. 
      He was tremendous with all of the system automation work that he has been doing for years, but also stepped up and made the effort to pick up tasks with new technologies and help there as well. 
      I could always count on Shane to keep me informed about his progress, and be certain that he would make every effort possible to get the job done, both right and on time.I offer my highest recommendation for Shane and would attest that he would be an asset in almost any organization. 
  </Card.Text>
</Card.Body>
</div>
</Card>
        <p className="legend">Legend 1</p>
      </div>
      <div>
       <Card style={{ width: '18rem' }}>
      <div>
      <Card.Img variant="top" src={Steve} />
<Card.Body>
  <Card.Title>Jason Craven -  Director Of Architecture at GPS Trackit</Card.Title>
  <Card.Text>
  Shane was a great pleasure to have on the team. 
      He was tremendous with all of the system automation work that he has been doing for years, but also stepped up and made the effort to pick up tasks with new technologies and help there as well. 
      I could always count on Shane to keep me informed about his progress, and be certain that he would make every effort possible to get the job done, both right and on time.I offer my highest recommendation for Shane and would attest that he would be an asset in almost any organization. 
  </Card.Text>
</Card.Body>
</div>
</Card>
        <p className="legend">Legend 2</p>
      </div>
      <div>
        <Card style={{ width: '18rem' }}>
      <div>
      <Card.Img variant="top" src={Inti} />
<Card.Body>
  <Card.Title>Jason Craven -  Director Of Architecture at GPS Trackit</Card.Title>
  <Card.Text>
  Shane was a great pleasure to have on the team. 
      He was tremendous with all of the system automation work that he has been doing for years, but also stepped up and made the effort to pick up tasks with new technologies and help there as well. 
      I could always count on Shane to keep me informed about his progress, and be certain that he would make every effort possible to get the job done, both right and on time.I offer my highest recommendation for Shane and would attest that he would be an asset in almost any organization. 
  </Card.Text>
</Card.Body>
</div>
</Card>
        <p className="legend">Legend 3</p>
      </div>
    </Carousel>
  );
};

export default CarouselPage;