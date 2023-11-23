import { useState, useEffect } from 'react'
import ReactPaginate from 'react-paginate';
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function EmployeeSubject(){
    return (
        <div>
        <div class="col-sm-12 header-sp">
                <div class="row">
                    <div class="col-md-3 col-sm-6 col-6">
                        <a href='add-subject' className='btn btn-primary'>Thêm môn học</a>
                    </div>
                    <div class="col-md-3 col-sm-6 col-6">
                        <button className='btn btn-primary'><i className='fa fa-file-excel'></i> Chọn file excel</button>
                        <input accept='.xlsx,.csv' id='fileEx' type="file" className='unvisible'/>
                    </div>
                </div>
                <div id="loading">
                    <div class="bar1 bar"></div>
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
                                <th>Tên môn học</th>
                                <th>Mã môn học</th>
                                <th>Môn tiên quyết</th>
                                <th>Số tín chỉ</th>
                                <th>Số buổi thực hành</th>
                                <th>Số buổi lý thuyểt</th>
                                <th>Số buổi bài tập</th>
                                <th>Số buổi tự học</th>
                                <th class="sticky-col">Hành động</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Lập trình java</td>
                                <td>TH03045</td>
                                <td>TH01001</td>
                                <td>3</td>
                                <td>1</td>
                                <td>1</td>
                                <td>1</td>
                                <td>1</td>
                                <td class="sticky-col">
                                    <a href={"add-subject"}><i className='fa fa-edit iconaction'></i></a>
                                    <i className='fa fa-trash iconaction'></i>
                                </td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Lập trình java</td>
                                <td>TH03045</td>
                                <td>TH01001</td>
                                <td>3</td>
                                <td>1</td>
                                <td>1</td>
                                <td>1</td>
                                <td>1</td>
                                <td class="sticky-col">
                                    <a href={"add-subject"}><i className='fa fa-edit iconaction'></i></a>
                                    <i className='fa fa-trash iconaction'></i>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <ReactPaginate 
                marginPagesDisplayed={2} 
                pageCount={6} 
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

export default EmployeeSubject;