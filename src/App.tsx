import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// CHANGED: Import HashRouter instead of BrowserRouter
import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import Songs from "./pages/Songs";
import Highlights from "./pages/Highlights";
import Gallery from "./pages/Gallery";
import Quotes from "./pages/Quotes";
import Tribute from "./pages/Tribute";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      {/* CHANGED: Using HashRouter. 
          Note: We don't need 'basename' with HashRouter because the '#' 
          automatically handles the sub-folder logic for us.
      */}
      <HashRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/songs" element={<Songs />} />
            <Route path="/highlights" element={<Highlights />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/quotes" element={<Quotes />} />
            <Route path="/tribute" element={<Tribute />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;