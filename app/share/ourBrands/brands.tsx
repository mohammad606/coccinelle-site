



const Brands = ()=>{

    const brand = [
        {
            img:'https://dc595.4shared.com/img/LdMIYqVaku/s24/18d610b9ad8/bRAND-1_4__2_?async&rand=0.866457560874808'
        },
        {
            img:'https://dc595.4shared.com/img/Cg5sJv7mjq/s24/18d610b96f0/bRAND-1_1__2_?async&rand=0.39667790699530037'
        },
        {
            img:'https://dc595.4shared.com/img/HNeGBO-6fa/s24/18d610b9ec0/bRAND-1_7__2_?async&rand=0.11807425433590724'
        },
        {
            img:'https://dc595.4shared.com/img/qkIk0tjXjq/s24/18d610b9ec0/bRAND-1_8__2_?async&rand=0.5469958011588556'
        },
    ]


    return (
        <div className='flex flex-col justify-center items-center mt-10 h-[153px] '>
          <div className='w-full text-center h-[83px] '>
              <h2 className='text-[36px] font-medium mm:text-[30px] smm:text-[25px]'>Our Brands</h2>
          </div>
          <div className=' w-full h-[70px] flex justify-center'>
              <div className='w-[90%] flex h-full flex-row justify-between'>
                  {brand.map((e,index)=>(
                      <img key={index} className='h-[60px] w-[12%] mm:w-[15%] smm:w-[18%] smm:h-[48px] hover:w-[16%] hover:h-[70px] cursor-pointer' src={e.img} alt='..'/>
                  ))}
              </div>
          </div>
        </div>
    )
}

export default Brands