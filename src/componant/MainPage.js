import React from 'react';
import { Button, Col, Input, Label, ButtonDropdown, ButtonToolbar, DropdownMenu, Row } from 'reactstrap';
import Home from './simpleCurd/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Add from './simpleCurd/Add';
import AddEmployee from './simpleCurd/AddEmployee';
import EditEmployee from './simpleCurd/EditEmployee';

function MainPage() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/create' element={<AddEmployee />} />
        <Route path='/edit' element={<EditEmployee />} />
      </Routes>
    </Router>
  );
}

export default MainPage;
