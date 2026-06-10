export const Navbar = ({ menuOpen, setMenuOpen }) => {
    return <nav className="fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
        <div className="max-w-5xl mx-auto px-4">
            <div className="flex justify-between items-center h-16">
                <a href="#home" className="text-xl font-bold font-mono text-white-100"> 
                    {" "}luciiasalidoo_{" "}
                </a>

                <div className="w-7 h-5 relative cursor-pointer z-40 md:hidden" 
                onClick={() => setMenuOpen(prev => !prev)}>
                    &#9776;
                </div>
            </div>
        </div>
    </nav>
}