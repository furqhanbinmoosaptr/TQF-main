import React, { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { PREFIX_APP_PATH, PREFIX_AUTH_PATH } from "./../Config/Config";
import ViewFpsDetails from "./Postlogin/FinishProductSpecification/ViewFpsDetails";
import PurchasedOrder from "./Postlogin/FinishProductSpecification/PurchasedOrder";
import QuotationCreateFPS from "./Postlogin/Quatations/QuotationCreateFPS";
import ProductDetails from "./Postlogin/FinishProductSpecification/ProductDetails";
import QuatationsForm from "./Postlogin/Quatations/QutationForm";
import Donations from "./Postlogin/Donations";
import Search from "./Postlogin/Search";
import Beneficiary from "./Postlogin/Beneficiary";
import Donors from "./Postlogin/Donors";
import { Report } from "@mui/icons-material";
import AddEvents from "./Postlogin/AddEvents";
import Programs from "./Postlogin/Configurations/Programs";
import Bank from "./Postlogin/Configurations/Bank";
import Pettycash from "./Postlogin/Expenses/PettyCash";
import Expenses from "./Postlogin/Expenses/PettyCash/Expenses";
import AdminActions from "./Postlogin/AdminActions";
import NGOS from "./Postlogin/NGOS";
import Volunteers from "./Postlogin/Volunteers";
import EDPForm from "./Postlogin/Appliations/EDP";
import EDP from "./Postlogin/Appliations/EDP";
import ESP from "./Postlogin/Appliations/ESP/indes";
import ESPForm from "./Postlogin/Appliations/ESP/ESPForm";
import ESPform from "./Postlogin/Forms/ESPform";
import VolunteerForm from "./Postlogin/Forms/ESPform/VolunteerForm";
import NgoForm from "./Postlogin/Forms/ESPform/NgoForm";
import DonorsDetails from "./TableDetails/DonorsDetails";
import DonorDetail from "./TableDetails/DonorsDetails";
import HSPform from "./Postlogin/Forms/ESPform/HSPform";
const Dashboards = lazy(() => import("./Postlogin/Dashboard"));
const Quotations = lazy(() => import("./Postlogin/Quatations"));
const FinishProductSpecification = lazy(() =>
  import("./Postlogin/FinishProductSpecification")
);
const Customers = lazy(() => import("./Postlogin/Customers"));
const AddNewCustomer = lazy(() => import("./Postlogin/Customers/AddNewCustomer"));
const Products = lazy(() => import("./Postlogin/Products"));
const BatchSheet = lazy(() => import("./Postlogin/BatchSheet"));
const Orders = lazy(() => import("./Postlogin/Orders"));
const RawMaterials = lazy(() => import("./Postlogin/Inventory/RawMaterials"));
const AddProduct = lazy(() => import("./Postlogin/Inventory/RawMaterials/AddProduct"));
const VendorProfile = lazy(() => import("./Postlogin/Inventory/VendorProfile"));
const AddNewVendor = lazy(() => import("./Postlogin/Inventory/VendorProfile/AddNewVendor"));
const PurchaseOrders = lazy(() =>
  import("./Postlogin/Inventory/PurchaseOrders")
);
const PathNotFOund = lazy(() => import("./PathNotFound"));
const Signin = lazy(() => import("./PreLogin/Signin"));
const Signup = lazy(() => import("./PreLogin/Signup"));
const ForgotPassword = lazy(() => import("./PreLogin/ForgotPassword"));
const Views = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route
            exact
            path={`${PREFIX_APP_PATH}/dashboard`}
            element={<Dashboards />}
          />

          <Route
            exact
            path={`${PREFIX_APP_PATH}/donations`}
            element={<Donations />}
          />

<Route
            exact
            path={`${PREFIX_APP_PATH}/search`}
            element={<Search />}
          />
          <Route
            exact
            path={`${PREFIX_APP_PATH}/quotations`}
            element={<Quotations />}
          />

<Route
            exact
            path={`${PREFIX_APP_PATH}/beneficiary`}
            element={<Beneficiary />}
          />
          <Route
            exact
            path={`${PREFIX_APP_PATH}/donor`}
            element={<Donors />}
          />


<Route
            exact
            path={`${PREFIX_APP_PATH}/report`}
            element={<Report />}
          />

<Route
            exact
            path={`${PREFIX_APP_PATH}/add-events`}
            element={<AddEvents />}
          />

{/* configurations routes */}

<Route
            exact
            path={`${PREFIX_APP_PATH}/configurations/programs`}
            element={<Programs />}
          />

<Route
            exact
            path={`${PREFIX_APP_PATH}/configurations/bank`}
            element={<Bank />}
          />

          {/* expensess routes */}

          <Route
            exact
            path={`${PREFIX_APP_PATH}/expenses/petty-cash`}
            element={<Pettycash />}
          />

<Route
            exact
            path={`${PREFIX_APP_PATH}/expenses/espenses`}
            element={<Expenses />}
          />

{/* // applications routes */}
<Route
            exact
            path={`${PREFIX_APP_PATH}/applications/esp`}
            element={<ESP />}
          />
          
          <Route
            exact
            path={`${PREFIX_APP_PATH}/applications/esp-form`}
            element={<ESPForm />}
          />

          <Route
            exact
            path={`${PREFIX_APP_PATH}/applications/hsp`}
            element={<EDP />}
          /> 
          <Route
            exact
            path={`${PREFIX_APP_PATH}/applications/wsp`}
            element={<EDP />}
          /> 

<Route
            exact
            path={`${PREFIX_APP_PATH}/applications/edp`}
            element={<EDP />}
          /> 

<Route
            exact
            path={`${PREFIX_APP_PATH}/app/applications/edp-form`}
            element={<EDPForm />}
          />


            {/* form routes */}


            <Route
            exact
            path={`${PREFIX_APP_PATH}/form_esp`}
            element={<ESPform />}
          />

          <Route
          exact
          path={`${PREFIX_APP_PATH}/Volunteer/form`}
          element={<VolunteerForm/>}
          />

<Route
          exact
          path={`${PREFIX_APP_PATH}/ngo/form`}
          element={<NgoForm/>}
          />

<Route
          exact
          path={`${PREFIX_APP_PATH}/hsp/form`}
          element={<HSPform/>}
          />




{/* admin routes */}
<Route
            exact
            path={`${PREFIX_APP_PATH}/admin-actions`}
            element={<AdminActions />}
          />

<Route
            exact
            path={`${PREFIX_APP_PATH}/ngos`}
            element={<NGOS />}
          />

<Route
            exact
            path={`${PREFIX_APP_PATH}/Volunteers`}
            element={<Volunteers />}
          />

<Route
            exact
            path={`${PREFIX_APP_PATH}/donors`}
            element={<Donors />}
          />


 {/*details pages routes  */}
 <Route
            exact
            path={`${PREFIX_APP_PATH}/donor/:id`}
            element={<DonorDetail />}
          />

          <Route
            exact
            path={`${PREFIX_APP_PATH}/quotations/quotation-create-fps`}
            element={<QuotationCreateFPS />}
          />
          <Route
            exact
            path={`${PREFIX_APP_PATH}/quotations/quotation-form`}
            element={<QuatationsForm />}
          />
          <Route
            exact
            path={`${PREFIX_APP_PATH}/finish-product-specification`}
            element={<FinishProductSpecification />}
          />
          <Route
            exact
            path={`${PREFIX_APP_PATH}/finish-product-specification/view-fps-details`}
            element={<ViewFpsDetails />}
          />
          <Route
            exact
            path={`${PREFIX_APP_PATH}/finish-product-specification/purchased-order`}
            element={<PurchasedOrder />}
          />
          <Route
            exact
            path={`${PREFIX_APP_PATH}/finish-product-specification/product-details`}
            element={<ProductDetails />}
          />
          <Route
            exact
            path={`${PREFIX_APP_PATH}/customers`}
            element={<Customers />}
          />
          <Route
            exact
            path={`${PREFIX_APP_PATH}/add-new-customer`}
            element={<AddNewCustomer />}
          />
          <Route
            exact
            path={`${PREFIX_APP_PATH}/products`}
            element={<Products />}
          />
          <Route
            exact
            path={`${PREFIX_APP_PATH}/batch-sheet`}
            element={<BatchSheet />}
          />
          <Route
            exact
            path={`${PREFIX_APP_PATH}/orders`} m 
            element={<Orders />}
          />
          <Route
            exact
            path={`${PREFIX_APP_PATH}/inventory/raw-materials`}
            element={<RawMaterials />}
          />
          <Route
            exact
            path={`${PREFIX_APP_PATH}/add-product`}
            element={<AddProduct />}
          />
          <Route
            exact
            path={`${PREFIX_APP_PATH}/inventory/vendor-profile`}
            element={<VendorProfile />}
          />
          <Route
            exact
            path={`${PREFIX_APP_PATH}/add-new-vendor`}
            element={<AddNewVendor />}
          />
          
          <Route
            exact
            path={`${PREFIX_APP_PATH}/inventory/purchase-orders`}
            element={<PurchaseOrders />}
          />

          <Route
            exact
            path={`${PREFIX_AUTH_PATH}/signin`}
            element={<Signin />}
          />
          <Route
            exact
            path={`${PREFIX_AUTH_PATH}/signup`}
            element={<Signup />}
          />

          <Route
            exact
            path={`${PREFIX_AUTH_PATH}/forgot-password`}
            element={<ForgotPassword />}
          />
          <Route
            exact
            path="/app/inventory"
            element={<Navigate to="/app/inventory/raw-materials" />}
          />
          <Route exact path="/" element={<Navigate to="/app/dashboard" />} />

          

          <Route path="*" element={<PathNotFOund />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default Views;
