import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaEye } from 'react-icons/fa6';
import { MdAutoDelete } from 'react-icons/md';
import { IoIosPersonAdd } from 'react-icons/io';
import { HiStatusOnline } from 'react-icons/hi';
import { MdOutlineNoAccounts } from 'react-icons/md';
import { RiAccountPinCircleFill } from 'react-icons/ri';

// DEPARTMENT ACTIONS/DISPATCH
import { fetchDepartments } from '../../../redux/actions/departmentAction';

const Department = (props) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredDepartments, setFilteredDepartments] = useState([]);

  useEffect(() => {
    props.fetchDepartments();
  }, []);

  useEffect(() => {
    const allDepartments = getAllDepartments(props?.departmentData?.departments?.data?.department);
    setFilteredDepartments(allDepartments);
  }, [props.departmentData]);

  useEffect(() => {
    const allDepartments = getAllDepartments(props?.departmentData?.departments?.data?.department);
    const filtered = allDepartments.filter(department =>
      department.dept_name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredDepartments(filtered);
  }, [searchTerm]);

  const getAllDepartments = (departmentsArray) => {
    return Array.isArray(departmentsArray) ? departmentsArray : [];
  };



  if (props.loading) {
    return (
      <div>
        <span className="bg-lime-400 loading loading-ball loading-xs"></span>
        <span className="bg-lime-400 loading loading-ball loading-sm"></span>
        <span className="bg-lime-400 loading loading-ball loading-md"></span>
        <span className="bg-lime-400 loading loading-ball loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="hero min-h-screen bg-black rounded-t-lg rounded-b-lg rounded-l-lg rounded-r-lg">
      <div className="overflow-auto max-h-screen">
        <input
          type="text"
          placeholder="Search Departments"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-2 m-2 border border-gray-300 rounded"
          style={{ backgroundColor: "#A3E636", color: "black" }}
        />
        {filteredDepartments.length > 0 ? (
          <table className="table bg-black w-full h-full">
            <thead className="glass">
              <tr>
                <th className="text-1xl text-white">DEPARTMENT NAME</th>
                <th className="text-1xl text-white">DEPARTMENT DESCRIPTION</th>
                <th className="text-1xl text-white">DEPARTMENT STATUS</th>
                <th className="text-1xl text-white">ACTION</th>
                <th className="text-1xl text-white">
                  <Link to="/department/add" className="text-black">
                    <IoIosPersonAdd style={{ height: "50px", width: "50px", color: "#A3E636" }} />
                  </Link>
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredDepartments.map((item, index) => (
                <tr key={index}>
                  <td>{item.dept_name}</td>
                  <td>{item.dept_description}</td>
                  <td>
                    <center>
                      {item.dept_status_id === 1 ? (
                        <RiAccountPinCircleFill
                          style={{ fontSize: "25px", color: "green", alignItems: "center" }}
                        />
                      ) : (
                        <MdOutlineNoAccounts
                          style={{ fontSize: "25px", color: "red", alignItems: "center" }}
                        />
                      )}
                    </center>
                  </td>
                  <td>
                    <div className="flex">
                      <div className="flex-none mr-3">
                        <Link to={`/department/edit/${item.id}`} className="text-black">
                          <FaEye style={{ fontSize: "20px", color: "#A3E636", padding: "0%" }} />
                        </Link>
                      </div>
                      <div className="flex-none mr-3">
                        <MdAutoDelete
                          onClick={() => {
                            setDeactivateEmployeeId(item.id);
                            document.getElementById('removeEmployee').showModal();
                          }}
                          style={{ fontSize: "20px", color: "#A3E636" }}
                        />
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <h1>NO DATA test</h1>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    departmentData: state.departmentState,
    loading: state.departmentState.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchDepartments: () => dispatch(fetchDepartments()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Department);
