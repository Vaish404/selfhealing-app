import "./App.css";

function App() {
  return (
    <div className="hero">
      <nav>
        <h2 className="logo">CloudGuard</h2>
        <button className="cta">Get Started</button>
      </nav>

      <div className="content">
        <h1>Self-Healing Cloud Application</h1>
        <p>
          This app automatically recovers from failures using Kubernetes
          liveness probes & replicas — deployed via Jenkins CI/CD.
        </p>
        <a href="/api/health" className="btn">Check API Health</a>
      </div>

      <footer>
        Built with ❤️ using React • Docker • Kubernetes • Jenkins
      </footer>
    </div>
  );
}

export default App;

