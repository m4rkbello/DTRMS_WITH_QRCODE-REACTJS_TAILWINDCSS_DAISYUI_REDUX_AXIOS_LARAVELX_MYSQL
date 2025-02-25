/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
//ICONS
import { FcFolder, FcOpenedFolder, FcPlus, FcCancel, FcOk, FcSalesPerformance, FcDepartment, FcSearch, FcPrevious, FcViewDetails, FcEmptyTrash, FcNext } from "react-icons/fc";
//REDUXISM
import { fetchDepartments, updateDepartment } from '../../../redux/actions/departmentAction';
//MODALS
//TOASTER
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//DISTRUCTURING
const EditDepartment = ({ fetchDepartments, updateDepartment,  departmentData, loading }) => {
  //id sa rate.id
  const { departmentId } = useParams();

  const [formDataUpdateDepartment, setFormDataUpdateDepartment] = useState(null);
  
  useEffect(() => {
    fetchDepartments();
  }, [fetchDepartments]);

  
  useEffect(() => {
    if (departmentData.dedepartment.data.details && !loading) {
      const departmentItem = departmentData.department.data.details.find(department => department.id === parseInt(departmentId, 10));
      if (departmentItem) {
        setFormDataUpdateDepartment(departmentItem);
      } else {
        setFormDataUpdateDepartment(null);
      }
    }
  }, [departmentData, departmentId, loading]);

  const handleChange = (e) => {
    setFormDataUpdateDepartment({
      ...formDataUpdateDepartment,
      [e.target.name]: e.target.value,
    });
  };

  //function para e update ang data
  const handleSubmitUpdateDepartment = async (e) => {
    e.preventDefault();
    try {
      await updateDepartment(departmentId, formDataUpdateDepartment);
    } catch (error) {
      console.log("DATA SA error handleSubmitUpdateRate",error);
    }
  };

  return (
    <div className='h-full max-h-full w-full max-w-full glass mx-auto p-4 shadow-slate-900/100 rounded-t-lg rounded-b-lg rounded-l-lg rounded-r-lg'>
      <ToastContainer />
      <div className="flex flex-col bg-transparent mb-10 shadow-slate-900/100">
        <div className="flex items-center text-sm breadcrumbs">
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className='flex items-center hover:text-white'>
                <FcPrevious style={{ height: "2rem", width: "2rem" }} />
                <span className="ml-2">Home</span>
              </Link>
            </li>
            <li>
              <Link to="/admin/departments" className='flex items-center hover:text-white'>
                <FcFolder style={{ height: "2rem", width: "2rem" }} />
                <span className="ml-2">Rates</span>
              </Link>
            </li>
            <li>
              <Link to="" className='flex items-center hover:text-white'>
                <FcOpenedFolder style={{ height: "2rem", width: "2rem" }} />
                <span className="ml-2">Data</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className='glass shadow-slate-900/100'>
        <div className="grid grid-cols-3 items-center mt-10 mb-10 rounded-t-lg rounded-b-lg rounded-l-lg rounded-r-lg">
          <div>
            <span className="inline-grid grid-cols-3 gap-4 py-5">
              <div className="p-3 flex justify-start">
                <input
                  type="text"
                  placeholder="Search"
                  className="border-b-4 bg-transparent text-md rounded text-black custom-placeholder-text-color"
                />
              </div>
              <div className="p-3 flex justify-end">
                <FcSearch style={{ height: "2rem", width: "2rem" }} />
              </div>
            </span>
          </div>
          <div className="pb-5 pt-5 flex justify-center">
            <h3 className="font-bold text-4xl text-black">UPDATE RATE</h3>
          </div>
          <div className="p-3 flex justify-end">
            <FcPlus
              style={{ height: "3rem", width: "3rem" }}
            />
          </div>
        </div>
      </div>

      {loading ? (
        <div className="flex flex-col gap-4 w-full m-30 max-w-5xl ps-2 pe-2 mt-30 mb-30">
          <div className="skeleton h-48 w-full"></div>
          <div className="skeleton h-6 w-36"></div>
          <div className="skeleton h-6 w-full"></div>
          <div className="skeleton h-6 w-full"></div>
        </div>

      ) : !formDataUpdateDepartment ? (
        <div className="w-full max-w-5xl text-center text-lg font-semibold text-gray-500">
          <div className="mockup-browser  border border-t-4 pb-10 pt-10">
            <div className="mockup-browser-toolbar">
              <div className="input text-black-400">https://markbello.com</div>
            </div>
            <div className="flex justify-center text-black px-4 py-16 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
              <span
                style={{ fontSize: '30px', fontWeight: 'Bolder' }}
              >
                <b>
                  AYAW NA PANGITAA ANG WALA!
                </b>
              </span>
            </div>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmitUpdateDepartment}>
          <div className="grid grid-cols-2 gap-6 my-10">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black text-2xl">Rate Name</span>
              </label>
              <input
                type="text"
                className="input input-bordered shadow-2xl glass text-2xl text-black border-1 border-glass rounded-se-3xl shadow-slate-900/100 custom-placeholder-text-color"
                style={{ backgroundColor: 'transparent', color: "black", border: "none" }}
                name="department_name"
                value={formDataUpdateDepartment.department_name || ''}
                onChange={handleChange}
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text text-black text-2xl">Rate Amount</span>
              </label>
              <input
                type="text"
                className="input input-bordered shadow-2xl glass text-2xl text-black border-1 border-glass rounded-se-3xl shadow-slate-900/100 custom-placeholder-text-color"
                name="rate_amount_per_day"
                value={formDataUpdateDepartment.depatment_description || ''}
                onChange={handleChange}
                style={{ backgroundColor: 'transparent', color: "black", border: "none" }}
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text text-glass text-2xl">Rate Status</span>
              </label>
              <select
                name="department_status_id"
                value={formDataUpdateDepartment.department_status_id || '1'}
                onChange={handleChange}
                className="input input-bordered shadow-2xl glass text-2xl text-black border-1 border-glass rounded-se-3xl shadow-slate-900/100 custom-placeholder-text-color"
              >
                <option value="1">Active</option>
                <option value="0">Inactive</option>
              </select>
            </div>

          </div>
          <br />
          <div className="flex">
          <div className='mx-1'>
            <button
            type="submit"
            className="btn glass hover:text-white hover:bg-indigo-400"
            style={{ fontSize: "40px", color: "transparent", border: "none", backgroundColor: "transparent" }}
            >
            <FcOk style={{ fontSize: "40px", color: "transparent" }} className='text-black hover:text-black' />
            </button>
            </div>
            <div className='mx-1'>
            <Link to="/admin/rates">
                <button
                className="btn glass hover:text-white hover:bg-indigo-400"
                style={{ fontSize: "40px", color: "transparent", border: "none", backgroundColor: "transparent" }}
                >
                <FcCancel style={{ fontSize: "40px", color: "transparent" }} className='text-black hover:text-black' />
              </button>
              </Link>
            </div>
          </div>
        </form>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
    return {
      departmentData: state.departmentState,
      loading: state.departmentState.loading,
    }
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
      fetchDepartments: () => dispatch(fetchDepartments()),
      updateDepartment: (departmentId, updateDepartmentData) => dispatch(updateDepartment(departmentId, updateDepartmentData)),
    }
  };

export default connect(mapStateToProps, mapDispatchToProps)(EditDepartment);
