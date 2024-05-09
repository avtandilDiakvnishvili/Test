import { Login } from 'pages/Login/Login';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Protected from 'helpers/ProtectedRoute';
import { Register } from 'pages/Register/Register';
import Home from 'pages/Home/Home';
import SiteWrapper from 'components/Wrapper/Wrapper';
import Users from 'pages/users/users';
import Respodents from 'pages/respodents/Respodents';
import Results from 'pages/results/Results';
import Assesments from 'pages/assessments/Assessments';
import Profile from 'pages/profile/Profile';
import Forms from 'pages/Forms/Forms';
import FormCreate from 'pages/Forms/FormCreate';
import ToolbarComponent from 'pages/Forms/ToolbarComponent';
import MainFormForTools from 'pages/Forms/mainForms';
// import ResizeBlock from 'pages/Forms/Resize';


const CustomRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <Protected>
              <SiteWrapper>
                <Home />
              </SiteWrapper>
            </Protected>
          }
        />
        <Route
          path="/forms"
          element={
            <Protected>
              <SiteWrapper>
                <Forms />
              </SiteWrapper>
            </Protected>
          }
        />
        <Route
          path="/respodents"
          element={
            <Protected>
              <SiteWrapper>
                <Respodents />
              </SiteWrapper>
            </Protected>
          }
        />
        <Route
          path="/results"
          element={
            <Protected>
              <SiteWrapper>
                <Results />
              </SiteWrapper>
            </Protected>
          }
        />
        <Route
          path="/assessments"
          element={
            <Protected>
              <SiteWrapper>
                <Assesments />
              </SiteWrapper>
            </Protected>
          }
        />
        <Route
          path="/users"
          element={
            <Protected>
              <SiteWrapper>
                <Users />
              </SiteWrapper>
            </Protected>
          }
        />
        <Route
          path="/profile"
          element={
            <Protected>
              <SiteWrapper>
                <Profile />
              </SiteWrapper>
            </Protected>
          }
        />
         <Route
          path="/form-create"
          element={
            <Protected>
              <SiteWrapper>
                <FormCreate/>
              </SiteWrapper>
            </Protected>
          }
        />
         <Route
          path="/tools"
          element={
            <Protected>
              <SiteWrapper>
                <ToolbarComponent/>
              </SiteWrapper>
            </Protected>
          }
        />
         <Route
          path="/m_forms"
          element={
            <Protected>
              <SiteWrapper>
                <MainFormForTools/>
              </SiteWrapper>
            </Protected>
          }
        />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};

export default CustomRoutes;
