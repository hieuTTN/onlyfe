import {toast } from 'react-toastify';
import { useState, useEffect } from 'react'
import Select from 'react-select';
import AsyncSelect from 'react-select/async';
import 'react-toastify/dist/ReactToastify.css';
var token = localStorage.getItem('token');



const AdminAddEmployee = ()=>{

    return(
        <form className='row' method='post'>
            <h4>Thêm/ cập nhật môn học</h4>
            <div className="col-sm-5">
                <label className="lb-form">Tên môn học</label>
                <input name="subname" className="form-control" />
                <label className="lb-form">Mã môn học</label>
                <input name="subjectCode" className="form-control" />
                <label className="lb-form">Số tín chỉ</label>
                <input name="creditNum" className="form-control" />
                <label className="lb-form">Số buổi lý thuyết</label>
                <input name="theoryNum" className="form-control" />
                <label className="lb-form">Số buổi bài tập</label>
                <input name="numExercise" className="form-control" />
            </div>
            <div className="col-sm-5">
                <label className="lb-form">Số buổi thực hành</label>
                <input name="practicalNum" className="form-control" />
                <label className="lb-form">Số buổi tự học</label>
                <input name="numSelfLearning" className="form-control" />
                <label className="lb-form">Môn học tiên quyết</label>
                <AsyncSelect  name='subjectParent' 
                />
                <br/>
                <button className='btn btn-primary form-control'>Thêm/ cập nhật môn học</button>
            </div>
        </form>
    );
}

export default AdminAddEmployee;