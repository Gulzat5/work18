import React from "react";
import { Route, Routes } from "react-router-dom";
import { Cours } from "../pages/MaterialPages/Cours";
import { Notification } from "../pages/Notification";
import { Material } from "../pages/CoursPages/Material";
import { Student } from "../pages/CoursPages/Student";
import { Rating } from "../pages/CoursPages/Rating";
import { Shedule } from "../pages/Shedule";
import { Anouncement } from "../pages/Anouncement";
import { DetailPage } from "../pages/CoursPages/DetailPage";
import { MaterialDetail } from "../pages/CoursPages/MaterialDetail";
import { Submitted } from "../pages/MaterialPages/Submitted";
import { Late } from "../pages/MaterialPages/Late";
import { Waiting } from "../pages/MaterialPages/Waiting";

export const MainRouts = () => {
  return (
    <div>
      <Routes>
        <Route path="/courses/" element={<Cours />}>
          <Route path="materials" element={<Material />} />
          <Route path="materials/:id/details" element={<MaterialDetail />}>
            <Route path="submitted/" element={<Submitted />} />
            <Route path="waiting" element={<Waiting />} />
            <Route path="late" element={<Late />} />
          </Route>
          <Route path="student" element={<Student />} />
          <Route path="student/:id/details" element={<DetailPage />} />
          <Route path="rating" element={<Rating />}></Route>
        </Route>

        <Route path="/anoucements" element={<Anouncement />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/schedule" element={<Shedule />} />
      </Routes>
    </div>
  );
};
