import { Navigate, Route, Routes } from "react-router-dom";
import { useAtom } from "jotai/react";
import { authAtom } from "./store/auth";
import LoginPage from "./pages/LoginPage";
import ForgotPassword from "./components/common/ForgotPassword";
import Properties from "./pages/Properties";
import FloorInformationForm from "./pages/FloorInformation";
import UnitInformationForm from "./pages/UnitInformation";
import People from "./pages/Contact";
import AppHeader from "./components/common/AppHeader";
import AppBreadCrumb from "./components/common/AppBreadCrumb";
import AddNewProperty from "./pages/AddNewProperty";
import PrivateRoutes from "./layouts/PrivateRoutes";
import Dashboard from "./pages/Dashboard";
import Proposals from "./pages/Proposals";
import ReportingAnalytics from "./pages/ReportingAnalytics";
import { Toaster } from "react-hot-toast";
import PropertyPage from "./pages/PropertyPage";
import AddAssociatedPerson from "./pages/AddAssociatedPerson";
import AddUnitContact from "./pages/AddUnitContact";

function Layout({ children }) {
  return (
    <>
      <AppHeader />
      <AppBreadCrumb />
      {children}
    </>
  );
}

function App() {
  const [auth] = useAtom(authAtom);

  return (
    <>
      <Toaster />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route
          path="/properties"
          element={
            <PrivateRoutes>
              <Layout>
                <Properties />
              </Layout>
            </PrivateRoutes>
          }
        />
        <Route
          path="/property/add-new"
          element={
            <PrivateRoutes>
              <AppHeader />
              <AppBreadCrumb />
              <AddNewProperty />
            </PrivateRoutes>
          }
        />
        <Route
          path="/properties/:propertyId/floors/:floorId"
          element={
            <PrivateRoutes>
              <AppHeader />
              <AppBreadCrumb />
          <FloorInformationForm />
            </PrivateRoutes>
        
        }
        />
        <Route
          path="/properties/:propertyId/floors/:floorId/units/:unitId"
          element={
            <PrivateRoutes>
            <AppHeader />
            <AppBreadCrumb />
          <UnitInformationForm />
          </PrivateRoutes>
          }
        />
        <Route
          path="/properties/:propertyId"
          element={
            <PrivateRoutes>
            <AppHeader />
            <AppBreadCrumb />
          <PropertyPage />
          </PrivateRoutes>
          }
        />
        <Route
          path="/properties/:propertyId/add-contact"
          element={
            <PrivateRoutes>
              <AppHeader />
              <AppBreadCrumb />
              <AddAssociatedPerson />
            </PrivateRoutes>
          }
        />
        <Route
          path="/property/:propertyId/unit/add-contact"
          element={
            <PrivateRoutes>
              <AppHeader />
              <AppBreadCrumb />
              <AddUnitContact />
            </PrivateRoutes>
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoutes>
              <AppHeader />
              <AppBreadCrumb />
              <People />
            </PrivateRoutes>
          }
        />
        <Route
          path="/dashboard"
          element={
            <PrivateRoutes>
              <AppHeader />
              <AppBreadCrumb />
              <Dashboard />
            </PrivateRoutes>
          }
        />
        <Route
          path="/proposals"
          element={
            <PrivateRoutes>
              <AppHeader />
              <AppBreadCrumb />
              <Proposals />
            </PrivateRoutes>
          }
        />
        <Route
          path="/reporting"
          element={
            <PrivateRoutes>
              <AppHeader />
              <AppBreadCrumb />
              <ReportingAnalytics />
            </PrivateRoutes>
          }
        />
        {/* Temporarily disabling redirect logic */}
        {/* <Route path="*" element={<Navigate to={auth?.access_token ? "/properties" : "/login"} />} /> */}
      </Routes>
    </>
  );
}

export default App;
