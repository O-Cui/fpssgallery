import React, {useState, useEffect} from "react";
import { Dropdown } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Dropdownthing.css';
function Dropdownthing ({getYearLink}) {
    const [text, setText] = useState("/");
    useEffect(() => {
      if (window.location.pathname != "/"){
        setText(window.location.pathname.slice(1))
      } else {
        setText("Select year")
      }

    }, []);

    return (
      <Dropdown>
        <Dropdown.Toggle variant="secondary" className="dropdownthing">
         {text}
        </Dropdown.Toggle>

        <Dropdown.Menu className="selection">
          <Dropdown.Item href="/2018-2019">2018/2019</Dropdown.Item>
          <Dropdown.Item href="/2019-2020">2019/2020</Dropdown.Item>
          <Dropdown.Item href="/2020-2021">2020/2021</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    )
  }
export default Dropdownthing