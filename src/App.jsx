import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import AppRoutes from './routes/AppRoute';

const queryClient = new QueryClient();

const App = () => {
  
  return (
    <QueryClientProvider client={queryClient}>
      {/* <div className="fixed inset-0 -z-10 h-screen w-screen [background:radial-gradient(125%_125%_at_50%_10%,#000_45%,#88e23b_100%)]"></div> */}
      {/* <div className="fixed inset-0 -z-10 h-screen w-screen [background:radial-gradient(125%_125%_at_50%_10%,#02afc5_0%,#88e23b_60%,#000_100%)]"></div> */}
      <div className="fixed inset-0 -z-10 h-screen w-screen [background:radial-gradient(140%_140%_at_60%_140%,#88e23b_0%,#000_65%)]"></div>
      <AppRoutes />
    </QueryClientProvider>
  );
};

export default App;