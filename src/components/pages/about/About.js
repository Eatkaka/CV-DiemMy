import React from 'react';

export default function About() {
  return (
    <div>
      
      <div className="card">
        <div className="card-content">
          <h6 className="mt-bottom">
            <strong>GIỚI THIỆU BẢN THÂN</strong>
          </h6>
          <p>
         Tuy chưa có nhiều kinh nghiệm nhưng tôi là một người có trách nhiệm trong công việc,ưa điểm lớn nhất
         là học hỏi và tiếp thu nhanh, tính trầm ổn nên tôi biết lắng nghe và tiếp thu thừa nhận sai lầm để sửa 
         đổi tốt hơn. Tôi hứa sẽ nghiêm túc trong công việc không những hoàn thành công việc được giao mà tôi sẽ
         cố gắng làm tốt hơn khi có thể.
          </p>
        </div>
        <div className="card-action">
          <h6>
            <strong>THÔNG TIN CÁ NHÂN</strong>
          </h6>
          <div className="row mt">
            <div className="col xl6 l6 m6 s12">
              <p>
                <strong>Address:</strong> 458 tôn đức thắng, Liên Chiểu, Đà Nẵng
              </p>
              <p>
                <strong>Email:</strong> vannhiliem@gmail.com
              </p>
              <p>
                <strong>Phone:</strong> 0926710381
              </p>
            </div>
            <div className="col xl6 l6 m6 s12">
              <p>
                <strong>Ngôn ngữ chính:</strong> Tiếng Việt
              </p>
              <p>
                <strong>Ngôn ngữ thứ hai:</strong> Tiếng Anh
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
