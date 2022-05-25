import React from "react";
import { Routes, Route } from 'react-router-dom';

import {
    AddPostTimeline, DetailPage, EditPostTimeline, PostProfile, SearchPage, TimelinePage, UserEdit, UserProfile
} from '../pages';

const MainContent = () => {
    return (
        <div className='container mx-auto'>
            <Routes>
                <Route path='/' element={ <TimelinePage /> }>
                    <Route path='/home' element={ <TimelinePage />}></Route>
                    <Route path='/add' element={ <AddPostTimeline />}></Route>

                </Route>

                <Route path="/timelines" element={ <TimelinePage />}></Route>
                <Route path='/profile' element={ <UserProfile /> }></Route>
                <Route path='/profile/post' element={ <PostProfile /> }></Route>
                <Route path="/search/:query" element={ <SearchPage />}></Route>
                <Route path="/add" element={ <AddPostTimeline />}></Route>
                <Route path="/editPost/:id" element={ <EditPostTimeline />}></Route>
                <Route path="/editUser" element={ <UserEdit />}></Route>
                <Route path="/detail/:id" element={ <DetailPage />}></Route>

            </Routes>
        </div>
    )
}

export default MainContent;