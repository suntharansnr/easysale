import Axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { listAdminProducts } from '../actions/productActions';
import Createreport from './Createreport';
import { Link } from 'react-router-dom';
import { deleteReport } from '../actions/reportActions';
import Swal from 'sweetalert2';
import { REPORT_DELETE_RESET } from '../constants/reportConstants';

export default function Reporttable({reports}) {

  const [search,setSearch] = useState('');
  const [ad,setAd] = useState('');

  const [pageNumber,setPageNumber] = useState('');
  
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const [data,setData] = useState('');
  
  //load ads
  const productList = useSelector((state) => state.productList);
  const { loading, error, products, page, links } = productList;

  const dispatch = useDispatch();

  const reportDelete = useSelector((state) => state.reportDelete);
  const {
      loading: loadingDelete,
      error: errorDelete,
      success: successDelete,
  } = reportDelete;

  useEffect(() => {
    dispatch(listAdminProducts({ ad_status: 'all', pageNumber : 1 }));
  }, [dispatch]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Axios.get(`${process.env.REACT_APP_API_URL}/api/reports?page=${pageNumber}&q=${search}&product_id=${ad}`,
        {
          headers: { Authorization: `Bearer ${userInfo['data']['token']}` },
        }
      );
      setData(response.data);
      } catch (error) {
        console.log(error)
      }
    };
    fetchData(); 
    if (successDelete) {
      Swal.fire({
          icon:"success",
          text:'report removed successfuly'
      })
      dispatch({ type: REPORT_DELETE_RESET });
    }
  }, [pageNumber,userInfo,search,ad,successDelete ])

  const resetSearch = (e) => {
    e.preventDefault();
    setPageNumber('1');
    setSearch('');
    setAd('');
  }

  const deleteHandler = async (id) => {
    const isConfirm = await Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        return result.isConfirmed
      });

      if(!isConfirm){
        return;
      }

      dispatch(deleteReport(id));
  }

  return (
    <div>
      <div className="container m-5 text-center">
        <div className="row">
          <div className="col-md-3">
            <div className="form-group">
              <select className='form-control' onChange={(e) => setAd(e.target.value)}>
                {
                  products && products.map((product,i) => (
                    <option value={product.id}>{product.title}</option>
                  ))
                }
              </select>
            </div>
          </div>
          <div className="col-md-3">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder='Search...'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              ></input>
            </div>
          </div>
          <div className='col-md-3'>
            <div className="form-group">
                 <button className='btn btn-info btn-sm float-left' onClick={(e) => resetSearch(e)}>Reset</button>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className='row'>
          <div className='col-md-8'>
            <table className="table table-bordered table-dark">
              <thead>
                <tr>
                  <th>id</th>
                  <th>email</th>
                  <th>Reason</th>
                  <th>Ad</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {data?.reports?.data &&
                  data?.reports?.data.map((report, i) => (
                    <tr>
                      <td>{report.id}</td>
                      <td>{report.email}</td>
                      <td>{report.reason}</td>
                      <td>{report?.ad?.title}</td>
                      <td>
                      <Link to={`/product/` + report?.ad?.id}>
                            <a class="btn-sm btn-info" href="#"><i class="lni-eye"></i></a>
                      </Link>
                      <a className="btn-sm btn-danger ml-1" href="#" onClick={() => deleteHandler(report.id)}><i class="lni-trash"></i></a>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
            <div className='row'>
              <div className='col-md-9'>
                {
                  data?.reports?.current_page > 1 
                  && <button className='btn-sm btn-info m-1' onClick={() => setPageNumber(data?.reports?.current_page - 1)}>Prev</button>
                }
                <button className='btn-sm btn-info m-1' onClick={() => setPageNumber()}>{data?.reports?.current_page}</button>
                <button className='btn-sm btn-info m-1' onClick={() => setPageNumber(data?.reports?.current_page + 1)}>Next</button>
              </div>
              <div className='col-md-3'>
                <p className='text-muted float-right'>Showing {data?.reports?.data.length} of {data?.reports?.total}</p>
              </div>
            </div>
          </div>
          <div className='col-md-4'>
              <div className="card">
               <Createreport products={products}></Createreport>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}
