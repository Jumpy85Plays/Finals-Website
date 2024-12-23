/**
 * Index Page Component
 * 
 * This is the landing page of the application where users select their role.
 * Features:
 * - Animated page transitions using Framer Motion
 * - Role selection interface
 * - Responsive layout
 * - Informative footer text
 */
import { motion } from "framer-motion";
import RoleSelectionGrid from "@/components/RoleSelectionGrid";

// Animation variants for page transitions
const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

const Index = () => {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="container mx-auto p-6"
    >
      <div className="text-center mb-12">
        <p className="text-muted-foreground text-lg">
          Select your role to continue with registration or access your dashboard
        </p>
      </div>
      
      <RoleSelectionGrid />
      
      <footer className="mt-12 text-center text-sm text-muted-foreground">
        <p>Please select the appropriate role that matches your participation in the event.</p>
      </footer>
    </motion.div>
  );
};

export default Index;