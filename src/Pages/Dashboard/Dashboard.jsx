import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Dashboard = () => {
    return (
        <section>
            <div className="drawer drawer-mobile">
                <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <h2 className='text-3xl font-bold text-neutral'>Dashboard</h2><br />
                    <Outlet/>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-60 bg-base-100 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        <li><Link to={"/dashboard"}>My Appointments</Link></li>
                        <li><Link to={"/dashboard/review"}>My Reviews</Link></li>
                    </ul>

                </div>
            </div>
        </section>
    )
}

export default Dashboard