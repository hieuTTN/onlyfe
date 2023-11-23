import { useState, useEffect } from 'react'
import ReactPaginate from 'react-paginate';
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AsyncSelect from 'react-select/async';
import Select from 'react-select';



function EmployeeTeacher(){
    
    return (
        <div>
        <div class="col-sm-12 header-sp">
                <div class="row">
                    <div class="col-md-3 col-sm-6 col-6">
                        <a href='add-teacher' className='btn btn-primary'>Thêm giảng viên</a>
                    </div>
                    <div className='col-md-4 col-sm-6 col-6'>
                    <Select name='faculty'
                    placeholder="Lọc theo khoa"/>
                    </div>
                </div>
            </div>
            <div class="col-sm-12">
                <div class="wrapper">
                    <div class="headertable">
                        <div class="divsearchtb">
                            <label className='lbsearch'>search:</label>
                            <input id="searchtable" placeholder="tìm kiếm" class="inputsearchtable" />
                        </div>
                    </div>
                    <table class="table table-striped tablefix">
                        <thead class="thead-tablefix">
                            <tr>
                                <th>id</th>
                                <th>Mã giảng viên</th>
                                <th>Họ tên</th>
                                <th>Ngày sinh</th>
                                <th>Giới tính</th>
                                <th>Email</th>
                                <th>Số điện thoại</th>
                                <th>Địa chỉ</th>
                                <th>Số cccd</th>
                                <th>Khoa</th>
                                <th class="sticky-col">Hành động</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>gv1@gmail.com</td>
                                <td>giảng viên 1</td>
                                <td>10-10-1998</td>
                                <td>Nam</td>
                                <td>gv1@gmail.com</td>
                                <td>028347823</td>
                                <td>Trâu quỳ</td>
                                <td>2384923462842342</td>
                                <td>Công nghệ thông tin</td>
                                <td class="sticky-col">
                                    <a href={"add-teacher"}><i className='fa fa-edit iconaction'></i></a>
                                    <i className='fa fa-trash iconaction'></i>
                                </td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>gv1@gmail.com</td>
                                <td>giảng viên 1</td>
                                <td>10-10-1998</td>
                                <td>Nam</td>
                                <td>gv1@gmail.com</td>
                                <td>028347823</td>
                                <td>Trâu quỳ</td>
                                <td>2384923462842342</td>
                                <td>Công nghệ thông tin</td>
                                <td class="sticky-col">
                                    <a href={"add-teacher"}><i className='fa fa-edit iconaction'></i></a>
                                    <i className='fa fa-trash iconaction'></i>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <ReactPaginate 
                marginPagesDisplayed={2} 
                pageCount={5} 
                containerClassName={'pagination'} 
                pageClassName={'page-item'} 
                pageLinkClassName={'page-link'}
                previousClassName='page-item'
                previousLinkClassName='page-link'
                nextClassName='page-item'
                nextLinkClassName='page-link'
                breakClassName='page-item'
                breakLinkClassName='page-link'  
                activeClassName='active'/>
            </div>
    </div>
    );
}

export default EmployeeTeacher;