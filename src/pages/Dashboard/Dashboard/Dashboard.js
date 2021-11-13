import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import Sideber from '../Sideber/Sideber';
import {
    Switch,
    Route
} from "react-router-dom";
import AddAdmin from '../Admin/AddAdmin/AddAdmin';
import AddProduct from '../Admin/AddProduct/AddProduct';
import ManageProducts from '../Admin/ManageProducts/ManageProducts';
import ManageAllOrders from '../Admin/ManageAllOrders/ManageAllOrders/ManageAllOrders';
import MyOrders from '../Customer/MyOrders/MyOrders';
import AddReview from '../Customer/AddReview/AddReview';
import Pay from '../Customer/Pay/Pay';
import OrderNow from '../Customer/OrderNow/OrderNow';
// import Approved from '../ManageAllOrders/Approved/Approved';
import Approved from '../Admin/ManageAllOrders/Approved/Approved';
const Dashboard = () => {
    return (
        <div className="row">
            <div className="col-md-2 border-end">
                <Sideber />
            </div>
            <div className="col-md-10">
                <Switch>


                    <Route exact path="/dashboard/addAdmin"> <AddAdmin /> </Route>
                    <Route exact path="/dashboard/addProduct"> <AddProduct /> </Route>
                    <Route exact path="/dashboard/manageProducts"> <ManageProducts /> </Route>
                    <Route exact path="/dashboard/manageAllOrders"> <ManageAllOrders /> </Route>
                    <Route exact path="/dashboard/orders/update/:orderId"> <Approved /> </Route>


                    <Route exact path="/dashboard/pay"> <Pay /> </Route>
                    <Route exact path="/dashboard/product/:productId"> <OrderNow /> </Route>
                    <Route path="/dashboard/myOrders"> <MyOrders /> </Route>
                    <Route exact path="/dashboard/addReview"> <AddReview /> </Route>


                </Switch>
            </div>
        </div>
    );
};

export default Dashboard;