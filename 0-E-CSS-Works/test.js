import React, { useState } from 'react';
import './App.css'; // Assuming you will place your CSS in App.css

const FlexLayout = () => {
  const [justifyContent, setJustifyContent] = useState('flex-start');
  const [flexWrap, setFlexWrap] = useState('wrap');
  const [alignItems, setAlignItems] = useState('stretch');
  const [alignContent, setAlignContent] = useState('stretch');

  return (
    <div>
      <div className="container" style={{ justifyContent, flexWrap, alignItems, alignContent }}>
        <div className="red">Red</div>
        <div className="orange">Orange</div>
        <div className="yellow">Yellow</div>
        <div className="green">Green</div>
        <div className="blue">Blue</div>
        <div className="indigo">Indigo</div>
        <div className="purple">Purple</div>
      </div>

      <div style={{ display: 'flex', gap: '2em', justifyContent: 'space-between' }}>
        <div>
          <label htmlFor="justify-content">Justify Content:</label>
          <select id="justify-content" value={justifyContent} onChange={(e) => setJustifyContent(e.target.value)}>
            <option value="flex-start">Flex Start</option>
            <option value="flex-end">Flex End</option>
            <option value="center">Center</option>
            <option value="space-between">Space Between</option>
            <option value="space-around">Space Around</option>
            <option value="space-evenly">Space Evenly</option>
          </select>
        </div>

        <div>
          <label htmlFor="flex-wrap">Flex Wrap:</label>
          <select id="flex-wrap" value={flexWrap} onChange={(e) => setFlexWrap(e.target.value)}>
            <option value="nowrap">No Wrap</option>
            <option value="wrap">Wrap</option>
            <option value="wrap-reverse">Wrap Reverse</option>
          </select>
        </div>

        <div>
          <label htmlFor="align-items">Align Items:</label>
          <select id="align-items" value={alignItems} onChange={(e) => setAlignItems(e.target.value)}>
            <option value="flex-start">Flex Start</option>
            <option value="flex-end">Flex End</option>
            <option value="center">Center</option>
            <option value="baseline">Baseline</option>
            <option value="stretch">Stretch</option>
          </select>
        </div>

        <div>
          <label htmlFor="align-content">Align Content:</label>
          <select id="align-content" value={alignContent} onChange={(e) => setAlignContent(e.target.value)}>
            <option value="flex-start">Flex Start</option>
            <option value="flex-end">Flex End</option>
            <option value="center">Center</option>
            <option value="space-between">Space Between</option>
            <option value="space-around">Space Around</option>
            <option value="space-evenly">Space Evenly</option>
            <option value="stretch">Stretch</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default FlexLayout;