import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutInstitute from './pages/About/AboutInstitute';
import VisionMission from './pages/About/VisionMission';
import FounderMessage from './pages/About/FounderMessage';
import CampusDirectorMessage from './pages/About/CampusDirectorMessage';
import PrincipalsMessage from './pages/About/PrincipalsMessage';
import GoverningBody from './pages/About/GoverningBody';
import AffiliationCertification from './pages/About/AffiliationCertification';
import DPharmacy from './pages/Admissions/DPharmacy';
import InformationBrochure from './pages/Admissions/InformationBrochure';
import AcademicCalendar from './pages/Academics/AcademicCalendar';
import ExamTimeTable from './pages/Academics/ExamTimeTable';
import Syllabus from './pages/Academics/Syllabus';
import Results from './pages/Academics/Results';
import Rankers from './pages/Academics/Rankers';
import TeachingStaff from './pages/Faculty/TeachingStaff';
import NonTeachingStaff from './pages/Faculty/NonTeachingStaff';
import Campus from './pages/Infrastructure/Campus';
import Facilities from './pages/Infrastructure/Facilities';
import Library from './pages/Infrastructure/Library';
import Canteen from './pages/Infrastructure/Canteen';
import AntiRaggingCommittee from './pages/Administration/AntiRaggingCommittee';
import AntiDiscriminationCommittee from './pages/Administration/AntiDiscriminationCommittee';
import StudentGrievanceRedressalCommittee from './pages/Administration/StudentGrievanceRedressalCommittee';
import EntrepreneurshipDevelopmentCell from './pages/Administration/EntrepreneurshipDevelopmentCell';
import FacultyGrievanceRedressalCommittee from './pages/Administration/FacultyGrievanceRedressalCommittee';
import TrainingPlacementCareerGuidanceCommittee from './pages/Administration/TrainingPlacementCareerGuidanceCommittee';
import WomensGrievanceRedressalCommittee from './pages/Administration/WomensGrievanceRedressalCommittee';
import Alumni from './pages/StudentsZone/Alumni';
import Gallery from './pages/StudentsZone/Gallery';
import ContactUs from './pages/ContactUs';
import AboutOrganization from './pages/About/AboutOrganization';

// Admin Components
import AdminDashboard from './pages/Admin/AdminDashboard';
import ProtectedRoute from './components/ProtectedRoute';
import { DataProvider } from './context/DataContext';

function App() {
  return (
    <DataProvider>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              
              {/* About Us Routes */}
              <Route path="/about/institute" element={<AboutInstitute />} />
              <Route path="/about/organization" element={<AboutOrganization />} />
              <Route path="/about/vision-mission" element={<VisionMission />} />
              <Route path="/about/founder-message" element={<FounderMessage />} />
              <Route path="/about/campus-director-message" element={<CampusDirectorMessage />} />
              <Route path="/about/principals-message" element={<PrincipalsMessage />} />
              <Route path="/about/governing-body" element={<GoverningBody />} />
              <Route path="/about/affiliation-certification" element={<AffiliationCertification />} />
              
              {/* Admissions Routes */}
              <Route path="/admissions/d-pharmacy" element={<DPharmacy />} />
              <Route path="/admissions/information-brochure" element={<InformationBrochure />} />
              
              {/* Academics Routes */}
              <Route path="/academics/calendar" element={<AcademicCalendar />} />
              <Route path="/academics/exam-timetable" element={<ExamTimeTable />} />
              <Route path="/academics/syllabus" element={<Syllabus />} />
              <Route path="/academics/results" element={<Results />} />
              <Route path="/academics/rankers" element={<Rankers />} />
              
              {/* Faculty Routes */}
              <Route path="/faculty/teaching-staff" element={<TeachingStaff />} />
              <Route path="/faculty/non-teaching-staff" element={<NonTeachingStaff />} />
              
              {/* Infrastructure Routes */}
              <Route path="/infrastructure/campus" element={<Campus />} />
              <Route path="/infrastructure/facilities" element={<Facilities />} />
              <Route path="/infrastructure/library" element={<Library />} />
              <Route path="/infrastructure/canteen" element={<Canteen />} />
              
              {/* Administration Routes */}
              <Route path="/administration/anti-ragging-committee" element={<AntiRaggingCommittee />} />
              <Route path="/administration/anti-discrimination-committee" element={<AntiDiscriminationCommittee />} />
              <Route path="/administration/student-grievance-redressal-committee" element={<StudentGrievanceRedressalCommittee />} />
              <Route path="/administration/entrepreneurship-development-cell" element={<EntrepreneurshipDevelopmentCell />} />
              <Route path="/administration/faculty-grievance-redressal-committee" element={<FacultyGrievanceRedressalCommittee />} />
              <Route path="/administration/training-placement-career-guidance-committee" element={<TrainingPlacementCareerGuidanceCommittee />} />
              <Route path="/administration/womens-grievance-redressal-committee" element={<WomensGrievanceRedressalCommittee />} />
              
              {/* Students Zone Routes */}
              <Route path="/students-zone/alumni" element={<Alumni />} />
              <Route path="/students-zone/gallery" element={<Gallery />} />
              
              {/* Contact Route */}
              <Route path="/contact" element={<ContactUs />} />
              
              {/* Admin Routes - Fixed nested routing */}
              <Route path="/admin/*" element={
                <ProtectedRoute>
                  <AdminDashboard />
                </ProtectedRoute>
              } />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </DataProvider>
  );
}

export default App;