import React from 'react'

function HomePage() {
    const user = {
        userPseudo:'Roi Aragor'
    }

    const item = {
        itemName:"Parchemin de téléportation instantanée",
        itemPrice: 260,
        itemStock: 47
    }
  return (
    <div className='h-screen w-screen xl:h-[900px] bg-[length:100%_100%] bg-no-repeat overflow-hidden'
    style={{backgroundImage: "url(/img/home-page/homePageBg.png)"}}
    >
        {/* titre  */}
        <div className='w-full flex justify-center py-10 flex-col items-center'>
            <img className="w-28" src="/img/home-page/logo.png" alt="logoGondorChic"/>
            <p className='text-3xl font-semibold'>CHIC</p>
            <div className='grid w-1/5'>
                <div className='mb-5'>
                    <h1 className='text-7xl font-semibold'>GONDOR</h1>
                </div>
                <div className='flex justify-center'>
                    <img  className="w-2/3" src="/img/home-page/line.png" alt="line"/>
                </div>
            </div>
        </div>

        {/* texte de bienvenue */}
        <div className='ml-48 w-1/2'>
            <p className="text-5xl text-black leading-16">Bienvenue cher <br></br><span className='text-amber-900'>{user.userPseudo}</span></p>
            <p className='text-2xl text-black leading-10 mt-10'>Le produit du jour est le <span className='text-amber-900'>{item.itemName}</span> <br></br>au prix de <span className='text-amber-900'>{item.itemPrice} gondariary.</span></p>
            <div className='flex items-center my-10'>
                <p className='text-black text-2xl mr-10'>Quantité en stock:</p>
                <div className='flex items-center border-4 px-2 py-1 text-black border-amber-900'>{item.itemStock}</div>
            </div>
        </div>

        <div className='w-full flex justify-center'>
        <img className="relative bottom-60" src="/img/home-page/epee.png" alt="epee"/>
        </div>
    </div>
  )
}

export default HomePage;