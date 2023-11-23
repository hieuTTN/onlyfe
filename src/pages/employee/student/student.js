import { useState, useEffect } from 'react'
import ReactPaginate from 'react-paginate';
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AsyncSelect from 'react-select/async';
import logocard from '../../../assest/images/logo.png'


function EmployeeStudent(){
    return (
        <div>
        <div className="col-sm-12 header-sp">
                <div className="row">
                    <div className="col-md-3 col-sm-6 col-6">
                        <a href='add-student' className='btn btn-primary'>Thêm sinh viên</a>
                    </div>
                    <div className="col-md-3 col-sm-6 col-6">
                        <button data-bs-toggle="modal" data-bs-target="#chooseFile" className='btn btn-primary'><i className='fa fa-file-excel'></i> Chọn file excel</button>
                    </div>
                    <div className="col-md-3 col-sm-6 col-6">
                        <AsyncSelect
                        name='faculty'
                        placeholder='chọn khoa'/>
                    </div>
                    <div className="col-md-3 col-sm-6 col-6">
                        <AsyncSelect
                        name='classes'
                        placeholder='chọn lớp'/>
                    </div>
                </div>
            </div>
            <div className="col-sm-12">
                <div className="wrapper">
                    <div className="headertable">
                        <div className="divsearchtb">
                            <label className='lbsearch'>search:</label>
                            <input id="searchtable" placeholder="tìm kiếm" className="inputsearchtable" />
                        </div>
                    </div>
                    <table className="table table-striped tablefix">
                        <thead className="thead-tablefix">
                            <tr>
                                <th>id</th>
                                <th>Mã sinh viên</th>
                                <th>Họ tên</th>
                                <th>Email</th>
                                <th>Ngày sinh</th>
                                <th>Giới tính</th>
                                <th>Số điện thoại</th>
                                <th>Địa chỉ</th>
                                <th>Lớp</th>
                                <th>Khoa</th>
                                <th className="sticky-col">Hành động</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>2</td>
                                <td className='stdcode' 
                                data-bs-toggle="modal" data-bs-target="#studentinfor">
                                    666666@sv.vnua.edu.vn
                                </td>
                                <td>Lê hải anh</td>
                                <td> 666666@sv.vnua.edu.vn</td>
                                <td>6-9-2003</td>
                                <td>Nam</td>
                                <td>092374234</td>
                                <td>Hà nội</td>
                                <td>K66cntt</td>
                                <td>Công nghệ thông tin</td>
                                <td className="sticky-col">
                                    <a href={"add-student"}><i className='fa fa-edit iconaction'></i></a>
                                    <i className='fa fa-trash iconaction'></i>
                                    <i className='fa fa-eye iconaction'></i>
                                    <i className='fa fa-print iconaction'></i>
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
            <div className="modal fade" id="studentinfor" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="false">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Chi tiết chúng tuyển</h5> <button id='btnclosemodal' type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button></div>
                        <div className="modal-body row">
                        <table className="table table-striped tablefix">
                            <thead className="thead-tablefix">
                                <tr>
                                    <th>Tổ hợp chúng tuyển</th>
                                    <th>Thứ tự nguyện vọng</th>
                                    <th>Môn trúng tuyển</th>
                                    <th>Điểm ưu tiên</th>
                                    <th>Khu vực ưu tiên</th>
                                    <th>Năm tốt nghiệp</th>
                                    <th>Lực học</th>
                                    <th>Hạnh kiểm</th>
                                    <th>Điểm trung bình</th>
                                    <th>Mã tỉnh</th>
                                    <th>Mã trường</th>
                                    <th>Nơi sinh</th>
                                    <th>Dân tộc</th>
                                </tr>
                            </thead>
                            <tbody>
                                
                            </tbody>
                        </table>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="chooseFile" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="false">
                <div className="modal-dialog modal-md">
                    <div className="modal-content">
                        <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Chọn file để import</h5> <button id='btnclosemodal' type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button></div>
                        <div className="modal-body row">
                            <label>Năm học</label>
                            <input id='curyear' type='number' className='form-control'/>
                            <label>Chọn file excel</label>
                            <input id='fileEx' type='file' className='form-control'/>
                            <br/><br/>
                            <div id="loading">
                                <div className="bar1 bar"></div>
                            </div>
                            <br/><br/><br/><button className='btn btn-primary form-control'>Nhập sinh viên</button>
                        </div>
                    </div>
                </div>
            </div>

    </div>
    );
}

export default EmployeeStudent;