import SearchBar from "../searchBar/SearchBar"
const Nav = ({onSearch}) => {
    return (
        <nav>
           <SearchBar onSearch={onSearch}/>
        </nav>
     );
  }
 
 export default Nav