import { BrowserRouter, Route, Routes } from "react-router-dom";

import ScrollToTop from "@/components/ScrollToTop";
import Layout from "@/layout/Layout";

// Pages
import About from "@/pages/About";
import Cart from "@/pages/Cart";
import Contact from "@/pages/Contact";
import Index from "@/pages/Index";
import NotFound from "@/pages/NotFound";
import Shop from "@/pages/Shop";
import Categories from "@/pages/Categories";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>

          {/* MAIN PAGES */}
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/categories" element={<Categories />} />

          {/* 404 PAGE */}
          <Route path="*" element={<NotFound />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;








// import { Toaster as Sonner } from "@/components/ui/sonner";
// import { Toaster } from "@/components/ui/toaster";
// import { TooltipProvider } from "@/components/ui/tooltip";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Index from "./pages/Index";
// import NotFound from "./pages/NotFound";

// const queryClient = new QueryClient();

// const App = () => (
//   <div className="min-h-screen bg-stone-900 text-foreground">
//     <QueryClientProvider client={queryClient}>
//     <TooltipProvider>
//       <Toaster />
//       <Sonner />
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Index />} />
//           {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
//           <Route path="*" element={<NotFound />} />
//         </Routes>
//       </BrowserRouter>
//     </TooltipProvider>
//   </QueryClientProvider>
//   </div>
// );

// export default App;
