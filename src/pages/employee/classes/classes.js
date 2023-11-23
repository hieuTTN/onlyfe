import { useState, useEffect } from 'react'
import ReactPaginate from 'react-paginate';
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AsyncSelect from 'react-select/async';



function EmployeeClass(){

    return (
        <div>
        <div class="col-sm-12 header-sp">
            <div class="row">
                <div className="col-md-3 col-sm-6 col-6">
                    <a href='add-class' className='btn btn-primary'>Thêm lớp</a>
                </div>
                <div className='col-md-4 col-sm-6 col-6'>
                <AsyncSelect  name='faculty'
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
                            <th>Tên lớp</th>
                            <th>Giảng viên</th>
                            <th>Khoa</th>
                            <th class="sticky-col">Hành động</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>lớp k62cntt</td>
                            <td>gv hoàng minh tuấn</td>
                            <td>Khoa công nghệ tt</td>
                            <td class="sticky-col">
                                <a href={"add-class"}><i className='fa fa-edit iconaction'></i></a>
                                <i className='fa fa-trash iconaction'></i>
                                <i data-bs-toggle="modal" data-bs-target="#liststudent" className='fa fa-eye iconaction'></i>
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
        <div class="modal fade" id="liststudent" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="false">
                <div class="modal-dialog modal-xl">
                    <div class="modal-content">
                        <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Danh sách sinh viên</h5> <button id='btnclosemodal' type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button></div>
                        <div class="modal-body row">
                        <table class="table table-striped tablefix">
                        <thead class="thead-tablefix">
                            <tr>
                                <th>id</th>
                                <th>Mã sinh viên</th>
                                <th>Họ tên</th>
                                <th>Email</th>
                                <th class="sticky-col">Hành động</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>666666@sv.vnua.edu.vn</td>
                                <td>lê minh tuấn</td>
                                <td>666666@sv.vnua.edu.vn</td>
                                <td class="sticky-col">
                                    <i className='fa fa-trash iconaction'></i>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                        </div>
                    </div>
                </div>
            </div>
    </div>
    );
}

export default EmployeeClass;