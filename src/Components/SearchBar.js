import React, {useState, useEffect} from 'react';
import "./SearchBar.css";
import CloseIcon from "@material-ui/icons/Close";
import SearchIcon from "@material-ui/icons/Search";
import OutsideClickHandler from 'react-outside-click-handler';
{/* Videos:
        Search Bar: https://www.youtube.com/watch?v=x7niho285qs
        Outside click: https://www.youtube.com/watch?v=iNJ5sIUqDpU*/}


function SearchBar( {placeholder, data, getTimeStamp}) {
    const[filteredData, setFilteredData] = useState([]);
    const[nameEntered, setNameEntered] = useState([]);
    const [notHidden, setNotHidden] = useState(false);

    const handleFilter=(event)=> {
        const searchWord = event.target.value
        setNameEntered(searchWord);
        setNotHidden(true);
        const newFilter = data.filter((value) => {
            if (searchWord != ""){
                return value.name.toLowerCase().includes(searchWord.toLowerCase());
            }
        });
        setFilteredData(newFilter);
    };

    const clearInput = () => {
        setFilteredData([]);
        setNameEntered("");
    };

    const clickHandler=(value)=>{
        getTimeStamp(value.timestamp)
        setNotHidden(false);
    }
    return (
        <div className="search">
            <OutsideClickHandler onOutsideClick={() => {
            setNotHidden(false);
             }}>
                 
            <div className="searchInputs">
                <input type="text" placeholder={placeholder} value={nameEntered} onChange={handleFilter}/>

                    <div className="searchIcon">
                        {filteredData.length === 0 ? <SearchIcon/> :
                        <CloseIcon id="clearBtn" onClick={clearInput}/>}
                    </div>

            </div> 
        
                {filteredData.length != 0 && notHidden &&(  
                <div className="dataResult">
                    {filteredData.map((value, key) => {

                        return(
                            <span className="dataItem">
                                <button onClick={() => clickHandler(value)}>{value.name} </button>
                            </span>  
                        )
                    })}
                </div> 
              
             )}
        </OutsideClickHandler> 
        </div>
    );
}

export default SearchBar
