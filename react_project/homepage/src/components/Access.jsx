import React from 'react';

const Access = () => {
  return (
      <div className="access-box">
          <div className="access__table-box">
              <table className="access__table">
                    <p>アクセス</p>
                    <tr>
                        <th>
                            <p>住所</p>
                        </th>
                        <td>
                            <p>福島県いわき市四倉町字5丁目3番地2</p>                        
                        </td>
                    </tr>

                    <tr>                        
                        <th>
                            <p>交通手段</p>
                        </th>
                        <td>
                            <ul>
                                <li>最寄りのJR 四ツ倉駅から徒歩で15分</li>
                                <p>
                                    四ツ倉駅を左方向へ出てマルト方面に歩いていきます。マルト正面の駐車場にある通りをまっすぐ進むと四ツ倉小学校があります。そのまま直進してローソン、市役所がある通りから当店の看板が見えます。
                                </p>
                                <li>いわき駅から車で約30分</li>                              
                            </ul>                        
                        </td>
                    </tr>
              </table>

          </div>


          <div>
            {/* <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3181.780769369812!2d140.9876059153103!3d37.11033575787979!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x602117931c050f31%3A0x43ce35b6c5b18438!2z44OZ44Or44Of44O844OI!5e0!3m2!1sja!2sjp!4v1630304205369!5m2!1sja!2sjp" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy">
            </iframe> */}
          </div>
      </div>
  )
}

export default Access;