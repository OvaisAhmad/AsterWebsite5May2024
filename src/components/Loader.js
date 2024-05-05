// components/Loader.js

const Loader = () => (
    <div style={{ position: 'fixed', top: 0, left: 0, right: 0, backgroundColor: 'rgba(0, 0, 0, 0.5)', zIndex: 9999, height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div className="loader"></div>
      <style jsx>{`
        .loader {
          border: 5px solid rgba(255, 255, 255, 0.2); /* Light grey border */
          border-top: 5px solid #ffffff; /* White border top */
          border-radius: 50%;
          width: 40px;
          height: 40px;
          animation: spin 1s linear infinite;
        }
  
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
  
  export default Loader;
  