
import { useState } from "react";
import "./admin.css";

function Admin() {
  const [activePage, setActivePage] = useState("Dashboard");

  const [requests, setRequests] = useState([
    {
      id: 1,
      name: "Rahul Sharma",
      fuel: "Petrol",
      quantity: "5 Litres",
      location: "Kanpur",
      status: "Pending",
    },
    {
      id: 2,
      name: "Priya Singh",
      fuel: "Diesel",
      quantity: "10 Litres",
      location: "Lucknow",
      status: "Completed",
    },
    {
      id: 3,
      name: "Aman Verma",
      fuel: "Petrol",
      quantity: "8 Litres",
      location: "Kanpur",
      status: "Pending",
    },
    {
      id: 4,
      name: "Neha Gupta",
      fuel: "Diesel",
      quantity: "6 Litres",
      location: "Unnao",
      status: "Pending",
    },
  ]);

  const [search, setSearch] = useState("");

  const updateStatus = (id, newStatus) => {
    setRequests(
      requests.map((request) =>
        request.id === id
          ? { ...request, status: newStatus }
          : request
      )
    );
  };

  const totalRequests = requests.length;

  const pendingRequests = requests.filter(
    (request) => request.status === "Pending"
  ).length;

  const completedRequests = requests.filter(
    (request) => request.status === "Completed"
  ).length;

  const filteredRequests = requests.filter((request) =>
    `${request.name} ${request.fuel} ${request.location} ${request.status}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  const menuItems = [
    "Dashboard",
    "Fuel Requests",
    "Customers",
    "Vendors",
    "Drivers",
    "Settings",
  ];

  return (
    <div className="admin-page">
      {/* Sidebar */}
      <aside className="admin-sidebar">
        <h2 className="admin-logo">
          ⛽ Fuel<span>Rescue</span>
        </h2>

        <p className="admin-label">ADMIN PANEL</p>

        <div className="admin-menu">
          {menuItems.map((item) => (
            <button
              key={item}
              className={
                activePage === item
                  ? "admin-menu-btn active"
                  : "admin-menu-btn"
              }
              onClick={() => setActivePage(item)}
            >
              {item === "Dashboard" && "📊"}
              {item === "Fuel Requests" && "⛽"}
              {item === "Customers" && "👥"}
              {item === "Vendors" && "🏪"}
              {item === "Drivers" && "🚚"}
              {item === "Settings" && "⚙️"}
              {" "}{item}
            </button>
          ))}
        </div>

        <div className="admin-sidebar-bottom">
          <div className="admin-profile">
            <div className="admin-avatar">A</div>
            <div>
              <strong>Administrator</strong>
              <p>System Admin</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="admin-main">
        <header className="admin-header">
          <div>
            <h1>{activePage}</h1>
            <p>Welcome to your FuelRescue management panel.</p>
          </div>

          <div className="admin-header-right">
            <span className="admin-status">● Online</span>
          </div>
        </header>

        {/* Dashboard */}
        {activePage === "Dashboard" && (
          <>
            <section className="admin-stats">
              <div className="admin-stat-card">
                <div className="admin-stat-icon">📋</div>
                <p>Total Requests</p>
                <h2>{totalRequests}</h2>
                <span>All fuel requests</span>
              </div>

              <div className="admin-stat-card">
                <div className="admin-stat-icon">⏳</div>
                <p>Pending Requests</p>
                <h2>{pendingRequests}</h2>
                <span>Awaiting completion</span>
              </div>

              <div className="admin-stat-card">
                <div className="admin-stat-icon">✅</div>
                <p>Completed Deliveries</p>
                <h2>{completedRequests}</h2>
                <span>Successfully completed</span>
              </div>

              <div className="admin-stat-card">
                <div className="admin-stat-icon">👥</div>
                <p>Total Customers</p>
                <h2>120</h2>
                <span>Demo customer count</span>
              </div>
            </section>

            <section className="admin-welcome">
              <h2>Welcome to FuelRescue! ⛽</h2>
              <p>
                Manage emergency fuel requests, monitor deliveries,
                and oversee your platform from one place.
              </p>
              <button
                className="admin-primary-btn"
                onClick={() => setActivePage("Fuel Requests")}
              >
                Manage Fuel Requests
              </button>
            </section>

            <RequestTable
              requests={filteredRequests}
              search={search}
              setSearch={setSearch}
              updateStatus={updateStatus}
            />
          </>
        )}

        {/* Fuel Requests */}
        {activePage === "Fuel Requests" && (
          <RequestTable
            requests={filteredRequests}
            search={search}
            setSearch={setSearch}
            updateStatus={updateStatus}
          />
        )}

        {/* Customers */}
        {activePage === "Customers" && (
          <section className="admin-content-card">
            <h2>Customer Management</h2>
            <p>Customer information will appear here.</p>
            <div className="admin-info-row">
              <span>Total registered customers</span>
              <strong>120</strong>
            </div>
            <p className="admin-note">
              Customer records are demo information until a database
              is connected.
            </p>
          </section>
        )}

        {/* Vendors */}
        {activePage === "Vendors" && (
          <section className="admin-content-card">
            <h2>Vendor Management</h2>
            <p>Manage fuel vendors registered on the platform.</p>
            <div className="admin-info-row">
              <span>Total vendors</span>
              <strong>12</strong>
            </div>
            <p className="admin-note">
              Vendor information will be loaded from the database
              when backend integration is added.
            </p>
          </section>
        )}

        {/* Drivers */}
        {activePage === "Drivers" && (
          <section className="admin-content-card">
            <h2>Driver Management</h2>
            <p>Monitor delivery drivers and their assignments.</p>
            <div className="admin-info-row">
              <span>Total drivers</span>
              <strong>18</strong>
            </div>
            <p className="admin-note">
              Driver records are currently sample data.
            </p>
          </section>
        )}

        {/* Settings */}
        {activePage === "Settings" && (
          <section className="admin-content-card">
            <h2>Settings</h2>
            <p>Admin panel settings and preferences.</p>
            <div className="admin-info-row">
              <span>Application</span>
              <strong>FuelRescue</strong>
            </div>
            <div className="admin-info-row">
              <span>Panel status</span>
              <strong>Active</strong>
            </div>
          </section>
        )}
      </main>
    </div>
  );
}

function RequestTable({ requests, search, setSearch, updateStatus }) {
  return (
    <section className="admin-content-card">
      <div className="admin-table-header">
        <div>
          <h2>Fuel Requests</h2>
          <p>View and manage customer fuel requests.</p>
        </div>

        <input
          type="text"
          className="admin-search"
          placeholder="Search requests..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
      </div>

      <div className="admin-table-wrapper">
        <table className="admin-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Customer</th>
              <th>Fuel Type</th>
              <th>Quantity</th>
              <th>Location</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {requests.length > 0 ? (
              requests.map((request) => (
                <tr key={request.id}>
                  <td>#{request.id}</td>
                  <td>{request.name}</td>
                  <td>{request.fuel}</td>
                  <td>{request.quantity}</td>
                  <td>{request.location}</td>
                  <td>
                    <span
                      className={`admin-badge ${
                        request.status === "Pending"
                          ? "pending"
                          : "completed"
                      }`}
                    >
                      {request.status}
                    </span>
                  </td>
                  <td>
                    {request.status === "Pending" ? (
                      <button
                        className="admin-complete-btn"
                        onClick={() =>
                          updateStatus(request.id, "Completed")
                        }
                      >
                        Complete
                      </button>
                    ) : (
                      <button
                        className="admin-undo-btn"
                        onClick={() =>
                          updateStatus(request.id, "Pending")
                        }
                      >
                        Reopen
                      </button>
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="admin-empty">
                  No requests found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default Admin;