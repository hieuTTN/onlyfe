import { useState, useEffect } from 'react'
import ReactPaginate from 'react-paginate';
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AdminEmployee = ()=>{

    return(
        <div>
        <div class="col-sm-12 header-sp">
                <div class="row">
                    <div class="col-md-3 col-sm-6 col-6">
                        <a href='add-employee' className='btn btn-primary'>Thêm nhân viên</a>
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
                                <th>Họ tên</th>
                                <th>Tên đăng nhập</th>
                                <th>Ngày tạo</th>
                                <th>Ngày sinh</th>
                                <th>Giới tính</th>
                                <th>Email</th>
                                <th>Số điện thoại</th>
                                <th>Căn cước</th>
                                <th class="sticky-col">Hành động</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Lê minh tú</td>
                                <td>tulm@gmail.com</td>
                                <td>15-11-2023</td>
                                <td>15-11-2023</td>
                                <td>Nam</td>
                                <td>tulm@gmail.com</td>
                                <td>092738423</td>
                                <td>932472834242738</td>
                                <td class="sticky-col">
                                    <a href="add-employee"><i className='fa fa-edit iconaction'></i></a>
                                    <i className='fa fa-trash iconaction'></i>
                                </td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Lê minh tú</td>
                                <td>tulm@gmail.com</td>
                                <td>15-11-2023</td>
                                <td>15-11-2023</td>
                                <td>Nam</td>
                                <td>tulm@gmail.com</td>
                                <td>092738423</td>
                                <td>932472834242738</td>
                                <td class="sticky-col">
                                    <a href="add-employee"><i className='fa fa-edit iconaction'></i></a>
                                    <i className='fa fa-trash iconaction'></i>
                                </td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Lê minh tú</td>
                                <td>tulm@gmail.com</td>
                                <td>15-11-2023</td>
                                <td>15-11-2023</td>
                                <td>Nam</td>
                                <td>tulm@gmail.com</td>
                                <td>092738423</td>
                                <td>932472834242738</td>
                                <td class="sticky-col">
                                    <a href="add-employee"><i className='fa fa-edit iconaction'></i></a>
                                    <i className='fa fa-trash iconaction'></i>
                                </td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Lê minh tú</td>
                                <td>tulm@gmail.com</td>
                                <td>15-11-2023</td>
                                <td>15-11-2023</td>
                                <td>Nam</td>
                                <td>tulm@gmail.com</td>
                                <td>092738423</td>
                                <td>932472834242738</td>
                                <td class="sticky-col">
                                    <a href="add-employee"><i className='fa fa-edit iconaction'></i></a>
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

export default AdminEmployee;