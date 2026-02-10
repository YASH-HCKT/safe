import { Outlet } from 'react-router-dom';
import BottomNav from './BottomNav';

const Layout = () => {
    return (
        <div className="relative flex h-screen w-full flex-col overflow-x-hidden pb-20">
            <main className="flex-1 overflow-y-auto">
                <Outlet />
            </main>
            <BottomNav />
        </div>
    );
};

export default Layout;
