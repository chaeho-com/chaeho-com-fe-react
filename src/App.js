function App() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Welcome to Chaeho's Portfolio</h1>
      <div style={styles.linkContainer}>
        <a
          href="https://www.youtube.com/@shy-chaeihou"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.button}
        >
          YouTube
        </a>
        <a
          href="https://github.com/VIRTUKCH/"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.button}
        >
          GitHub
        </a>
        <a
          href="https://www.instagram.com/chaeihou/"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.button}
        >
          Instagram
        </a>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'sans-serif',
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: '2rem',
    marginBottom: '2rem',
    fontWeight: '600',
  },
  linkContainer: {
    display: 'flex',
    gap: '1rem',
  },
  button: {
    fontSize: '1rem',
    padding: '0.5rem 1rem',
    border: '1px solid #0077cc',
    borderRadius: '6px',
    backgroundColor: 'white',
    color: '#0077cc',
    textDecoration: 'none',
    transition: 'all 0.2s ease-in-out',
  },
};

export default App;