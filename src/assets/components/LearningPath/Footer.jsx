import ig from '../../img/Instagram.png'
import fc from '../../img/Facebook.png'
import tw from '../../img/Twitter.png'

function Footer() {
    return(
        <div id='footer' className="px-4 lg:px-10 xl:px-14">
            <hr className="bg-slate-400 h-1"/>
                <div className="flex flex-col gap-y-10 gap-x-36 py-20 md:flex-row">
                    <div>
                        <h2 className="text-2xl mb-4"><span className="text-primary">S</span>yntax<span className="text-primary">S</span>chool</h2>
                        <p className='mb-4'>Kota Palopo, <br />Sulawesi Selatan <br />Indonesia</p>
                        <div className='flex gap-x-4'>
                            <img src={ig} alt="" className='w-8'/>
                            <img src={fc} alt="" className='w-8'/>
                            <img src={tw} alt="" className='w-8'/>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-2xl mb-4">Unlock Your <br />Coding Potensial</h2>
                        <a href="">Tentang Kami</a>
                    </div>
                </div>
            <hr className="bg-slate-400 h-1"/>
            <p className="text-center py-4">@2024 Copyright</p>
        </div>
    )
}

export default Footer