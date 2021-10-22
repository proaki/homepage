import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import { Home, Foods, Access, Contact, Card } from './components/index';
import './App.css';
import 店内 from './assets/img/店内1.jpg';
import ケース from './assets/img/ショーケース.JPG';
import 店前 from './assets/img/店前.JPG';
import アクセス from './assets/img/access.jpg';

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
                <Card img={ケース} title="商品" lead="コロッケ、牛肉など取り扱ってます。" link="/Foods" />
                <Card img={アクセス} title="アクセス" lead="お店まではこちら" link="/Access" />            
                <Card img={店前} title="お問い合わせ" lead="お問い合わせはこちら" link="/Contact" />            
            </div>

            
        </div>

    </div>
  );
}

export default App;