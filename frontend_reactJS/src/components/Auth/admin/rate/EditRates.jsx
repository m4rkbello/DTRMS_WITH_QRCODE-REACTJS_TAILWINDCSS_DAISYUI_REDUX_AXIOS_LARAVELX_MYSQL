import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
// ICONS
import { FcFolder, FcOpenedFolder, FcPrevious, FcOk } from "react-icons/fc";
// REDUX ACTIONS
import { fetchRates, updateRate } from '../../../redux/actions/rateAction';

const EditRates = ({ fetchRates, updateRate, ratesData, loading }) => {
  const { id } = useParams(); // Destructure `id` from `useParams`
  const numericId = parseInt(id, 10); // Convert the id to a number
  console.log("DATA SA ratesData", ratesData);

  useEffect(() => {
    fetchRates(); // Fetch all rates when the component mounts
  }, [fetchRates]);

  // Filter the ratesData based on the numeric id
  const filteredRates = ratesData.filter(rate => rate.id === numericId);
  console.log("DATA SA filteredRates", filteredRates);

  return (
    <div className='h-full max-h-full w-full max-w-full glass mx-auto p-4 shadow-slate-900/100'>
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
              <Link to="/employee/dashboard" className='flex items-center hover:text-white'>
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

      <div>
        {loading ? (
          <p>Loading...</p>
        ) : filteredRates.length > 0 ? (
          <div className="modal-action">
          <form method="dialog" 
          // onSubmit={handleSubmitAddRateData}
          >
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 glass" 
            // onClick={onClose}
            >✕</button>
            <div className="grid grid-cols-3 gap-8">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black text-2xl">Rate Name</span>
                </label>
                <input
                  name="rate_name"
                  type="text"
                  // value={formData.rate_name}
                  // onChange={handleChange}
                  placeholder="Enter rate name"
                  className="input input-bordered glass shadow-2xl text-2xl text-black border-glass shadow-slate-900/100 custom-placeholder-text-color"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black text-2xl">Rate Amount</span>
                </label>
                <input
                  name="rate_amount_per_day"
                  type="text"
                  // value={formData.rate_amount_per_day}
                  // onChange={handleChange}
                  placeholder="Enter rate amount"
                  className="input input-bordered shadow-3xl glass text-2xl text-black border-1 border-glass shadow-slate-900/100 custom-placeholder-text-color"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black text-2xl">Rate Details</span>
                </label>
                <input
                  name="rate_details"
                  type="text"
                  // value={formData.rate_details}
                  // onChange={handleChange}
                  placeholder="Enter rate details"
                  className="input input-bordered shadow-2xl glass text-2xl text-black border-1 border-glass shadow-slate-900/100 custom-placeholder-text-color"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black text-2xl">Rate Description</span>
                </label>
                <input
                  name="rate_description"
                  type="text"
                  // value={formData.rate_description}
                  // onChange={handleChange}
                  placeholder="Enter rate description"
                  className="input input-bordered shadow-2xl glass text-2xl text-black border-1 border-glass shadow-slate-900/100 custom-placeholder-text-color"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black text-2xl">Rate Department</span>
                </label>
                <select
                  name="rate_department_id"
                  // value={formData.rate_department_id}
                  // onChange={handleChange}
                  className="input input-bordered shadow-2xl glass text-2xl text-black border-1 border-glass rounded-se-3xl shadow-slate-900/100 custom-placeholder-text-color"
                >
                  <option value="">Select Department</option>
                  {/* {departments.map((department) => (
                    <option key={department.id} value={department.id}>
                      {department.department_name}
                    </option>
                  ))} */}

                </select>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-glass text-2xl">Rate Status</span>
                </label>
                <select
                  name="rate_status_id"
                  // value={formData.rate_status_id}
                  // onChange={handleChange}
                  className="input input-bordered shadow-2xl glass text-2xl text-black border-1 border-glass rounded-se-3xl shadow-slate-900/100 custom-placeholder-text-color"
                >
                  <option value="1">Active</option>
                  <option value="0">Inactive</option>
                </select>
              </div>
            </div>
            <br />
            <div className="flex">
              <div>
                <button
                  type="submit"
                  className="btn glass hover:text-white hover:bg-indigo-400"
                  style={{ fontSize: "40px", color: "transparent", border: "none", backgroundColor: "transparent" }}
                >
                  <FcOk type="submit" style={{ fontSize: "40px", color: "transparent" }} className='text-black hover:text-black' />
                </button>
              </div>
            </div>
          </form>
        </div>
        ) : (
          <p>No rates found for the provided ID.</p>
        )}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    ratesData: state.rateState.rates, // Destructure the rates data from state
    loading: state.rateState.loading, // Destructure the loading state
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchRates: () => dispatch(fetchRates()), // Dispatch fetchRates action
    updateRate: (UpdateRateData) => dispatch(updateRate(UpdateRateData)), // Dispatch updateRate action
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EditRates);
