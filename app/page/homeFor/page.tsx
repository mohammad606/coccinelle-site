'use client'
import NavHomeFor from "@/app/doc/homeFor/nav";
import Brands from "@/app/share/ourBrands/brands";
import Products from "@/app/doc/home/products";
import InformationClient from "@/app/doc/home/informationClient";
import AdviceTow from "@/app/doc/home/adviceTow";
import Advice from "@/app/doc/home/advice";
import Footer from "@/app/share/footer/footer";
import React, {useEffect, useState} from "react";


const HomeFor = ()=>{
    const [scroll , setScroll] = useState(false)

    useEffect(()=>{
        if(typeof window !== 'undefined'){
            window.onscroll=function (){
                if (window.scrollY > 1){
                    setScroll(true)
                }else {
                    setScroll(false)
                }
            }
        }
    },[])

    const handleScroll=()=>{
        if(typeof window !== 'undefined'){
            window.scrollTo({
                left:0,
                top:600,
                behavior:'smooth'
            })
        }
    }

    return(
        <>
            <div className={scroll?'translate-y-[-500px]':'translate-y-0 ease-in-out duration-300 absolute flex justify-center items-center w-full h-[150px] bg-gray-500 z-50 top-[calc(100vh-150px)] left-0'}
                 style={{background: 'linear-gradient(0deg, rgb(31, 31, 33) 0%, rgb(255 255 255 / 0%) 100%)'}}>
                <svg onClick={handleScroll}
                     className='animate-bounce cursor-pointer'
                     xmlns="http://www.w3.org/2000/svg"
                     xmlnsXlink="http://www.w3.org/1999/xlink"
                     width="35px" height="35px">
                    <image  x="0px" y="0px" width="35px" height="35px"  xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAA8CAYAAAAZp4inAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QA/wD/AP+gvaeTAAAAB3RJTUUH6AIKFwsRs5PMhwAAFxRJREFUaN61mnmYHVWd9z/nVNWtunVv36W70510J0AICZBAiBNlRxSU95XNkAdkEDE4ojOMQJ4oCioq6Agz40IAlxlRQTbnecV32BQHeXWIyBDCLlvCkpZO0un0drvvWss55/2j6t50AsyjM8zveerpp+rWOed7fuv3d6rF1NFHY0ZHIY7BcSCbAymhUQNEcu/YCB1DGGKCAIyhLaJ9WRZjUvLdRoMf1OvEcLwDD2Wl5P8sWsRxXV3UCwVEoUC8cSPuRz6CHh5Gbd6M3rEDoiiZ0POQAwPoyQrEChEHyEWLMFNTmDBEZLOYWCERArnffohiMRlcm4EggFwBnAzUZ6DZwGCBl0XkfLDtDnADaAClKEcRV/r+IbeUyyy27RtqcN/fdnfPf09v7xk1YzKiUOhHShCC/67YZmQn5HOIvj7I5xPtN2sQh4m28wVo1CGKMNkcOC7Ctx2iMEq1fzLGjCooSviSiaLgZMtqjvn+oVdVq4eujeNX46mpV/T09HpRKNxJq3U0Wv+1yOV2pvse+y8Bp1DGNGqYoSFEfx9yv/0wY2OY6WlQM+B6kOuCMEi072Yxnv9JYaldwvM+Z1qt/TBmCHinSZE4SpGJY+YKwZTWGbNt21Jh26jHH/+0KBQgCJ6Jf//7W0Vf3yqkvAi45c8HjkmAxSFmZBRyPqK/H7q6Uu3XIY4S7XcVP0h1egoVX260no8lQSkQonf2pJExTGpNC8gAwraTuHAcTK0GlkW0YcN5cmAA4fs/QYhVwIXA6J8KXCaOqsF2oFjGhBF6aAiMSX2/lPh+vdpP0LoaJ/MQUTgfrSAME381JMCEAGNoSokEuoWgLC3krN+wkiVFLocZH08CU6kzgFeB8/8MjafSzhR+qv2dqfb7+rrI579hRkchaC5FyPYAEBKMAssBy0pVYeFaFnOUJo+glclgWXZiNSEhCnavZ9vJhuIYhMgBN83S/sifBryzgY72M6ZZ/6IZGmqI/v6/Rqk6UnY0a1k2Rgiyjk/dsndrXFo4AizHY7zZZCbjUZIymdMYyLj4KiIwBhFFxHHIbmUAUfRBhDgJIS4GfvSfu8obwBuA1bjZL5PNX2q2b080IgTGdrAyLnhZsp7Pc0JStmxcK9We0bSMYUzH5IVgbrpZA1hSUrZttkkbbWeoZX2y2XxSNxBt4Ojh4Sxx9MPk+Z+q8cQDF2K4hmY9CTwpE7NaNo7j0uU43Fiv8XizSQtNTkg+WyzTa1nExqCMoSgl82w7MQSQFYIxpflVo84DzQaOkBzo2Jzk55mXzUMUJhcaWs2kltiZv8OWV7xZ3n9z4EJcRdDcjyjsmB83C9Ii4zjcVa/y2YldWEgaRiERbItjvtczh5yUuELQY1kE2jBtNL4QNIzh1806356ZZruKqaiYAzIuQ3HMVeUetJVN4iRsJcEugKDxRbnfQaeh9WF7g9/bFgIhV6OiDxM0E9COC1kfMi5SSiKt+XG1SssYWkbjCoktBE9HIU+HQWfNKa0Y04qsSCprRSl+2WzwfBgQGEPZsnk9jrmxNsNwFCGMSSp1WuSS4HXQu3YtJwhKpk0J2sDN9PTs+wLG/COtpoVWyUSuC3YGtMYALaP5YxwjEGSE6HCV4ThiSxSRFYKmMQRas8Rx6BISAdhCsClo0WVZeEJggIwQdEvJy21QxiTW9f2k8AFmchJdqbyKUkk9EAKEQGbOWIWp1TBB2I2U6wlbi4iiFHTiHm0jGUAiOMrzaBmDBlrGEBrDoOVwnOdhCYEtBHMtm6wQVNPA7LYslmYyRMbQTJ+pdNNdMhnTAW9MsnbGTYrW1FQ3Uh6C7YAQmCBEZo47htzXrkLOm7sYpRIXsSTGzeI6GXJC4ojZvgQXFYqs9nMExtBrWSgMlxVLDNo2TW1wgJyUjCpFmNaH2Bj+tqvEAbbDoGUxHccstm3OzXXxvqxPmy64QpAVAkeIBLhlJQVQ6z/gWJgghCBETCxYgHf+GjKnnU717HMM0oDrk/Oy7FIxzwchg7bNkkyGutaQxD1bo4itccSTYcBSJ8N5+TxTOgHpAHfW6/wmaHBzbz/T6ThPCB5sNnkxCtipFKtzeeZbNn1S0kqt8kIQMKY0SzIOOSlRWiUkD4Po6/sr0whuQmvExJKDMTt34Bxx+CXxc89dJ4ol8HwsKfjRTIUHmy0eDprc3TfAYZlMR+uOEGhjsITAQdAwuqM1gN+0mrwYBnymWKY1i7+XpWS7ihmwbKa0JicljXRjFa343OQEkYF9bIvLS2WyQiYab1Qh62OM3Ee4mWHpnfMh7COPKsebX/6cyOcT8whBqDWPtQJ+2agzozR3NWrEKSwDhKmfhsbQMBo9C3RGCOZZFhWtqc8CDTClNUVpMa01NnRAO0IwFEXc12xwd6PKfc0GE0olczoOOBmEJbEWLTyNWCGzn15H9uJP/YUslwaRFqTlO4PkjFyefsvifVmf5U4m2f0sUcxqJPbKsXWtmdSa7JsUj2hWcLYlNoY+y+Zw16UsLU7wsp1Um2jDxTQaiDm9Z1mHHowdbngY4XkurVYLN+vtBmV4r5flV/3z2Kk1y5wMjhBEe7VthjdKYAwTWnOQk8EXohOge8vs8QYYtG2+WCxT04bFjkOPtTujtTOKevypY+U+g4jxgQU4xx77Yvwfjxwkevag1VgIFIaitKhpRUyHUVCWkhmtyad/Z0OTQvBUq8XzUciH812d5yYNXCkEOSGZ0IqClNT0bpsVpGRcKXqlRdXsOS9RmPAabaSUxYKMH9voi3y+U0Y9IZCAxiCBaa06ObcsLTSGB1tN/l+ryX8ELUpSMtshbKBsSUZV3JlTpM9tIWhqzW21KrtUzLNBgJ+uBzCTuteM0Z1nTttdnEziyo5zoG3CaF+RzQ5rJ7OPJQRlKXg1ihiwbJrG7FF8XGBLFPLZqXFejiKK0mJzFHJBvosvlbrRqb8bYDhWZITATzWqSArNjdUqd9ZrbI1iyrbkYNvhDD/Pu7NZrPZaAmyTzFO2JDtiRVnKJDuFQUzGPcG6+vcPV4J77/tRUQhGlOKOWpXrUyK00LbJpdTSSTPIRZNj3Nto0AKG4oiMEPym0WDcGN6bzSIRaGBUxRSlxSLHQZGww/ubDdZNTrBNxUwaxY5Y8aqK2BxHvNvz6JZ24k5CsF0rng8jrpqaJAa6pCQvJAijCYNzpAnDk4XvUdeaW6pVrpme4uGgxRcnJ7iyMkUz9d8uKflFs8Ev6g2yqWkLqYuUbJs76zVG4hiRxsaAbTGhEm4uAW3gW9MVxnWS4nwhKUiJhWBTEPCT2kwnIykD9zXqXDI5xq21KpdNTnBjdTqp4J5vk8vVpR4dPUtPTDFtDM+GARWtiY2hYFncUauyVcXYwIRS/K7VJCsFbkqu9s4kz4ZhGpzJ4nUUbkqoHg8DXooiimk/OjuzdEnJU2FIzehOury3UWdrHFG0LBpGc1u9yoiKk2IkrDOlnDt3o6lU6LEsFjgWCmgaQ9VoFjkOC20HSwikEBxkZ2jtlQJF6kJlKQlS7Spj2KkUC2wbO3WdASnps+QbNmxSoL6QqJS4aQzZNI0akiK12HYIkrQaEUWxrH/hin8WuRyB1qz28xyRcfmLjMv+lsUXit3k0twtgBN8n7KUaJKCAQk7NMC+lsMK18UTEgMMWDZlmWgLYI5tc4jjUlFqD+ANo/ERHOG6zLEsZJouL+wqcrzrgzEszbicncvTa9tYxjgIcZetR0bWiWIR4pgjXI+ru3to6ETjZ/g5KrNy9Hzb5pP5At+rTuNKyUiscKXgGNdjlZ9jqZOhaTQW4EvBeKQSCwCWEHy+VGZUKx5qNbFTTe/nOBzrepzi5xBpVpLAka7H2gLYokTdaI73PLqkReTYWwnCeTZKbWy3RU1jOML1qGhNj7SY0arTKLQD54pSmX0dm4dbLfyU8p7oZnmXlxRdlWqsojUZEnqqjCE2hvm2zVdL3WwKWtxer3Kk67HIcTjc9ViRcTu8RaS15BTfJ0jXzQhBTSmwrcvw3F1icsVKB2gipUU6UKY7d9NesSgkM0bjpMDKlsXLUcg8y2Z7HHOg49A0Zg8WuDXtapakzUN7XksIGlojhaCmFV3SoktIWkZ35p5Uag9lGUAbk7R3xtg4tpJABCxBiEfbmm8X4KrW/DGKuL5a4ZFWi2YKYEop5ls2yhj2tRN62pwFWgI9abDO5ja6HYhpQ92XdkkNo+mSFq/FEd+oTLEjjjvFSNM+shHI3h5wnFOIdlfk19JjsI5YQM0Yrq9WuHRinK9PT7I1jjr+3m7dmnsRqNmVNsbsZnezJEpdJ5hlpe0qZu3EOF+pTHLm2AgVrfac1LaNEWK97Om+fzY9ARjFmJtna8cX8FjQwhaC58KQ56MQdxaQdkcvSXhIIc0oRSmJgX1th5wQeCLJ/bOOffbAZIAdKubJMEAAr8Uxr8Txni9q9aKpVL5sms1IdOWwLps7MPvnu4Er2ze2ELhCUtWa0/wcH851UZAWYXLMT5eUNNMc7FuS58KAyMCTUci01jSM4ZUoQiKY1pouKXdTCCGYDa1PWnhS8EQQcGmxxPFeFr/N/42pYMwajNlMHGPCCDG5YuXelvw8xlydqCM5bX0yaLG/4+AgCDF0CUndaGpGMxYrnopCXohCxmLFq3HEsIo50MmwMWhyuOvxQhix2s/RMpqT/TwlKZhv2xxgZ5ia5RIZAVuimIWWjRaJFdNf12PMut1+LN8EeBIJJuG9SZjmU4bXPkdpaMOjQZMnwpA7a1Ve0zFlIdmpFMoYypbFlNYUZGItVwhaxjDXstipFCdls/RbFqdkc6zO5dHG0EirrickQcrDdYLnKYQ4Dqh38MGbAxee95cI8V3TbHa3M03bdx9pNXkiCLmxNs02FTOjNCXLIjQGp8Pj3+jL7aC0hWBGa+ZaFnkhea/ncUmxxBIns0dD0TlPN+ZU4Bd7HMEZsxfw9MxauC6m2exG64n2gJKUvBZHXDwxxuNBwJhSlNISrfnzJTYmSXEGlmYcvt09h4McZzcPsiywre8QxRczmyakePbsfoVAuG7ypUHrSYR4th35daP56tQkD7ZanTMQ/ougIQl8C1ACtkQR35mpdPgPAEoNofTfk3Eg4+z+UjermO1+kMmAUpj2JxI4TMPXC0LwQhzzQLM5q617e8QmqYD3Nuo8hwZjAmHMN4G/IYq2E6Z9ppvZ/dXDGKQmKTYIgbCsBPSsA/W8lFe8puKj7mzUR+pmN5d4O0UYgxSCf5qZwS8V19qO81mp9W8RIulAghCUZrb2ZY/tEAHlwUH01FTymdAYTBBgS4tIxXytMvXoNybGr2yb939CLNvm5zPTd5/9x6E7nrMlfj4fYkwns8koSjaQat9a0pXnrkadZqnEirvvgueeI/rjMLK/H/XSZu5ybK7a+hpdudyYEGLdfw/eW2g8TbN51/3gk63GyD1TU1gZh3cWi+QE5DTUgB4EQfJ5Euv/asV2pfj+0FbqfpaTrr2W3D774F7xedSuXRzwnRvY8MoWhl58qep63nlA+e0EbdLsYoxBa13N285vYim5Z3KSZ4MW7yyVuX18jGzW51ajeLeQ+MYgSr29BMbgCkFlfJxDV65k/Y9/zAnLl++xwMVr13LbHXe0+4K3DbTjOERRhBDiZeBkY8wrtm0jhGA8CJhjWRQzLgv33Ydf7xrl3fUm1/T0JlmlTZxKvb28+MILnPiOd7Du0ksJgqCzSCaTYXpmRgP//naADsMQIQS2be/MZrOrhBCfBl4RQhDHMXEcU5SSShiiSkW2NhoUJibZELR4384dicbfTCrj4yxbvpxvf/ObZ46MjCw8f82ah/xC4bFMctRs/hyQe0scx/T19dVf27IlV+rtvSSTydwgpaTRaCyRUm5pv6eUolAoMDgwwNahoc5mNWB5vv+mk3u+z86dO8/7yc033zr0+ut+pVq9Kut5/QZ+CfQC5wKHAAvbZhd7cW9jTOcC0FojpWwZY+yLLrzw9lNPPfWhf3/ooW8qpeYaYzY4jrNwcteuq9xs9lfGmGnLspg/OMjExATT09NYaR5vU+m3kq5cLvcPpZ6e9z/9zDNzXdftCsJwKfAU8GngFeBEYG17gOu6e27e83AcZ8r3fbLZbMtNrPUz27a/e/Ott15++umnr5s/ONjQWl+qtd7S29Nz2q233fYzrfVWIcRl/f39KKWYqlRwHGePuf8z4DcDm4IgeH3R/vv3BEFwe29v7+lCiMXAv85673pgWAhBFEU/Al4AtgOTSqnL+/r6roqi6OvvWrnygKOPPnpECHFSEARfGhkZ2bX44IPZNTp6nG3bF7darc9t2759aNGiRb/9xAUXLAQ+1ZXP/2r7jh1Frd9Yp98K+P8GlgIftG371uXLl3d/4oILVn3ozDMrQRBUgVP2ev8BYEwpdQ2wDLgMWBzH8T+MjIzc1Nvbe8XnL798+7Jly35QrVT6C4XCfY1ajVKxyMTk5Pe+e/31oren5/CTP/CBg44/8cRHHtu06UNBEOyzc+fO/xUEweVtF5ktbxWcD0spD9Nad9Xr9ahYLNrnf/Sj3HPvvQy9/jp+NnsN8IX03SzwKPAt9vqHGa01M5OT/N3VV3PwwQdz5llnHWhb1kvPPPXUiq9dffUz//bAAwAvHXH44QeqOCaby2G05pf338/AwIAANk9MTBRt2567d/y8FfCPt1qtH5bLZTE4OLju5Zdf/natViObzeI4ztPGmPcBE0JKjNY/A+YAp5IUuMSUUjIzM8N73/Merrv2Ws79yEd4cfNm2/f93x57zDHmK1dc8VdHHHnkK/likWqtZoqFAr7vEwQBzWbzFc/zFi8+4IAHm83mQ8Pbtn0tCALsWf8L9lbAB2ZmZrZ/9StfWTo4OPjihRdddL7neX8P/AC4F9gkhFjbqNd3Bo3GD3LF4mLHcXbNnqDVbKKN4f777uNf77mH76xfT3utyuSkKXV3M1OprOsqFtfPTE//1MTxu91cbthxnM/4vt9Tq9WWO46zZnBgYEWhUKiP7trF2NgYUsrkegsf31EoFCb/7de//pfu7m5azebNwD5CiC8Dm4BD4jj+ltD6X66/4YbLPc/bVRkf32OCMAi44brraLVa3HLTTZTmzOn85vn+LQsWLGBwwYJru7u7GejrO+fGH/7wxN7e3iMRQh+ybNnL/f39a5VSq7cODdWHh4eZ09vLAYsW4TgOcRy/dVap1+uLBgcHt3/8k5+cQKlLgEfiKDqoMj5+D3B7o17/yXnnn3/HxRdd9P3HN25k9VlnURkfJ0pPsIrlMs88+yzrPvMZZmZmOg1AFEUUCoU17zjssNW9PT2jYRDcuf66685VSn3g7p//vKtVr/+8u7v7wUOWLfvpAYsW/SGfzzMxOcnmLVsIwpAlixfTN2fOWxegMAxbzzz55O3z589v/OGFF/5xx+uv/zRstX76sQsumHx048aaiaLVj2/atFFAtVQqcfZZZ7Fg3315aMMGJnftwvN9frdhA8oY/Hy+U4iiKOK4Y46h3mi89PgTT3x/enp6zaObNq0rFQrL1l9//SWjO3aECrbNHxw8s6+vD8/zMMZQq9WYmpoiCEP6+/sTfvJml50OMMYwMzNT/ptPfYpDV6xYNlOt9vzu4YeXveuoo/jLc89lplrdo0IODw9z5tlnA5ArFin29FDq7aU8Zw5eVxcrVq5kzcc+Ru/cuRR7erBsm7Xr1p1pjCl8+corv9TT328Bh8+ZN48T3/9+zluzhtNXrWLFypX0DQzg5fMUe3r+NODta+Njj+1x//FPfII58+Zx6+23v+Hdm26+mb6BATK+T6m3l1yxSE9/Px89/3wOXbGCTGrpI44+mpGREaYmJ4UxhqefeYbTVq0CwPY8li1fzllnn805557L8SecwP5LlpAvlfj/d3JGDG3QvBIAAAAASUVORK5CYII=" />
                </svg>
            </div>
            <NavHomeFor/>
            <Brands/>
            <Products/>
            <InformationClient/>

            <div className='navShow:hidden block'>
                <AdviceTow/>
            </div>
            <div className='navShow:flex hidden justify-center my-10'>
                <Advice/>
            </div>
            <Footer/>
        </>
    )
}

export default HomeFor