import { useState, useEffect } from 'react'
import ReactPaginate from 'react-paginate';
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AsyncSelect from 'react-select/async';


function LoadCurriculum(){
   
    return (
        <div className='container'>
            <div className='col-sm-6 std-block'>
                <div className='inner-std-block'>
                    <table className='table'>
                        <tr>
                            <td>Mã sinh viên</td>
                            <td className='textblod'>666666</td>
                        </tr>
                        <tr>
                            <td>Tên sinh viên</td>
                            <td className='textblod'>Lê tuấn tú</td>
                        </tr>
                        <tr>
                            <td>Giới tính</td>
                            <td>Nam</td>
                        </tr>
                        <tr>
                            <td>Quê quán</td>
                            <td>Hà nội</td>
                        </tr>
                        <tr>
                            <td>Lớp</td>
                            <td>K66CNTT</td>
                        </tr>
                        <tr>
                            <td>Ngành</td>
                            <td className='textblod'>Công nghệ thông tin</td>
                        </tr>
                        <tr>
                            <td>Khóa học</td>
                            <td className='textblod'>2020-2024</td>
                        </tr>
                        <tr>
                            <td>Hệ đào tạo</td>
                            <td>Đại học chính quy</td>
                        </tr>
                    </table>
                </div>
            </div>

            <div className='ctdt-block'>
                <input id='searchtable' className='inputsearchdt' placeholder='Tìm kiém'/>
                <table className='table tablectdt'>
                    <thead className='theadblue'>
                        <tr>
                            <th>STT</th>
                            <th>Mã môn học</th>
                            <th>Tên môn học</th>
                            <th>Số TC</th>
                            <th>Số LT</th>
                            <th>Số TH</th>
                            <th>Số BT</th>
                            <th>Môn tiên quyết</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>TH01111</td>
                            <td>Lập trình hướng đối tượng</td>
                            <td>3</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>TH01111</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>TH01111</td>
                            <td>Lập trình hướng đối tượng</td>
                            <td>3</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>TH01111</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>TH01111</td>
                            <td>Lập trình hướng đối tượng</td>
                            <td>3</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>TH01111</td>
                        </tr>
                        <tr>
                            <td>1 up</td>
                            <td>TH01111</td>
                            <td>Lập trình hướng đối tượng</td>
                            <td>3</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>TH01111</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>TH01111</td>
                            <td>Lập trình hướng đối tượng</td>
                            <td>3</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>TH01111</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default LoadCurriculum;