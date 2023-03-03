import { Outlet, NavLink } from 'react-router-dom';

export function Layout({ listToken }) {
	return (
		<>
			<div className="Layout">
				<header className="Layout-header">
					<h1>Smart Shopping List</h1>
				</header>
				<main className="Layout-main">
					<Outlet />
				</main>
				<nav className="Nav">
					{!listToken ? (
						<NavLink to="/" className="Nav-link">
							Home
						</NavLink>
					) : null}
					{listToken ? (
						<NavLink to="/list" className="Nav-link">
							List
						</NavLink>
					) : null}
					{listToken ? (
						<NavLink to="/add-item" className="Nav-link">
							Add Item
						</NavLink>
					) : null}
				</nav>
			</div>
		</>
	);
}
