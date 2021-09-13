import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import { Home, Foods, Access, Contact, Card } from './components/index';
import './App.css';
import 肉 from './assets/img/niku2.jpg';
import 店内 from './assets/img/店内1.jpg';


const App = () => {
    
  return (
    <div className="App">
        
        <BrowserRouter>
            <nav className="nav-box">
                <ul>
                    <li><Link className="link_home" to='/'>ベルミート</Link></li>
                    <li><Link className="link_other" to='/Foods'>商品</Link></li>
                    <li><Link className="link_other" to='/Access'>アクセス</Link></li>
                    <li><Link className="link_other" to='/Contact'>お問い合わせ</Link></li>
                </ul>
            </nav>  

            <Route exact path='/' component={Home} />
            <Route path='/Foods' component={Foods} />
            <Route path='/Access' component={Access} />
            <Route path='/Contact' component={Contact} />
        </BrowserRouter>

        <div className="App__body">
            <div className="cards">
                <Card img={店内} title="ホーム" lead="ホームへ戻る" link="/" />
                <Card img={肉} title="商品" lead="コロッケ、牛肉など取り扱ってます。" link="/Foods" />
                <Card img={肉} title="アクセス" lead="お店まではこちら" link="/Access" />            
                <Card img={肉} title="お問い合わせ" lead="お問い合わせはこちら" link="/Contact" />            
            </div>

            
        </div>

    </div>
  );
}

export default App;



            // <div>
            //     <div className="link-bar">
            //         <div className="title-link">
            //             <Link to='/'>ベルミート</Link>
            //         </div>

            //         <nav>
            //             <ul>
            //                 <li><Link to='/'>ホーム</Link></li>
            //                 <li><Link to='/About'>基本情報</Link></li>
            //                 <li><Link to='/Foods'>商品</Link></li>
            //                 <li><Link to='/Contact'>お問い合わせ</Link></li>
            //             </ul>
            //         </nav>
            //     </div>
            //     <hr />
            // </div>




            {/* 
            <nav class="slidemenu">
                

                <input type="radio" name="slideItem" id="slide-item-1" class="slide-toggle" checked/>
                <label for="slide-item-1"><p class="icon">♬</p><span>Home</span></label>
                

                <input type="radio" name="slideItem" id="slide-item-2" class="slide-toggle"/>
                <label for="slide-item-2"><p class="icon">★</p><span>About</span></label>
                
             
                <input type="radio" name="slideItem" id="slide-item-3" class="slide-toggle"/>
                <label for="slide-item-3"><p class="icon">✈</p><span>Folio</span></label>
                
              
                <input type="radio" name="slideItem" id="slide-item-4" class="slide-toggle"/>
                <label for="slide-item-4"><p class="icon">✎</p><span>Blog</span></label>
                
                <div class="clear"></div>
                
               
                <div class="slider">
                    <div class="bar"></div>
                </div>
                
            </nav> */}