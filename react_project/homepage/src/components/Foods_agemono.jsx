import React from 'react';
import images from "../assets/img/images.json";

const Foods_agemono = () => {

  const agemono_data = images.agemono_list;
  const agemono = agemono_data.map((i) => {
      return (
          <table className="image__table">
              <tr className="image__table_tr">
                  <th className="image__table_th">
                      <img className="table_image" src={i.id} alt="icon" />
                  </th>
                  <td className="image__table_td">
                      <p>{i.content}</p>
                  </td>
              </tr>
          </table>
      )
  })

return (

              <div className="commodity-container">
                  {agemono}
              </div>
     
  )        
}

export default Foods_agemono