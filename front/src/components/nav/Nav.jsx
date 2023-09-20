import SearchBar from "../SearchBar";

const Nav =({onSearch} ) =>{
    return(
        <nav>
      <link to='/about'>
        <button>
            about
        </button>
      </link>

            <SearchBar onSearch = {onSearch}/>
        </nav>
    
    )

}

export default Nav;