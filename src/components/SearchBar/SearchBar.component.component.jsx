import './SearchBar.styles.css';
const SearchBar = ({onChange}) => {
    return(
        <>
            <input type='search' onChange={onChange} className='search-box-container'/>  
        </>
    )
}



export default SearchBar;