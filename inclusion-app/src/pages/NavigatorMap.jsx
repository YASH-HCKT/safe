import MapSection from '../components/MapSection';

const NavigatorMap = () => {
    return (
        <div className="h-screen w-full bg-[#0f172a]">
            <MapSection showSidebar={false} showNavPanel={false} showSOS={true} isMobile={true} />
        </div>
    );
};

export default NavigatorMap;
