import React, {useState, useEffect} from 'react';
import { CSSTransition } from "react-transition-group";
import styles from "./Slideshow.module.scss";
import images from "../assets/img/images.json";
import Text from './textdata.json';


const Home = () => {
  const image_list = images.url.url_list;
  const info_data = Text.info_data;
  const text_data = Text.text_data;
  const [count, setCount] = useState(0);


  const text = text_data.map((t, index) => {
    return (
        <div className="text-box">
            <p key={index}>{t.content}</p>
        </div>
    )

  });

  const info = info_data.map((i, index) => {
      return (
          <div>                
              <table>
                  <thead>
                      <tr className="Home__table_tr" key={index} >
                          <th className="Home__table_td">{i.id}</th>
                          <td className="Home__table_th">{i.content}</td>
                      </tr>       
                  </thead>
              </table>
          </div>
      )
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((count) => {
        return count >= image_list.length - 1 ? 0 : count + 1;
      });
    }, 3000);
    return () => {
      clearInterval(interval);
    };
  });

  const slide = image_list.map((image, index) => {
    return (      
      <CSSTransition
        key={index}
        timeout={5000}
        in={index === count}
        classNames="fade"
        unmountOnExit
      >
        <div style={{ backgroundImage: `url(${image})` }} />
      </CSSTransition>
    );
  });

  return (
      <div className="Home__body">

          <div className="slide"> 
              <section className={styles.showcase}>
                  {slide}
              </section>
          </div>

          <div className="about">
              <div className="text__box">
                  <h2>当店の特徴</h2>
                  {text}
              </div>
              
              <div className="info__box">
                  <h2>ベルミート</h2>
                  {info}
              </div>
              
          </div>
      </div>
    );
};

export default Home;
