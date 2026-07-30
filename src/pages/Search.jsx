import { TrendingUp, Search } from 'lucide-react'
import '../App.css'

const SearchPage = ({ user, onLogout }) => {
  return (
    <div className="app">
      <aside className="sidebar">
        <div className="sidebar-header"><h2>Grand Nusantara</h2></div>
        <nav className="sidebar-nav">
          <a href="/dashboard" className="nav-item"><TrendingUp size={20} />Dashboard</a>
          <a href="/rooms" className="nav-item"><TrendingUp size={20} />Data Kamar</a>
          <a href="/guests" className="nav-item"><TrendingUp size={20} />Data Tamu</a>
          <a href="/reservations" className="nav-item"><TrendingUp size={20} />Reservasi</a>
          <a href="/checkin" className="nav-item"><TrendingUp size={20} />Check-In</a>
          <a href="/checkout" className="nav-item"><TrendingUp size={20} />Check-Out</a>
          <a href="/search" className="nav-item active"><TrendingUp size={20} />Pencarian</a>
        </nav>
      </aside>
      <main className="main-content">
        <header className="top-bar">
          <h2 style={{ color: 'var(--text-primary)' }}>Pencarian</h2>
          <div className="user-info">
            <div className="user-avatar">{user?.name?.charAt(0).toUpperCase() || 'A'}</div>
            <span style={{ color: 'var(--text-secondary)' }}>{user?.name || 'Admin'}</span>
            <button onClick={onLogout} className="logout-btn">Logout</button>
          </div>
        </header>
        <div className="page-content">
          <div className="page-header"><h1>Search Data</h1><p>Search across all hotel data</p></div>
          <div className="card">
            <div className="card-header"><h3>Advanced Search</h3></div>
            <div className="card-body">
              <div className="form-group">
                <label>Search Type</label>
                <select style={{width: '100%'}}>
                  <option>All</option>
                  <option>Guests</option>
                  <option>Rooms</option>
                  <option>Reservations</option>
                </select>
              </div>
              <div className="search-bar">
                <input type="text" placeholder="Enter search term..." style={{flex: 1}} />
                <button><Search size={18} /> Search</button>
              </div>
              <div style={{marginTop: '2rem', textAlign: 'center', color: 'var(--text-secondary)', padding: '3rem'}}>
                <Search size={48} style={{opacity: 0.5, marginBottom: '1rem'}} />
                <p>Enter your search criteria above to find data</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
export default SearchPage