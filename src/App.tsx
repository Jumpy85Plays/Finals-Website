/**
 * Main Application Component
 * 
 * This component serves as the root of the application, setting up:
 * - React Query for data fetching
 * - Theme provider for dark/light mode
 * - Toast notifications
 * - Routing configuration
 */
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeProvider } from "@/components/ThemeProvider";
import { NavigationHeader } from "@/components/NavigationHeader";
import RoleSelectionPage from "./pages/RoleSelectionPage";
import StudentRegistration from "./pages/StudentRegistration";
import CoachDashboard from "./pages/CoachDashboard";
import CoordinatorDashboard from "./pages/CoordinatorDashboard";
import OfficialGallery from "./pages/OfficialGallery";

// Initialize React Query client
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="dark">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <NavigationHeader />
          <main className="container mx-auto p-6 mt-14">
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={<RoleSelectionPage />} />
                <Route path="/student/register" element={<StudentRegistration />} />
                <Route path="/coach/dashboard" element={<CoachDashboard />} />
                <Route path="/coordinator/dashboard" element={<CoordinatorDashboard />} />
                <Route path="/official/gallery" element={<OfficialGallery />} />
              </Routes>
            </AnimatePresence>
          </main>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;