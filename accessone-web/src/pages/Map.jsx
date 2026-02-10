import MapSection from '../components/MapSection';

const Map = () => {
    return (
        <div className="min-h-screen bg-background-dark">
            <MapSection showSidebar={true} showNavPanel={true} showSOS={true} />
        </div>
    );
};

export default Map;
