import React, {useState} from "react"



function Learning() {

    const [isHtmlHovered, setHtmlIsHovered] = useState(false)
    const [isCssHovered, setCssIsHovered] = useState(false)
    const [isJsHovered, setJsIsHovered] = useState(false)


    function Html() {
        setHtmlIsHovered(!isHtmlHovered)
        setCssIsHovered(false)
    }

    function Css() {
        setCssIsHovered(!isCssHovered)
        setJsIsHovered(false)
    }
    function Js() {
        setJsIsHovered(!isJsHovered)
        setHtmlIsHovered(false)
    }

    

    return(
        <div id="learning" className="px-4 min-h-screen mt-14 lg:px-10 xl:px-14">
            <div className="text-center mb-6">
                <h1 className="text-2xl font-semibold mb-2">Ayo Mulai Ngoding</h1>
                <p>Pilih Bahasa Pemrograman yang ingin Kamu Pelajari.</p>
            </div>
            <div className="flex flex-col gap-4 md:flex-row">
                <div onMouseEnter={Html} onMouseLeave={() => setHtmlIsHovered(false)} 
                    className={`w-full h-36 flex items-center justify-center rounded-md text-2xl bg-slate-300  duration-200 cursor-pointer ${isHtmlHovered?'bg-slate-200' : 'bg-slate-300'} `}>
                        {isHtmlHovered?( <div className="px-4 flex flex-col gap-y-2 transition-all duration-500 ease-in-out transform opacity-0 scale-95 hover:opacity-100 hover:scale-100 ">
                            <p className="text-xs">Hyper Text Markup Languange merupakan Bahasa markup yang digunakan untuk membuat struktur dan konten dasar pada halaman web.</p>
                            <a href="" className="text-xs bg-primary w-fit text-white py-2 px-2 rounded-md hover:bg-second duration-200">Belajar Sekarang</a>
                        </div> ) : 'HTML'}
                </div>
                <div onMouseEnter={Css} onMouseLeave={() => setCssIsHovered(false)} 
                    className={`w-full h-36 flex items-center justify-center rounded-md text-2xl bg-slate-300  duration-200 cursor-pointer ${isCssHovered?'bg-slate-200' : 'bg-slate-300'} `}>
                        {isCssHovered?( <div className="px-4 flex flex-col gap-y-2 transition-all duration-500 ease-in-out transform opacity-0 scale-95 hover:opacity-100 hover:scale-100">
                            <p className="text-xs">Hyper Text Markup Languange merupakan Bahasa markup yang digunakan untuk membuat struktur dan konten dasar pada halaman web.</p>
                            <a href="" className="text-xs bg-primary w-fit text-white py-2 px-2 rounded-md hover:bg-second duration-200">Belajar Sekarang</a>
                        </div> ) : 'CSS'}
                </div>
                <div onMouseEnter={Js} onMouseLeave={() => setJsIsHovered(false)} 
                    className={`w-full h-36 flex items-center justify-center rounded-md text-2xl bg-slate-300  duration-200 cursor-pointer ${isJsHovered?'bg-slate-200' : 'bg-slate-300'} `}>
                        {isJsHovered?( <div className="px-4 flex flex-col gap-y-2 transition-all duration-500 ease-in-out transform opacity-0 scale-95 hover:opacity-100 hover:scale-100">
                            <p className="text-xs">JavaScript merupakan Bahasa pemrograman yang digunakan untuk menambahkan interaktivitas dan fungsionalitas dinamis pada halaman web.</p>
                            <a href="" className="text-xs bg-primary w-fit text-white py-2 px-2 rounded-md hover:bg-second duration-200">Belajar Sekarang</a>
                        </div> ) : 'JS'}
                </div>
                
            </div>
        </div>
    )
}

export default Learning