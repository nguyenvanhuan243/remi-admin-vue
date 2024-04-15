<template>
  <CRow>
    <CCol :xs="12">
      <CCard class="mb-4">
        <CCardHeader>
          <strong>User Management</strong>
        </CCardHeader>
        <CCardBody>
          <CTable striped>
            <CTableHead>
              <CTableRow>
                <CTableHeaderCell scope="col">#</CTableHeaderCell>
                <CTableHeaderCell scope="col">ID</CTableHeaderCell>
                <CTableHeaderCell scope="col">Email</CTableHeaderCell>
                <CTableHeaderCell scope="col">Created At</CTableHeaderCell>
                <CTableHeaderCell scope="col">Actions</CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              <CTableRow v-for="(user, index) in userList" :key="user.id">
                <CTableHeaderCell scope="row">{{ index + 1 }}</CTableHeaderCell>
                <CTableDataCell>{{ user.id }}</CTableDataCell>
                <CTableDataCell>{{ user.email }}</CTableDataCell>
                <CTableDataCell>{{ user.created_at }}</CTableDataCell>
                <CTableDataCell>
                  <CButton @click="confirmDelete(user.id)" color="danger">Delete</CButton>
                </CTableDataCell>
              </CTableRow>
            </CTableBody>
          </CTable>
        </CCardBody>
      </CCard>
    </CCol>
  </CRow>
</template>

<script>
import axios from "axios";

export default {
  name: "Tables",
  data() {
    return {
      userList: [] // Initialize userList to an empty array
    };
  },
  async created() {
    try {
      // Make an HTTP GET request to fetch users data
      const response = await axios.get("https://remi-api.onrender.com/api/v1/admin/users", {
        headers: {
          Authorization: localStorage.getItem("adminAccessToken") // Include auth token in headers
        }
      });

      // Update the userList with the fetched user data
      this.userList = response.data; // Assuming response.data is an array of user objects
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  },
  methods: {
    async confirmDelete(userId) {
      if (window.confirm("Are you sure you want to delete this user?")) {
        this.deleteUser(userId);
      }
    },
    async deleteUser(userId) {
      try {
        // Make an HTTP DELETE request to delete user by ID
        await axios.delete(`https://remi-api.onrender.com/api/v1/admin/users/${userId}`, {
          headers: {
            Authorization: localStorage.getItem("adminAccessToken") // Include auth token in headers
          }
        });

        // Remove deleted user from userList
        this.userList = this.userList.filter(user => user.id !== userId);
      } catch (error) {
        console.error(`Error deleting user with ID ${userId}:`, error);
      }
    }
  }
};
</script>
