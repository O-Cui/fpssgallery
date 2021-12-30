import React from "react";
import { Dropdown } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Dropdownthing.css';

export class Dropdownthing extends React.Component {
  render() {
    return (
      <Dropdown>
        <Dropdown.Toggle variant="secondary" className="dropdownthing">
          What year?
        </Dropdown.Toggle>

        <Dropdown.Menu className="selection">
          <Dropdown.Item href="/2018-2019">2018/2019</Dropdown.Item>
          <Dropdown.Item href="/2019-2020">2019/2020</Dropdown.Item>
          <Dropdown.Item href="/2020-2021">2020/2021</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    )
  }
}