import React from 'react';
import logo from './logo.svg';
import './App.scss';

import Card from './components/Card/card';
import SimpleButton from './components/SimpleButton/simpleButton';
import NavLink from './components/NavLink/navLink';
import CatPicture from './components/CatPicture/catPicture';

import cat1 from './assets/images/cat1.png';
import cat2 from './assets/images/cat2.png';
import cat3 from './assets/images/cat3.png';
import cat4 from './assets/images/cat4.png';

const buttonDetails = [{
  id: 1,
  title: 'Button 1',
  backgroundColor: 'orange',
},
{
  id: 2,
  title: 'Button 2',
  backgroundColor: 'blue',
},
{
  id: 3,
  title: 'Button 3',
  backgroundColor: 'green',
},
{
  id: 4,
  title: 'Button 4',
  backgroundColor: 'teal',
},
];

const App = () => (
  <div className="container">

    <nav className="nav">
      <NavLink text="Link 1" />
      <NavLink text="Link 2" />
      <NavLink text="Link 3" />
    </nav>

    <div className="flex">
      <SimpleButton text="Button" bgColor="#9ff5b2" />
      <SimpleButton text="Button" bgColor="#9ff5b2" />
      <SimpleButton text="Button" bgColor="#9ff5b2" />
    </div>

    <div className="flex">
      <SimpleButton text="Button 1" bgColor="#ef9ff5" />
      <SimpleButton text="Button 2" bgColor="#ef9ff5" />
      <SimpleButton text="Button 3" bgColor="#ef9ff5" />
    </div>

    <div className="flex">
      <CatPicture imgSrc={cat1} />
      <CatPicture imgSrc={cat2} />
      <CatPicture imgSrc={cat3} />
      <CatPicture imgSrc={cat4} />
    </div>

    <div className="flex">
      <Card title="TITLE" description="DESCRIPTION ..." />
      <Card title="TITLE" description="DESCRIPTION ..." />
      <Card title="TITLE" description="DESCRIPTION ..." />
    </div>

    <div className="flex">
      <Card title="TITLE 1" description="DESCRIPTION 1..." />
      <Card title="TITLE 2" description="DESCRIPTION 2..." />
      <Card title="TITLE 3" description="DESCRIPTION 3..." />
    </div>

    <div className="flex flex--column">
      {buttonDetails.map((element) => <SimpleButton text={element.title} bgColor={element.backgroundColor} />)}
    </div>

  </div>
);

export default App;
