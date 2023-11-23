import { useState, useEffect } from 'react'
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import defaulavt from '../../assest/images/avatar.jpg'

var token = localStorage.getItem('token');

function MyAccountInfor(){

    return (
        <div className='container contentmain'>
            <h3 className='text-center'>THÔNG TIN GIẢNG VIÊN</h3><br/>
        <Tabs >
            <TabList className='tablists'>
            <Tab className='tab-item'>Thông tin chung</Tab>
            <Tab className='tab-item'>Lớp giảng dạy</Tab>
            </TabList>

            <TabPanel className='tab-panel'>
            <div className='row'>
                <div className='col-sm-3'>
                    <div className='imgdivavt'>
                        <img className='avataracc' src={defaulavt}/>
                    </div>
                    <br/><span className='bold'>Số cmnd/ cccd</span>
                    <div className='blockcccd'>92130472384234</div>
                </div>
                <div className='col-sm-9 row'>
                    <div className='col-sm-4'>
                        <label>Họ và tên</label>
                        <div className='blockcccd'>Lê tuấn tú</div>
                        <label>Ngày sinh</label>
                        <div className='blockcccd'>19-9-2000</div>
                        <label>Email</label>
                        <div className='blockcccd'>gv@vnua.edu.vn</div>
                    </div>
                    <div className='col-sm-4'>
                        <label>Mã giảng viên</label>
                        <div className='blockcccd'>CNP08</div>
                        <label>Giới tính</label>
                        <div className='blockcccd'>Nam</div>
                        <label>Địa chỉ</label>
                        <div className='blockcccd'>Hà nội</div>
                    </div>
                    <div className='col-sm-4'>
                        <label>Ngành dạy</label>
                        <div className='blockcccd'>Công nghệ thông tin</div>
                        <label>Chuyên môn</label>
                        <div className='blockcccd'>Toán tin</div>
                    </div>
                </div>
            </div>
            </TabPanel>
            <TabPanel className='tab-panel'>
                <br/>
                <table className='table'>
                    <thead className='theadblue'>
                        <tr>
                            <th>STT</th>
                            <th>Tên lớp</th>
                            <th>Khoa</th>
                            <th>Danh sách</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>K66CNTT</td>
                            <td>Công nghệ thông tin</td>
                            <td><span data-bs-toggle="modal" data-bs-target="#liststudent" className='viewlist'>Xem danh sách</span></td>
                        </tr>
                    </tbody>
                </table>
            </TabPanel>
        </Tabs>
        <div class="modal fade" id="liststudent" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="false">
                <div class="modal-dialog modal-xl">
                    <div class="modal-content">
                        <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Chọn file để import</h5> <button id='btnclosemodal' type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button></div>
                        <div class="modal-body row">
                        <table class="table table-striped tablefix">
                        <thead class="thead-tablefix">
                            <tr>
                                <th>id</th>
                                <th>Mã sinh viên</th>
                                <th>Họ tên</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>666666</td>
                                <td>Lê tuấn tú</td>
                                <td>666666@sv.vnua.edu.vn</td>
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

export default MyAccountInfor;