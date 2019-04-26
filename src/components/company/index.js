import React, { Component } from "react";
import { connect } from "react-redux";
import { Formik, Form } from "formik";
import Trash from "../../images/trash.svg";
import { Link } from "react-router-dom";
import './company.scss'
// import Table from 'rc-table';

class Company extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    const { data } = this.props.userdata;
    // const columns = [{
    //     title: 'Name', dataIndex: 'name', key:'name', width: 100,
    //   }, {
    //     title: 'Age', dataIndex: 'age', key:'age', width: 100,
    //   }, {
    //     title: 'Address', dataIndex: 'address', key:'address', width: 200,
    //   }, {
    //     title: 'Operations', dataIndex: '', key:'operations', render: () => <a href="#">Delete</a>,
    //   }];
    //   const data = [
    //     { name: 'Jack', age: 28, address: 'some where', key:'1' },
    //     { name: 'Rose', age: 36, address: 'some where', key:'2' },
    //   ];
    return (
      <div className="col-md-8 offset-md-2 col-10 offset-1 companyList">
        {/* <Table columns={columns} data={data} /> */}
        <table class="table table-hover companyTable ">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Title</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>
                <Link to={{ pathname: `/companyDetails/` }}>
                  {data && data.companyDetails.title}
                </Link>
              </td>
              <td>
                <img src={Trash} width="20" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  userdata: state.auth.userdata.data
});

const mapDispatchToProps = () => {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Company);
