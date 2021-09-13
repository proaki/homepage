import React from 'react';
import { BrowserRouter, Route, Link} from 'react-router-dom'
import {Foods_yoyaku, Foods_niku, Foods_agemono, Foods_other} from './index';


const Foods = () => {    
    
  return (
        <div className="main-container" id="foods">
                <div className="recommend-container">
                        <table className="Foods__table">
                            <p>おすすめ</p>
                            <tr>
                                <th>
                                    <li>福島牛 A5ランク</li>
                                </th>
                                <td>645円～/100g</td>
                            </tr>
                            <tr>
                                <th>
                                    <li>麓山高原豚味噌漬</li>
                                </th>
                                <td>
                                    お子さんからお年寄りまで、<br/>
                                    みんながおいしく食べられる味に仕上げました！1枚 200円
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    <li>手作りベルコロッケ</li>
                                </th>
                                <td>
                                    素材にこだわってつくりました。1枚 100円
                                </td>
                            </tr>
                        </table>
                </div>


                <div>                
                    <BrowserRouter>
                    <div>
                        <div className="nav_box">
                            <nav className="nav_bar">
                                <ul className="nav__ul">
                                    <li><Link to='/Foods/yoyaku'>予約限定</Link></li>
                                    <li><Link to='/Foods/niku'>精肉</Link></li>
                                    <li><Link to='/Foods/agemono'>揚げ物</Link></li>
                                    <li><Link to='/Foods/other'>その他</Link></li>
                                </ul>
                            </nav>
                        </div>

                        <Route exact path='/Foods/yoyaku' component={Foods_yoyaku} />
                        <Route path='/Foods/niku' component={Foods_niku} />
                        <Route path='/Foods/agemono' component={Foods_agemono} />
                        <Route path='/Foods/other' component={Foods_other} />

                    </div>              
                    </BrowserRouter>
                </div>

        </div>        
    )        
}

export default Foods