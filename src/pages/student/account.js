import { useState, useEffect } from 'react'
import ReactPaginate from 'react-paginate';
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AsyncSelect from 'react-select/async';
import defaulavt from '../../assest/images/avatar.jpg'



function MyAccountInfor(){
    return (
        <div className='container contentmain'>
            <h3 className='text-center'>THÔNG TIN SINH VIÊN</h3><br/>
            <div className='row'>
                <div className='col-sm-3'>
                    <div className='imgdivavt'>
                        <img className='avataracc' src={defaulavt}/>
                    </div>
                    <br/><span className='bold'>Số cmnd/ cccd</span>
                    <div className='blockcccd'>-0238492234234</div>
                </div>
                <div className='col-sm-9 row'>
                    <div className='col-sm-4'>
                        <label>Họ và tên</label>
                        <div className='blockcccd'>Lê tuấn tú</div>
                        <label>Ngày sinh</label>
                        <div className='blockcccd'>19-09-2003</div>
                        <label>Năm tốt nghiệp</label>
                        <div className='blockcccd'>2024</div>
                        <label>Dân tộc</label>
                        <div className='blockcccd'>Kinh</div>
                    </div>
                    <div className='col-sm-4'>
                        <label>Lớp</label>
                        <div className='blockcccd'>K66CNTT</div>
                        <label>Giới tính</label>
                        <div className='blockcccd'>NAM</div>
                        <label>Loại tốt nghiệp</label>
                        <div className='blockcccd'>Khá</div>
                    </div>
                    <div className='col-sm-4'>
                        <label>Mã sinh viên</label>
                        <div className='blockcccd'>666666</div>
                        <label>Ngành học</label>
                        <div className='blockcccd'>Công nghệ thông tin</div>
                        <label>Mã trường thpt</label>
                        <div className='blockcccd'>92472</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyAccountInfor;