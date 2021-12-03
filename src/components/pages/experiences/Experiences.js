import React from 'react';

export default function Experiences() {
  return (
    <div>
      <div className="card">
        <div className="card-content">
          <h6>
            <strong>Kinh nghiệm làm dự án</strong>
          </h6>
          <div className="row mt-top">
            <div className="col xl4 l4 m6 mb5 s12">
              <p className="teal year_exp white-text">
            <span>Tên dự án: UI Web winter</span>   <br/>           
            <span>Ngôn ngữ : Jquery,javascript,html,css</span>  <br/>  
            <span>Tích hợp : Font awesome,Google Font,GitHub,Photoshop</span>  
            </p>
         
            </div>
            <div className="col xl8 l8 m6 s12">
              <blockquote className="no-pad">
                <h6 className="no-pad mt-bottom">
                <span>Mô tả</span> <br/>
                <strong>Link demo</strong><br/>
                <a href="">https://eatkaka.github.io/winter/</a><br/>
                <strong>Link github</strong><br/>
                <a href="">https://github.com/Eatkaka/winter</a>
                </h6>
              </blockquote>
            </div>
          </div>
          <div className="row mt-top">
            <div className="col xl4 l4 m6 s12">
            <p className="teal year_exp white-text">
            <span>Tên dự án: UI Web EngLish</span>   <br/>           
            <span>Ngôn ngữ : Jquery,html,css</span>  <br/>  
            <span>Tích hợp : Font awesome,Google Font,GitHub,Photoshop</span>  
            </p>
         
            </div>
            <div className="col xl8 l8 m6 s12">
              <blockquote className="no-pad">
                <h6 className="no-pad mt-bottom">
                <span>Mô tả</span> <br/>
                <strong>Link demo</strong><br/>
                <a href="">https://eatkaka.github.io/WebEngLish/</a><br/>
                <strong>Link github</strong><br/>
                <a href="">https://github.com/Eatkaka/WebEngLish</a>
                </h6>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
