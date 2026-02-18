const Header = () => {
    return [
    <header className='bg-amber-950 text-white text-2xl flex font-bold p-5 items-center justify-between mb-5 space-x-5 '>
    <h3 className="font-semibold text-amber-500">Travel Go</h3>
    <ul className="flex space-x-10 font-semibold text-amber-200">
        <li>
            <a href="#" className="hover:text-amber-400">Home</a>
        </li>
        <li> 
            <a href="#" className="hover:text-amber-400">About</a>
        </li>
        <li>
             <a href="#" className="hover:text-amber-400">Place</a>
        </li>
        <li> 
            <a href="#" className="hover:text-amber-400">Serve You</a> 
        </li>
    </ul>
    </header>
]; 
};


export default Header;