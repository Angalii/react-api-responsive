import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import Header from '../components/Header'; 
import Home from '../pages/Home';
import CharacterPage from '../pages/Characters'
import PostPage from '../pages/Posts'
import AboutUs from '../pages/AboutUs'
import CharacterDetail from '../pages/CharacterDetail';

const queryClient = new QueryClient();

const AppRoute = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                
                <Header />
                
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/characters" element={<CharacterPage />} />
                    <Route path="/:id" element={<CharacterDetail />} />
                    <Route path="/posts" element={<PostPage />} />
                    <Route path="/aboutus" element={<AboutUs />} />
                </Routes>

            </BrowserRouter>
        </QueryClientProvider>
    );
};

export default AppRoute;