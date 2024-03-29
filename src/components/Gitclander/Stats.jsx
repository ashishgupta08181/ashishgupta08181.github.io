import React from 'react';
import "./git.css";

const Stats =() =>{
    return(
    <div id='stats'>

    <div id='stats__small'>
        <div className='streak lang_stats'>
            <a href="https://github.com/ashishgupta08181" target="_blank">
                <img className='streak_img statsimg' src="https://github-readme-streak-stats.herokuapp.com?user=ashishgupta08181&theme=radical&border_radius=4.6&theme=gruvbox_duo" alt="" />
            </a>
        </div>
        <div className='lang_stats'>
            <a href="https://github.com/ashishgupta08181" target="_blank">
                <img className='lang_st_img statsimg' src="https://github-readme-stats-git-masterrstaa-rickstaa.vercel.app/api/top-langs/?username=ashishgupta08181&bg_color=0D1117&color=5BCDEC&hide_border=true&width=100vh" alt="" />
            </a>
        </div>
        <div className='lang_stats'>
            <a href="https://github.com/ashishgupta08181" target="_blank">
                <img className='lang_st_img statsimg' src="https://github-readme-stats-git-masterrstaa-rickstaa.vercel.app/api?username=ashishgupta08181&hide_border=true&theme=react&hide_border=true&bg_color=0D1117" alt="" />
            </a>

        </div>
        
    </div>



        </div>
    )
}
export default Stats