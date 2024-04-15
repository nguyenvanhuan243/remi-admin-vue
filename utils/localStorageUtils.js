// localStorageUtils.js

// Function to get admin access token from localStorage
export function getAdminAccessToken() {
	return localStorage.getItem("adminAccessToken") || ""; // Return empty string if token is not found
}

export function removeAdminAccessToken() {
	return localStorage.removeItem("adminAccessToken")
}