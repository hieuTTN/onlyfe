import { useState, useEffect } from 'react'
import ReactPaginate from 'react-paginate';
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AsyncSelect from 'react-select/async';


function EmployeeFaculty(){

    return (
        <div>
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
                            <th>Tên khoa</th>
                            <th>Sinh viên đã có lớp</th>
                            <th>Sinh viên chưa có lớp</th>
                            <th class="sticky-col">Hành động</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>khoa cntt</td>
                            <td>4000</td>
                            <td>400</td>
                            <td class="sticky-col">
                                <i data-bs-toggle="modal" data-bs-target="#listSubject" className='fa fa-edit iconaction'></i>
                            </td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>khoa cntt</td>
                            <td>4000</td>
                            <td>400</td>
                            <td class="sticky-col">
                                <i data-bs-toggle="modal" data-bs-target="#listSubject" className='fa fa-edit iconaction'></i>
                            </td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>khoa cntt</td>
                            <td>4000</td>
                            <td>400</td>
                            <td class="sticky-col">
                                <i data-bs-toggle="modal" data-bs-target="#listSubject" className='fa fa-edit iconaction'></i>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="modal fade" id="listSubject" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="false">
            <div class="modal-dialog modal-xl">
                <div class="modal-content">
                    <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Danh sách môn học</h5> <button id='btnclosemodal' type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button></div>
                    <div class="modal-body row">
                        <div className='col-sm-4'>
                            <form method='post'>
                                <input id='idfaculty' type='hidden'/>
                                <label>Chọn môn học</label>
                                <AsyncSelect  name='subject'
                                isMulti
                                placeholder="Chọn môn học"/>
                                <br/><br/><button className='btn btn-primary form-control'>Thêm vào khoa</button>
                            </form>
                        </div>
                        <div className='col-sm-8'>
                            <table class="table table-striped tablefix">
                                <thead class="thead-tablefix">
                                    <tr>
                                        <th>Mã môn học</th>
                                        <th>Tên môn học</th>
                                        <th>Số tín chỉ</th>
                                        <th class="sticky-col">Hành động</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>TH01001</td>
                                        <td>Lập trình hướng đối tượng</td>
                                        <td>3</td>
                                        <td class="sticky-col">
                                            <i className='fa fa-trash iconaction'></i>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>TH01001</td>
                                        <td>Lập trình hướng đối tượng</td>
                                        <td>3</td>
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
    </div>
    );
}

export default EmployeeFaculty;